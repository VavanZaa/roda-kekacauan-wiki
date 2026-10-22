import {readFile,writeFile} from 'node:fs/promises';
let file=new URL('../web/app.js',import.meta.url),text=await readFile(file,'utf8');
text=text.replace('<a class="nav-about"', '<a class="atlas-nav" href="${escape(new URL(\'atlas/\',ROOT).href)}">Atlas visual</a><a class="nav-about"');
text=text.replace('<div class="index-note"><span class="ornament">✦</span><p>Setiap lembar', '<a class="index-link" href="${escape(new URL(\'atlas/\',ROOT).href)}"><span>IV</span> Atlas visual</a><div class="index-note"><span class="ornament">✦</span><p>Setiap lembar');
await writeFile(file,text);
file=new URL('../web/wiki-pages.js',import.meta.url);text=await readFile(file,'utf8');
text=text.replace('<div class="index-note"><span class="ornament">✦</span><p>Istilah', '<a class="index-link" href="${E(new URL(\'atlas/\',home()).href)}">Atlas visual →</a><div class="index-note"><span class="ornament">✦</span><p>Istilah');
text=text.replace('<section class="wiki-inspiration"><h2>', '${[\'race\',\'subtype\',\'folklore\',\'media\'].includes(e.category)?`<a class="button ghost atlas-entry-link" href="${E(new URL(\'atlas/?cari=\'+encodeURIComponent(e.label),home()).href)}">Lihat referensi visual →</a>`:\'\'}<section class="wiki-inspiration"><h2>');
await writeFile(file,text);
