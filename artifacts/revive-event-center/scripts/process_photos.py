#!/usr/bin/env python3
"""Build the website photo set from original camera files.

Real photos only. Never add AI-generated or stock images here, and never
present a styled render as a photo of the room.

Usage (from artifacts/revive-event-center):
    python3 scripts/process_photos.py            # build missing photos + manifest
    python3 scripts/process_photos.py --force    # rebuild every listed photo
    python3 scripts/process_photos.py --only exterior.jpg bar-lounge.jpg

Each entry maps an output JPEG (max 2400 px on the long edge) to its original
in ../../attached_assets (or the shared Media folder, copied there first).
Existing files are never deleted. WebP variants (640/1280/1920/2400 w) and
src/content/photo-dimensions.json are regenerated for every JPEG in the folder.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps, ImageStat

HERE = Path(__file__).resolve().parent
SITE = HERE.parent
OUT = SITE / "public" / "revive-photos"
ASSETS = SITE.parent.parent / "attached_assets"
MANIFEST = SITE / "src" / "content" / "photo-dimensions.json"

MAX_EDGE = 2400
WEBP_WIDTHS = (640, 1280, 1920, 2400)

# crop = (left, top, right, bottom) as fractions of the upright image.
# tone: "clean" = levels + gentle white balance; None = leave as shot.
PHOTOS: dict[str, dict] = {
    # Real events at Revive
    "event-wedding-red-setup.jpg": {"src": "revive-wedding-red-setup.jpg", "tone": "clean"},
    "wedding-table-detail.jpg": {"src": "revive-wedding-red-setup.jpg", "crop": (0.08, 0.52, 0.70, 1.0), "tone": "clean"},
    "event-colorful-reception-setup.jpg": {"src": "revive-colorful-reception-setup.jpg", "tone": "clean"},
    "cultural-dance.jpg": {"src": "IMG_0120_1782944710378.jpeg"},
    # Video still: trim the black letterbox bars.
    "cultural-ceremony.jpg": {"src": "IMG_0011_1782944710379.png", "crop": (0.0, 54 / 1050, 1.0, 997 / 1050)},
    "comedy-wide.jpg": {"src": "IMG_5997_1777920270356.jpeg"},
    "comedy-side.jpg": {"src": "IMG_5998_1777920270357.jpeg"},
    "comedy-performer.jpg": {"src": "FullSizeRender_1777920270357.jpeg"},
    "scale-front.jpg": {"src": "IMG_0097_1777920239081.jpeg"},
    "scale-side.jpg": {"src": "IMG_0095_1777920239081.jpeg"},
    "scale-angle.jpg": {"src": "IMG_0096_1777920239082.jpeg"},
    "scale-rear.jpg": {"src": "IMG_0098_1777920239082.jpeg"},
    "ambiance.jpg": {"src": "IMG_5993_1782944710378.jpeg"},
    "catering.jpg": {"src": "CQ_1777919656550.jpeg"},
    # The empty room
    "ballroom-wide.jpg": {"src": "IMG_9439_1777919646287.jpeg", "tone": "clean"},
    "ballroom-angle.jpg": {"src": "IMG_9440_1777919646315.jpeg", "tone": "clean"},
    # Bar
    "bar.jpg": {"src": "IMG_5884_1782944710378.jpeg"},
    "bar-lounge.jpg": {"src": "media-bar-cocktail-tables.jpeg", "crop": (0.0, 0.10, 1.0, 1.0), "tone": "clean", "cool": 0.02},
    # Details
    "table-setting.jpg": {"src": "media-table-black-linen.jpeg", "crop": (0.03, 0.04, 0.97, 0.93), "tone": "clean"},
    "centerpiece.jpg": {"src": "media-centerpiece-candle-tower.jpeg", "crop": (0.0, 0.0, 1.0, 0.92), "tone": "clean"},
    # Exterior: crop out the photographer's shadow and extra pavement.
    "exterior.jpg": {"src": "media-exterior-building-front.jpeg", "crop": (0.0, 0.055, 1.0, 0.70), "tone": "clean", "lift_shadows": True},
}


def tone_clean(im: Image.Image, cool: float = 0.0, lift_shadows: bool = False) -> Image.Image:
    """Gentle, photographic cleanup: levels, slight white balance, no filters."""
    im = ImageOps.autocontrast(im, cutoff=(0.4, 0.2), preserve_tone=True)
    r, g, b = im.split()
    # Partial gray-world balance (30%) keeps the room's warm light but removes casts.
    means = ImageStat.Stat(im).mean
    gray = sum(means) / 3
    gains = [1 + 0.3 * (gray / m - 1) if m else 1 for m in means]
    gains[0] -= cool
    gains[2] += cool
    r, g, b = (ch.point(lambda v, k=k: max(0, min(255, round(v * k)))) for ch, k in zip((r, g, b), gains))
    im = Image.merge("RGB", (r, g, b))
    if lift_shadows:
        lut = [round(255 * ((v / 255) ** 0.88)) for v in range(256)]
        im = im.point(lut * 3)
    return ImageEnhance.Color(im).enhance(1.04)


def build(name: str, spec: dict) -> None:
    src = ASSETS / spec["src"]
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    if crop := spec.get("crop"):
        w, h = im.size
        im = im.crop((round(crop[0] * w), round(crop[1] * h), round(crop[2] * w), round(crop[3] * h)))
    im.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
    if spec.get("tone") == "clean":
        im = tone_clean(im, spec.get("cool", 0.0), spec.get("lift_shadows", False))
    im = im.filter(ImageFilter.UnsharpMask(radius=1.0, percent=35, threshold=3))
    im.save(OUT / name, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"  {name:38s} {im.size[0]}x{im.size[1]}  {(OUT / name).stat().st_size // 1024} KB")


def responsive() -> None:
    manifest = {}
    for jpg in sorted(OUT.glob("*.jpg")):
        im = Image.open(jpg)
        sources, seen = [], set()
        for width in WEBP_WIDTHS:
            actual = min(width, im.width)
            if actual in seen:
                continue
            seen.add(actual)
            out = OUT / f"{jpg.stem}-{width}.webp"
            if not out.exists() or out.stat().st_mtime < jpg.stat().st_mtime:
                v = im.copy()
                if v.width > actual:
                    v = v.resize((actual, round(im.height * actual / im.width)), Image.LANCZOS)
                v.save(out, "WEBP", quality=78, method=6)
            sources.append({"file": out.name, "width": actual})
        manifest[jpg.name] = {"width": im.width, "height": im.height, "sources": sources}
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"Manifest: {len(manifest)} photos -> {MANIFEST.relative_to(SITE)}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--only", nargs="*")
    args = parser.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    for name, spec in PHOTOS.items():
        if args.only and name not in args.only:
            continue
        if (OUT / name).exists() and not args.force and not args.only:
            continue
        build(name, spec)
    responsive()


if __name__ == "__main__":
    main()
