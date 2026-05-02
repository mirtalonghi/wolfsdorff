import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleriesPath = path.join(__dirname, '../src/data/galleries.json');
const outputDir = path.join(__dirname, '../public/galleries');

const galleries = JSON.parse(fs.readFileSync(galleriesPath, 'utf8'));

async function downloadImage(url, dest) {
  if (fs.existsSync(dest)) return true;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buf));
  return false; // not skipped
}

async function processGallery(gallery, concurrency = 4) {
  const dir = path.join(outputDir, gallery.id);
  fs.mkdirSync(dir, { recursive: true });

  const results = new Array(gallery.images.length);
  let cursor = 0;
  let done = 0;
  let failed = 0;

  async function worker() {
    while (cursor < gallery.images.length) {
      const i = cursor++;
      const url = gallery.images[i];
      const filename = path.basename(new URL(url).pathname);
      const dest = path.join(dir, filename);
      try {
        const skipped = await downloadImage(url, dest);
        results[i] = `/galleries/${gallery.id}/${filename}`;
        process.stdout.write(skipped ? '·' : '✓');
      } catch (e) {
        results[i] = url;
        failed++;
        process.stdout.write('✗');
      }
      done++;
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));
  return { images: results, failed };
}

console.log(`Descargando imágenes a public/galleries/\n`);

const updated = [];
let totalFailed = 0;

for (const gallery of galleries) {
  process.stdout.write(`\n[${gallery.id}] ${gallery.name} (${gallery.images.length}) `);
  const { images, failed } = await processGallery(gallery);
  totalFailed += failed;
  updated.push({ ...gallery, images });
  if (failed > 0) process.stdout.write(` (${failed} fallidos)`);
}

fs.writeFileSync(galleriesPath, JSON.stringify(updated, null, 2));

console.log(`\n\nListo. galleries.json actualizado con rutas locales.`);
if (totalFailed > 0) console.log(`⚠ ${totalFailed} imágenes fallaron — se mantiene la URL original en esos casos.`);