import test from 'node:test';
import assert from 'node:assert/strict';
import model from '../web/model.js';
import { blankCharacter, demos } from '../scripts/examples.mjs';
import { publicRecord } from '../scripts/public-record.mjs';

test('final scores preserve negatives and values above nine', () => {
  assert.equal(model.validateCharacter(structuredClone(demos[1]),{demo:true}).stats.strength.final,-1);
  assert.equal(model.validateCharacter(structuredClone(demos[2]),{demo:true}).stats.strength.final,12);
});
test('inconsistent arithmetic and repeated modifier sources are rejected', () => {
  const c=structuredClone(demos[0]);c.stats.speed.final=9;
  assert.throws(()=>model.validateCharacter(c,{demo:true}),/final tidak sama/);
  const d=structuredClone(demos[0]);d.stats.speed.modifiers.push({...d.stats.speed.modifiers[0]});d.stats.speed.final=12;
  assert.throws(()=>model.validateCharacter(d,{demo:true}),/terduplikasi/);
});
test('raw scores remain bounded while explicit power-specific bases support Authority', () => {
  const s={raw:3,base:9,modifiers:[{sourceId:'apostle',label:'Contoh bonus',value:1}],final:10};
  assert.equal(model.score(s,'Authority').final,10);
  assert.throws(()=>model.score({...s,raw:10},'Authority'),/raw harus/);
});
test('drafts cannot appear in published archive; published records require portrait and video', () => {
  const c=blankCharacter();model.validateCharacter(c);
  assert.deepEqual(model.published({characters:[c]}),[]);
  c.status='published';assert.throws(()=>model.validateCharacter(c),/gambar/);
  c.image={src:'assets/portrait.webp',alt:'Potret'};
  assert.throws(()=>model.validateCharacter(c),/URL video/);
  c.publication={tiktokUrl:'https://www.tiktok.com/@roda_kekacauan/video/123456789',publishedAt:'2026-10-10'};
  assert.equal(model.validateCharacter(c).status,'published');
});
test('demo records cannot enter real character archive', () => {
  assert.throws(()=>model.validateArchive({schemaVersion:1,characters:demos}),/demo/);
  assert.equal(model.validateArchive({schemaVersion:1,characters:demos},{demo:true}).characters.length,3);
});
test('hostile links, image paths and impossible dates are rejected', () => {
  for (const url of ['javascript:alert(1)','https://www.tiktok.com.evil.example/@a/video/1','https://www.tiktok.com@evil.example/a','https://www.tiktok.com/@roda_kekacauan','http://www.tiktok.com/@a/video/1']) assert.equal(model.tiktokUrl(url),'');
  assert.ok(model.tiktokUrl('https://www.tiktok.com/@a/video/123?lang=id'));
  assert.ok(model.tiktokUrl('https://vt.tiktok.com/Z123/'));
  for (const src of ['assets/../secret.png','https://evil.example/a.png','assets/file.svg?x=y']) assert.equal(model.safeImage(src),'');
  const c=blankCharacter();c.status='published';c.image={src:'assets/a.png',alt:'a'};c.publication={tiktokUrl:'https://www.tiktok.com/@a/video/1',publishedAt:'2026-02-30'};
  assert.throws(()=>model.validateCharacter(c),/tanggal ISO/);
});
test('hybrid race filters match any retained identity and sort final scores exactly', () => {
  const c=structuredClone(demos[0]);c.races=['Siluman','Elf'];
  const rows=model.filterCharacters([c,demos[1]],{race:'Elf',archetype:'Assassin',search:'keris'});
  assert.equal(rows.length,1);assert.equal(rows[0].id,c.id);
  const sorted=model.filterCharacters(demos,{sort:'stat:strength'});
  assert.deepEqual(sorted.map(c=>c.stats.strength.final),[12,5,-1]);
});
test('duplicate IDs, episodes and duplicate powers cannot distort the archive', () => {
  const c=structuredClone(demos[0]);c.id='another';
  assert.throws(()=>model.validateArchive({schemaVersion:1,characters:[demos[0],c]},{demo:true}),/Episode/);
  const d=structuredClone(demos[0]);d.powers.push({...d.powers[0],id:'another-instance'});
  assert.throws(()=>model.validateCharacter(d,{demo:true}),/digabung/);
});
test('unknown internal fields are excluded at every public-record level', () => {
  const c=structuredClone(demos[0]);
  c.privateNotes='secret';c.stats.speed.privateNotes='secret';c.stats.speed.modifiers[0].token='secret';
  c.powers[0].generatorPrompt='secret';c.provenance.privatePath='secret';c.publication.token='secret';
  const projected=publicRecord(c);
  assert.ok(!JSON.stringify(projected).includes('secret'));
  assert.equal(model.validateCharacter(projected,{demo:true}).stats.speed.final,10);
});
