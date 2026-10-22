import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import glossary from '../web/wiki-model.js';
import {demos} from '../scripts/examples.mjs';

const data=JSON.parse(await readFile(new URL('../data/wiki.json',import.meta.url),'utf8'));
const G=glossary.create(data);

test('wiki validates safe routes, source links and complete cross-references',()=>{
  for(const mutate of [
    d=>d.entries[0].id='../private',
    d=>d.entries[1].id=d.entries[0].id,
    d=>d.entries[0].related.push('missing-entry'),
    d=>d.entries[0].sources.push({label:'Unsafe',url:'javascript:alert(1)'}),
    d=>d.entries[0].sources.push({label:'Credentials',url:'https://name:secret@example.com/'})
  ]){const broken=structuredClone(data);mutate(broken);assert.throws(()=>glossary.validate(broken));}
});

test('links distinguish identities, archetypes, exact powers and ambiguous names',()=>{
  assert.equal(G.resolve('  TUYUL  ').id,'tuyul');
  assert.equal(G.resolve('Ultraman').id,'ultraman');
  assert.equal(G.resolve('Hybrid').id,'hybrid');
  assert.equal(G.resolve('Hybrid',{category:'archetype'}).id,'archetype-hybrid');
  assert.equal(G.resolve('Equaliser',{category:'archetype'}).id,'archetype-equaliser');
  assert.equal(G.resolve('Energy Constructs',{category:'power'}),null);
  const power=data.entries.find(e=>e.id==='power-nyolong');
  assert.equal(G.resolve('A changed display name',{definitionId:power.definitionId,definitionFile:power.definitionFile}).id,power.id);
  assert.equal(G.resolve('Nyolong',{definitionId:'unapproved-demo-power'}),null);
  assert.equal(G.resolve('Nyolong',{definitionId:power.definitionId,definitionFile:'wrong-file.json'}),null);
  assert.equal(G.resolve('EP. 001'),null);
  assert.equal(G.resolve('120 cm'),null);
});

test('search combines aliases and categories without dropping the current filter',()=>{
  assert.ok(G.filter({search:'tuyul'}).some(e=>e.id==='tuyul'));
  assert.deepEqual(G.filter({search:'manusia biasa',category:'race',letter:'M'}).map(e=>e.id),['human']);
  assert.ok(G.filter({category:'power'}).every(e=>e.category==='power'));
  assert.equal(G.filter({search:'an-unlisted-term'}).length,0);
});

test('inline explanations link whole terms and preserve untrusted text for escaping',()=>{
  const text='<script>Ultramanic</script> Tuyul & Nyolong. Tuyulku.';
  const parts=G.segments(text,['tuyul','power-nyolong','ultraman']);
  assert.equal(parts.map(p=>p.text).join(''),text);
  assert.deepEqual(parts.filter(p=>p.id).map(p=>[p.text,p.id]),[['Tuyul','tuyul'],['Nyolong','power-nyolong']]);
  assert.ok(!G.segments('Tuyul',['tuyul'],'Tuyul').some(p=>p.id));
});

test('character references use canonical IDs and keep fictional demo powers unlinked',()=>{
  const c=structuredClone(demos[0]);
  const p=data.entries.find(e=>e.id==='power-nyolong');
  c.races=['Lelembut','Tuyul'];c.archetypes=['Hybrid'];
  c.powers=[{label:'Nyolong',definitionId:'unapproved-demo-power'},{label:'Changed label',definitionId:p.definitionId,definitionFile:p.definitionFile}];
  const ids=G.characterTerms(c).map(e=>e.id);
  assert.ok(ids.includes('lelembut')&&ids.includes('tuyul')&&ids.includes('archetype-hybrid'));
  assert.equal(ids.filter(id=>id==='power-nyolong').length,1);
});

test('every Abyssal Axiom type links to its own canonical page as one complete name',()=>{
  const e=G.byId.get('demon');
  const links=G.mentions(e.summary,{currentId:e.id}).filter(s=>s.id);
  assert.deepEqual(links.map(s=>[s.text,s.id]),[
    ['Raja Iblis Agung','demon-lord'],['Iblis','iblis'],['Fallen Angel','fallen-angel'],['Setan','setan'],['Pendosa','pendosa']
  ]);
  assert.equal(G.resolve('Iblis').id,'iblis');
  assert.ok(G.byId.get('iblis').related.includes('demon'));
});

test('prose links use the full system vocabulary and never link fragments or self references',()=>{
  const text='IBLIS, Iblisku; Raja Iblis Agung dan Strength. <script>Nyolong</script>';
  const parts=G.mentions(text,{currentId:'iblis'});
  assert.equal(parts.map(s=>s.text).join(''),text);
  assert.deepEqual(parts.filter(s=>s.id).map(s=>s.id),['demon-lord','strength','power-nyolong']);
  assert.deepEqual(G.mentions('pagi biasa'),[{text:'pagi biasa',id:null}]);
});

test('context distinguishes a power from a same-name identity or Authority mode',()=>{
  assert.deepEqual(G.mentions('Ultraman memiliki power Ultraman.',{currentId:'ultraman'}).filter(s=>s.id).map(s=>s.id),['power-stage','power-ultraman-power']);
  assert.deepEqual(G.mentions('Mode Authority berbeda dari power Authority.').filter(s=>s.id).map(s=>s.id),['authority-mode','power-stage','power-royal-authority']);
  assert.deepEqual(G.mentions('Hybrid dan Archetype Hybrid.').filter(s=>s.id).map(s=>s.id),['hybrid','archetype','archetype-hybrid']);
  assert.equal(G.mentions('Energy Constructs').some(s=>s.id),false);
});

test('Anime NPC and the project name retain their distinct meanings',()=>{
  const anime=G.mentions('MC atau NPC; berbeda dari Archetype NPC.',{currentId:'anime-lineage'});
  assert.deepEqual(anime.filter(s=>s.id).map(s=>s.id),['anime-mc','anime-npc','archetype','archetype-npc']);
  assert.equal(G.mentions('Dalam Roda Kekacauan').some(s=>s.id),false);
  assert.deepEqual(G.mentions('Tahap Roda Kekacauan').filter(s=>s.id).map(s=>s.id),['roda-kekacauan']);
});


test('every published entry has concise authored lore and an explicit origin category',()=>{
  assert.equal(data.entries.length,469);
  assert.equal(new Set(data.entries.map(e=>e.lore)).size,469);
  for(const e of data.entries){
    assert.equal(e.loreKind,'adaptation');
    assert.ok(e.lore.trim().length>20&&e.lore.length<=360,e.id);
    assert.ok(e.lore.split(/(?<=[.!?])\s+/).length<=2,e.id);
    assert.ok(e.inspiration.trim().length>10,e.id);
    assert.ok(['recorded','theme','original'].includes(e.inspirationKind),e.id);
  }
});

test('origin credits retain named works without inventing a franchise for general motifs',()=>{
  const isekai=data.entries.filter(e=>e.definitionFile==='content/isekai-cheat-wheel-design.json');
  assert.equal(isekai.length,64);
  assert.ok(isekai.every(e=>e.inspirationKind==='recorded'));
  assert.ok(G.byId.get('power-isekai-cheat-vending').inspiration.startsWith('Reborn as a Vending Machine, I Now Wander the Dungeon.'));
  assert.ok(G.byId.get('power-isekai-cheat-sword').inspiration.startsWith('Reincarnated as a Sword.'));
  assert.ok(G.byId.get('ultraman').inspiration.includes('Tsuburaya'));
  assert.ok(G.byId.get('tuyul').inspiration.includes('Cerita rakyat'));
  assert.equal(G.byId.get('symbiote').inspirationKind,'theme');
  assert.equal(G.byId.get('power-tier').inspirationKind,'original');
});

test('inspiration search preserves category filters and lore keeps system-term links',()=>{
  const result=G.filter({search:'dragon ball'});
  assert.ok(result.some(e=>e.id==='saiyan'));
  assert.ok(result.some(e=>e.id==='power-cosmic-ki-control'));
  const reference=G.filter({search:'dragon ball',category:'reference'});
  assert.deepEqual(reference.map(e=>e.id),['saiyan']);
  const lore=G.mentions(G.byId.get('tuyul').lore,{currentId:'tuyul'});
  assert.ok(lore.some(s=>s.id==='power-nyolong'));
  assert.ok(!lore.some(s=>s.id==='tuyul'));
});

test('invalid narrative metadata is rejected while older cached catalogs remain usable',()=>{
  for(const mutate of [
    e=>e.lore='',e=>e.lore='x'.repeat(361),e=>e.loreKind='official',
    e=>e.inspiration='',e=>e.inspirationKind='unknown'
  ]){const broken=structuredClone(data);mutate(broken.entries[0]);assert.throws(()=>glossary.validate(broken));}
  const older=structuredClone(data);older.entries.forEach(e=>{for(const key of ['lore','loreKind','inspiration','inspirationKind'])delete e[key];});
  assert.doesNotThrow(()=>glossary.create(older));
});
