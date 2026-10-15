// Run after process-photos.cjs, which regenerates the original JPEG set.
const sharp = require("sharp");
const fs = require("node:fs/promises");
const path = require("node:path");

async function generateResponsivePhotos() {
  const directory = path.resolve(__dirname, "../public/revive-photos");
  const files = (await fs.readdir(directory)).filter((file) => file.endsWith(".jpg"));
  const manifest = {};
  for (const file of files) {
    const original = await sharp(path.join(directory, file)).metadata();
    const sources = [];
    const generatedWidths = new Set();
    for (const width of [640, 1280, 1920]) {
      const actualWidth = Math.min(width, original.width);
      if (generatedWidths.has(actualWidth)) continue;
      generatedWidths.add(actualWidth);
      const filename = file.replace(/\.jpg$/, `-${width}.webp`);
      const result = await sharp(path.join(directory, file))
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(path.join(directory, filename));
      sources.push({ file: filename, width: result.width });
    }
    manifest[file] = { width: original.width, height: original.height, sources };
  }
  await fs.writeFile(path.resolve(__dirname, "../src/content/photo-dimensions.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Generated responsive WebP variants for ${files.length} real venue photos.`);
}

module.exports = { generateResponsivePhotos };
if (require.main === module) {
  generateResponsivePhotos().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
