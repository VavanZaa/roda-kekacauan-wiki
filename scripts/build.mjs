import { readFile, writeFile, mkdir, cp, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';
import model from '../web/model.js';
import glossary from '../web/wiki-model.js';
import { demos, blankCharacter } from './examples.mjs';
import { publicRecord } from './public-record.mjs';
import { buildAtlas } from './build-atlas.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const web = path.join(root, 'web'), out = path.join(root, 'dist');
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const archive = model.validateArchive(JSON.parse(await readFile(path.join(root,'data/characters.json'), 'utf8')));
const wiki = glossary.validate(JSON.parse(await readFile(path.join(root,'data/wiki.json'),'utf8')));
// Explicit public fields only: editor notes, local source paths and audit hashes remain local.
const wikiEntries = wiki.entries.map(e => ({...Object.fromEntries(['id','label','category','summary','aliases','related','powerTier','definitionId','definitionFile','gameNote','modeNote','tierByMode','lore','loreKind','inspiration','inspirationKind'].filter(k=>e[k]!==undefined).map(k=>[k,e[k]])),sources:e.sources.map(s=>Object.fromEntries(['label','url','kind'].filter(k=>s[k]!==undefined).map(k=>[k,s[k]])))}));
const wikiLookup=glossary.create({schemaVersion:1,entries:wikiEntries});
const explain=(text,e)=>wikiLookup.mentions(text,{currentId:e.id,preferredIds:e.related}).map(s=>s.id?`<a class="wiki-link" href="wiki/${s.id}/">${escape(s.text)}</a>`:escape(s.text)).join('');
model.validateArchive({ schemaVersion: 1, characters: demos }, { demo: true });
// Only documented public fields are copied: unknown/internal generator fields stay local.
const characters = model.published(archive).map(publicRecord);
for (const c of [...characters, ...demos]) {
  if (!c.image) continue;
  const asset = path.join(web, c.image.src);
  const info = await stat(asset).catch(() => null);
  if (!info?.isFile()) throw new Error(`Gambar ${c.id} tidak ditemukan: ${c.image.src}`);
  if (info.size > 25 * 1024 * 1024) throw new Error(`Gambar ${c.id} melewati batas 25 MiB.`);
}
await mkdir(out, { recursive: true });
await buildAtlas(root,out);
// Remove only generated character pages in this verified build directory, so unpublishing is effective.
const generated = path.join(out, 'karakter');
const { rm } = await import('node:fs/promises');
if (path.dirname(generated) !== out || !out.startsWith(root)) throw new Error('Unsafe build target.');
await rm(generated, { recursive: true, force: true });
for (const file of ['model.js','wiki-model.js','wiki-pages.js','app.js','style.css']) await cp(path.join(web,file),path.join(out,file));
await mkdir(path.join(out,'assets'), { recursive: true });
const usedAssets = new Set(['assets/mark.svg', 'assets/logo-roda-kekacauan.jpg', 'assets/cinzel.ttf', 'assets/cinzel-OFL.txt', ...[...characters,...demos].map(c => c.image?.src).filter(Boolean)]);
// Build output never includes draft-only portraits or local editor files.
const assetOut = path.join(out,'assets');
if (path.dirname(assetOut) !== out) throw new Error('Unsafe assets target.');
await rm(assetOut, { recursive:true, force:true });
await mkdir(assetOut, { recursive:true });
for (const asset of usedAssets) { await mkdir(path.dirname(path.join(out,asset)), { recursive:true }); await cp(path.join(web,asset), path.join(out,asset)); }
const catalog = { schemaVersion: 1, characters, demos, wiki:wikiEntries, wikiMeta:{updatedDate:wiki.updatedDate,editorialPolicy:wiki.editorialPolicy} };
const serialized = JSON.stringify(catalog).replace(/</g,'\\u003c').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');
await writeFile(path.join(out,'catalog.js'), `window.WIKI_CATALOG = ${serialized};\n`);
// Returning visitors load the assets belonging to this build instead of stale script URLs.
const releaseHash=createHash('sha256').update(serialized);
for(const file of ['model.js','wiki-model.js','wiki-pages.js','app.js','style.css'])releaseHash.update(await readFile(path.join(web,file)));
const release=releaseHash.digest('hex').slice(0,12);
const template = (await readFile(path.join(web,'index.html'),'utf8')).replace(/(src|href)="(model\.js|wiki-model\.js|catalog\.js|wiki-pages\.js|app\.js|style\.css)"/g,(_,attr,file)=>`${attr}="${file}?v=${release}"`);
await writeFile(path.join(out,'index.html'), template.replace('<!-- PAGE_META -->','').replace('<!-- FALLBACK -->',()=>characters.map(c => `<p><a href="karakter/${c.id}/index.html">${escape(c.name)}</a></p>`).join('')));
for (const c of characters) {
  const dir = path.join(out,'karakter',c.id); await mkdir(dir,{ recursive:true });
  const description = `${c.name} — ${c.races.join(' / ')}${c.archetypes.length ? `, ${c.archetypes.join(' / ')}` : ''}. ${c.title}`;
  const meta = `<meta property="og:type" content="article"><meta property="og:title" content="${escape(c.name)} — Roda Kekacauan"><meta property="og:description" content="${escape(description)}">`;
  const fallback = `<article><h1>${escape(c.name)}</h1><p>${escape(c.backstory)}</p>${model.STAT_IDS.map(id => `<p>${model.LABELS[id]}: ${escape(c.stats[id].final)}</p>`).join('')}</article>`;
  const page = template.replace('<title>Roda Kekacauan — Arsip Karakter</title>',()=>`<title>${escape(c.name)} — Roda Kekacauan</title>`).replace('<head>', '<head>\n  <base href="../../">').replace(/<meta name="description"[^>]+>/,()=>`<meta name="description" content="${escape(description)}">`).replace('<!-- PAGE_META -->',()=>meta).replace('<!-- FALLBACK -->',()=>fallback);
  await writeFile(path.join(dir,'index.html'),page);
}
// Regenerate wiki routes from the reviewed snapshot, removing pages no longer in the catalog.
const wikiOut=path.resolve(out,'wiki');
if(path.dirname(wikiOut)!==path.resolve(out)||!wikiOut.startsWith(path.resolve(root)+path.sep))throw new Error('Unsafe wiki build target.');
await rm(wikiOut,{recursive:true,force:true});
await mkdir(wikiOut,{recursive:true});
const wikiPage=(title,description,fallback,base)=>template.replace('<title>Roda Kekacauan — Arsip Karakter</title>',()=>`<title>${escape(title)} — Wiki Roda Kekacauan</title>`).replace('<head>',`<head>\n  <base href="${base}">`).replace(/<meta name="description"[^>]+>/,()=>`<meta name="description" content="${escape(description)}">`).replace('<!-- PAGE_META -->',()=>`<meta property="og:type" content="article"><meta property="og:title" content="${escape(title)} — Wiki Roda Kekacauan"><meta property="og:description" content="${escape(description)}">`).replace('<!-- FALLBACK -->',()=>fallback);
await writeFile(path.join(wikiOut,'index.html'),wikiPage('Ensiklopedia','Penjelasan singkat ras, Archetype, power, dan mekanik Roda Kekacauan.',`<h1>Ensiklopedia Roda Kekacauan</h1>${wikiEntries.map(e=>`<p><a href="wiki/${e.id}/">${escape(e.label)}</a> — ${explain(e.summary,e)}</p>`).join('')}`,'../'));
for(const e of wikiEntries){
 const dir=path.join(wikiOut,e.id);await mkdir(dir,{recursive:true});
 const fallback=`<article><h1>${escape(e.label)}</h1><p>${explain(e.summary,e)}</p>${e.lore?`<section><h2>Lore singkat</h2><p>Adaptasi dunia Roda Kekacauan</p><p>${explain(e.lore,e)}</p></section>`:''}${e.inspiration?`<section><h2>Inspirasi &amp; rujukan</h2><p>${escape(e.inspiration)}</p></section>`:''}${e.gameNote?`<p>${explain(e.gameNote,e)}</p>`:''}${e.modeNote?`<p>${explain(e.modeNote,e)}</p>`:''}<p>${e.related.map(id=>`<a href="wiki/${id}/">${escape(wikiEntries.find(t=>t.id===id).label)}</a>`).join(' · ')}</p>${e.sources.map(s=>`<p><a href="${escape(s.url)}" rel="noopener noreferrer">${escape(s.label)}</a></p>`).join('')}</article>`;
 await writeFile(path.join(dir,'index.html'),wikiPage(e.label,e.summary,fallback,'../../'));
}
await writeFile(path.join(out,'404.html'),template.replace('<!-- PAGE_META -->','<meta name="robots" content="noindex">').replace('<head>','<head>\n  <base href="/">').replace('<!-- FALLBACK -->','Halaman tidak ditemukan.'));
await writeFile(path.join(out,'_headers'), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Content-Security-Policy: default-src \'self\'; script-src \'self\'; style-src \'self\' \'unsafe-inline\'; img-src \'self\'; font-src \'self\'; connect-src \'self\'; object-src \'none\'; frame-src \'none\'; base-uri \'self\'; frame-ancestors \'none\'\n');
await writeFile(path.join(root,'data/character-template.json'),JSON.stringify(blankCharacter(),null,2)+'\n');
console.log(`Built dist/: ${characters.length} published character(s), ${demos.length} separately labelled demos, ${wikiEntries.length} wiki pages. Draft records and private source snapshots excluded.`);
