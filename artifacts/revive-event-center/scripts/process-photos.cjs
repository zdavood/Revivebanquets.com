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
  // Wide blue-uplit setup shots showing the venue's true scale
  scaleFront: path.join(ATTACHED, "IMG_0097_1777920239081.jpeg"),
  scaleSide: path.join(ATTACHED, "IMG_0095_1777920239081.jpeg"),
  scaleAngle: path.join(ATTACHED, "IMG_0096_1777920239082.jpeg"),
  scaleRear: path.join(ATTACHED, "IMG_0098_1777920239082.jpeg"),
  // Comedy night — proves performance / concert use case
  comedyWide: path.join(ATTACHED, "IMG_5997_1777920270356.jpeg"),
  comedySide: path.join(ATTACHED, "IMG_5998_1777920270357.jpeg"),
  comedyPerformer: path.join(ATTACHED, "FullSizeRender_1777920270357.jpeg"),
  // Cultural / South Asian celebrations, real bar, and candlelit evening ambiance
  culturalDance: path.join(ATTACHED, "IMG_0120_1782944710378.jpeg"),
  culturalCeremony: path.join(ATTACHED, "IMG_0011_1782944710379.png"),
  bar: path.join(ATTACHED, "IMG_5884_1782944710378.jpeg"),
  ambiance: path.join(ATTACHED, "IMG_5993_1782944710378.jpeg"),
  comedyRed: path.join(ATTACHED, "FullSizeRender_1782944710377.jpeg"),
  weddingRedSetup: path.join(ATTACHED, "revive-wedding-red-setup.jpg"),
  colorfulReceptionSetup: path.join(ATTACHED, "revive-colorful-reception-setup.jpg"),
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

async function fit(srcPath, outName, max = 2000) {
  const out = path.join(OUT, outName);
  await sharp(srcPath)
    .rotate()
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
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
  console.log("Processing scale + performance shots...");
  await landscape(SRC.scaleFront, "scale-front.jpg", 2400);
  await landscape(SRC.scaleSide, "scale-side.jpg", 2400);
  await landscape(SRC.scaleAngle, "scale-angle.jpg", 2400);
  await landscape(SRC.scaleRear, "scale-rear.jpg", 2400);
  await landscape(SRC.comedyWide, "comedy-wide.jpg", 2400);
  await landscape(SRC.comedySide, "comedy-side.jpg", 2400);
  await landscape(SRC.comedyPerformer, "comedy-performer.jpg", 2000);
  console.log("Processing cultural, bar, and ambiance shots...");
  await fit(SRC.culturalDance, "cultural-dance.jpg", 2000);
  await fit(SRC.culturalCeremony, "cultural-ceremony.jpg", 2000);
  await fit(SRC.bar, "bar.jpg", 2000);
  await fit(SRC.ambiance, "ambiance.jpg", 2400);
  await fit(SRC.comedyRed, "comedy-red.jpg", 2000);
  console.log("Processing newly shared event photos...");
  await fit(SRC.weddingRedSetup, "event-wedding-red-setup.jpg", 2200);
  await fit(SRC.colorfulReceptionSetup, "event-colorful-reception-setup.jpg", 2200);
  console.log("Done.");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
