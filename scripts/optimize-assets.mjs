import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceImage =
  process.env.SOURCE_IMAGE || "/Users/saurabhtiwari/Desktop/SAU.IMAGE.PNG";
const sourceResume =
  process.env.SOURCE_RESUME ||
  "/Users/saurabhtiwari/Desktop/SAURABH_RESUME_LATEST.PDF";

const assetsDir = path.resolve("public/assets");
await fs.mkdir(assetsDir, { recursive: true });

await Promise.all([
  sharp(sourceImage)
    .rotate()
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 84, effort: 6 })
    .toFile(path.join(assetsDir, "saurabh-profile-960.webp")),
  sharp(sourceImage)
    .rotate()
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(path.join(assetsDir, "saurabh-profile-640.webp")),
  sharp(sourceImage)
    .rotate()
    .resize({ width: 420, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(assetsDir, "saurabh-profile-420.webp")),
  sharp(sourceImage)
    .rotate()
    .resize({ width: 48, height: 64, fit: "cover", position: "north" })
    .blur(4)
    .webp({ quality: 34, effort: 5 })
    .toFile(path.join(assetsDir, "saurabh-profile-blur.webp")),
  fs.copyFile(sourceResume, path.join(assetsDir, "saurabh-tiwari-resume.pdf")),
]);

console.log("Optimized portfolio assets written to public/assets");
