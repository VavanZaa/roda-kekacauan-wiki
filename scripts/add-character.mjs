import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import model from '../web/model.js';
const root = fileURLToPath(new URL('../',import.meta.url));
const args = process.argv.slice(2);
function option(key) { const i = args.indexOf(key); return i < 0 ? null : args[i+1]; }
const file = option('--file');
if (!file) throw new Error('Usage: node scripts/add-character.mjs --file path/to/character.json [--image portrait.webp] [--replace]');
const character = JSON.parse(await readFile(path.resolve(file),'utf8'));
const image = option('--image');
if (image) {
  const ext = path.extname(image).toLowerCase();
  if (!['.webp','.png','.jpg','.jpeg'].includes(ext)) throw new Error('Portrait harus WebP, PNG atau JPEG.');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(character.id ?? '')) throw new Error('ID invalid.');
  character.image = { src: `assets/${character.id}${ext}`, alt: character.image?.alt || `Potret ${character.name}` };
}
model.validateCharacter(character);
const archiveFile = path.join(root,'data/characters.json');
const original = await readFile(archiveFile,'utf8');
const archive = model.validateArchive(JSON.parse(original));
const index = archive.characters.findIndex(c => c.id === character.id);
if (index >= 0 && !args.includes('--replace')) throw new Error('ID sudah ada. Pakai --replace untuk mengedit (backup tersimpan).');
if (index >= 0) archive.characters[index] = character; else archive.characters.push(character);
model.validateArchive(archive);
const backupDir = path.join(root,'data/backups'); await mkdir(backupDir,{recursive:true});
const stamp = new Date().toISOString().replace(/[:.]/g,'-');
await writeFile(path.join(backupDir,`characters-${stamp}.json`),original);
if (image) {
  const target = path.join(root,'web',character.image.src);
  try { await cp(target, path.join(backupDir,`${stamp}-${path.basename(target)}`)); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  await cp(path.resolve(image),target);
}
const temp = archiveFile+'.tmp'; await writeFile(temp,JSON.stringify(archive,null,2)+'\n');
const { rename } = await import('node:fs/promises'); await rename(temp,archiveFile);
console.log(`${character.id} saved (${character.status}). Run npm run build to update the public archive.`);
