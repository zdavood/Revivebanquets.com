const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ATTACHED = path.resolve(__dirname, "..", "..", "..", "attached_assets");
const OUT = path.resolve(__dirname, "..", "public", "revive-photos");

const SRC = {
  ballroomWide: path.join(ATTACHED, "IMG_9439_1777919646287.jpeg"),
  ballroomAngle: path.join(ATTACHED, "IMG_9440_1777919646315.jpeg"),
  exterior: path.join(ATTACHED, "IMG_7745_1777919666816.jpeg"),
  catering: path.join(ATTACHED, "CQ_1777919656550.jpeg"),
  collage: path.join(ATTACHED, "02_1777919656549.png"),
};

async function landscape(srcPath, outName, width = 2400) {
  const out = path.join(OUT, outName);
  await sharp(srcPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  const { size } = fs.statSync(out);
  console.log(`  ${outName}  ${(size / 1024).toFixed(0)}KB`);
}

async function portrait(srcPath, outName, height = 1800) {
  const out = path.join(OUT, outName);
  await sharp(srcPath)
    .rotate()
    .resize({ height, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  const { size } = fs.statSync(out);
  console.log(`  ${outName}  ${(size / 1024).toFixed(0)}KB`);
}

async function sliceCollage() {
  const meta = await sharp(SRC.collage).metadata();
  const cellW = Math.floor(meta.width / 3);
  const cellH = Math.floor(meta.height / 2);
  const cells = [
    { name: "setup-blush.jpg", col: 0, row: 0 },
    { name: "setup-navy.jpg", col: 1, row: 0 },
    { name: "setup-garden.jpg", col: 2, row: 0 },
    { name: "setup-greenery.jpg", col: 0, row: 1 },
    { name: "setup-burgundy.jpg", col: 1, row: 1 },
    { name: "setup-teal.jpg", col: 2, row: 1 },
  ];
  for (const c of cells) {
    const out = path.join(OUT, c.name);
    await sharp(SRC.collage)
      .extract({ left: c.col * cellW, top: c.row * cellH, width: cellW, height: cellH })
      .resize({ width: 1200 })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(out);
    const { size } = fs.statSync(out);
    console.log(`  ${c.name}  ${(size / 1024).toFixed(0)}KB`);
  }
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });

  // Remove old generic placeholders so the folder reflects the real photo set.
  const KEEP = new Set(["README.md"]);
  for (const f of fs.readdirSync(OUT)) {
    if (KEEP.has(f)) continue;
    fs.unlinkSync(path.join(OUT, f));
  }

  console.log("Processing real Revive photos...");
  await landscape(SRC.ballroomWide, "ballroom-wide.jpg", 2400);
  await landscape(SRC.ballroomAngle, "ballroom-angle.jpg", 2400);
  await portrait(SRC.exterior, "exterior.jpg", 2000);
  await landscape(SRC.catering, "catering.jpg", 2400);
  console.log("Slicing 6-up setup collage...");
  await sliceCollage();
  console.log("Done.");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
