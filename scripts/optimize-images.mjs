import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(projectRoot, 'assets');
const outputDir = path.join(sourceDir, 'optimized');

const jobs = [
  { file: 'feu.webp', widths: [640, 1024, 1600], quality: 74 },
  { file: 'pasteurs.webp', widths: [640, 1024, 1600], quality: 72 },
  { file: 'assemblee.webp', widths: [640, 1024, 1600], quality: 74 },
  { file: 'guitariste.webp', widths: [640, 1024, 1600], quality: 74 },
];

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const optimize = async () => {
  await fs.mkdir(outputDir, { recursive: true });

  for (const job of jobs) {
    const sourcePath = path.join(sourceDir, job.file);
    const inputStat = await fs.stat(sourcePath);
    const fileBase = path.parse(job.file).name;

    console.log(`\nOptimizing ${job.file} (${formatBytes(inputStat.size)})`);

    for (const width of job.widths) {
      const targetPath = path.join(outputDir, `${fileBase}-${width}.webp`);

      await sharp(sourcePath)
        .resize({
          width,
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: job.quality })
        .toFile(targetPath);

      const outputStat = await fs.stat(targetPath);
      console.log(`  - ${path.basename(targetPath)} -> ${formatBytes(outputStat.size)}`);
    }
  }

  console.log('\nImage optimization complete.');
};

optimize().catch((error) => {
  console.error('Image optimization failed:', error);
  process.exit(1);
});
