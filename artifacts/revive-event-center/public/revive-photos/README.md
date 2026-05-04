# Revive Photos

This folder holds every photo used by the Revive Event Center website.
The site currently ships with the real Revive photo set:

- `ballroom-wide.jpg` — wide interior view of the empty ballroom (chandeliers,
  ceiling, signature purple LED uplighting)
- `ballroom-angle.jpg` — angled interior view showing the wall sconces and
  pass-through to the kitchen / bar
- `exterior.jpg` — storefront with the custom gold lattice doors at
  443 W 18th Street, Merced
- `catering.jpg` — artisan grazing table (charcuterie, fruit, cheese, olives)
- `setup-blush.jpg` — fully styled reception in blush & ivory
- `setup-navy.jpg` — fully styled reception in navy & gold
- `setup-garden.jpg` — fully styled reception with a garden greenery wall
- `setup-greenery.jpg` — fully styled reception with lush greenery and tall
  floral centerpieces
- `setup-burgundy.jpg` — fully styled reception in crimson & ivory
- `setup-teal.jpg` — fully styled reception in teal & ivory

All originals were down-sized and re-encoded to JPEG at quality 82–85 for
fast page loads (typically 150–760 KB each).

## How to swap in or add more photos

1. Drop your image files (`.jpg`, `.jpeg`, `.png`, `.webp`) into this folder
   with descriptive filenames, for example:
   - `wedding-table-setting.jpg`
   - `quinceanera-dance-floor.jpg`
   - `golden-hour-exterior.jpg`

2. Open `src/content/images.ts`. Every photo URL used by the website is
   exported from that single file. Replace the URL for any image with the
   path to your file in this folder, for example:

   ```ts
   weddings: "/revive-photos/wedding-table-setting.jpg",
   ```

3. The "Recent Events & Inspiration" gallery on the home page is driven by a
   separate exported array (`recentEventsGallery`) in the same file. Edit
   each entry's `image`, `caption`, and `alt` fields to swap in your own
   photos.

That's it — no other code changes are required.

## Notes

- Files placed in `public/` are served from the site root. A file at
  `public/revive-photos/foo.jpg` is reachable at `/revive-photos/foo.jpg`.
- Keep new originals reasonably optimized (1600–2400px on the long edge,
  compressed JPEG/WebP). The bundled `scripts/process-photos.cjs` shows
  how the current set was processed with `sharp` if you want to re-run
  it on new uploads dropped into `attached_assets/`.
