import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import * as C from './wiki-curation.mjs';
import * as T from './wiki-system-terms.mjs';
import { enrichLore } from './wiki-lore.mjs';
import glossary from '../web/wiki-model.js';
const root=fileURLToPath(new URL('../',import.meta.url));
const supplied=process.argv.indexOf('--source');
const source=supplied<0?path.resolve(root,'../Roda Kekacauan'):path.resolve(process.argv[supplied+1]);
const cache=new Map(), fingerprints={};
async function load(file){if(!cache.has(file)){const raw=await readFile(path.join(source,file),'utf8');fingerprints[file]=createHash('sha256').update(raw).digest('hex');cache.set(file,JSON.parse(raw));}return cache.get(file);}
const race=await load('content/race-wheel-design.json');
const role=await load('content/archetype-wheel-design.json');
const spirits=await load('content/lelembut-events-design.json');
const media=await load('content/video2-race-imports-design.json');
const machine=await load('content/machine-events-design.json');
const registry=await load('content/power-tier-design.json');
const entries=[];
function curated(rows,category,file,sourceRows,prefix=''){
 for(const [id,label,summary,aliases=[]]of rows){
  if(sourceRows&&!sourceRows.some(r=>r.id===id||r.familyId===id))throw new Error(`Curated ${label} no longer exists in ${file}; review before publication.`);
  entries.push({id:prefix+id,label,category,summary,aliases,related:[],sources:[],provenance:{file,definitionId:id,origin:'editorial-summary-of-design'}});
 }
}
curated(C.races,'race','content/race-wheel-design.json',race.families);
curated(C.roles,'archetype','content/archetype-wheel-design.json',role.wheel.outcomes||role.wheel.options,'archetype-');
curated(C.spirits,'folklore','content/lelembut-events-design.json',spirits.eventProfiles);
curated(C.elfTypes,'race','content/race-wheel-design.json',null);
curated(C.machines,'race','content/machine-events-design.json',machine.wheels.find(w=>w.id==='machine-type').outcomes);
curated(C.cosmic,'reference','content/video2-race-imports-design.json',null);
curated(C.mechanics,'mechanic','framework/spec.json',null);
for(const [id,label,parent,sourceId,summary] of T.familyTypes){
 const outcome=race.families.find(f=>f.id===parent)?.branch.outcomes.find(o=>o.id===sourceId);
 if(!outcome||outcome.label!==label||outcome.inclusionStatus!=='user-confirmed')throw new Error('Review canonical subtype before publication: '+label);
 entries.push({id,label,category:'race',summary,aliases:[],related:[parent],sources:[],provenance:{file:'content/race-wheel-design.json',definitionId:sourceId,origin:'editorial-summary-of-canonical-subtype'}});
}
for(const [id,label,parent,file,wheelId,sourceId,summary] of T.wheelTypes){
 const d=await load(file), outcome=(d.wheels||d.extraWheels)?.find(w=>w.id===wheelId)?.outcomes.find(o=>o.id===sourceId);
 if(!outcome||outcome.label!==label)throw new Error('Review canonical type wheel before publication: '+label);
 entries.push({id,label,category:'race',summary,aliases:[],related:[parent],sources:[],provenance:{file,definitionId:sourceId,origin:'editorial-summary-of-canonical-subtype'}});
}
for(const [id,label,summary,file,aliases] of T.extraMechanics){
 await load(file);
 entries.push({id,label,category:'mechanic',summary,aliases,related:[],sources:[],provenance:{file,definitionId:id,origin:'editorial-summary-of-design'}});
}
const findDefinition=(data,id)=>{let result;function walk(x){if(!x||typeof x!=='object'||result)return;if(x.id===id&&x.label&&(x.scope||x.scopeModes||typeof x.description==='string')){result=x;return;}for(const v of Object.values(x))walk(v);}walk(data);return result;};
const refs=new Map();
for(const rating of registry.ratings){
 const d=await load(rating.definitionFile), p=findDefinition(d,rating.definitionId);
 if(!p)throw new Error(`No reader-facing power scope: ${rating.definitionId}`);
 const scope=p.scope||p.scopeModes?.power||p.description;
 const modeNote=p.scopeModes?` Mode Authority: ${p.scopeModes.authority}`:'';
 const id='power-'+rating.definitionId;
 const label=rating.label;
 const aliases=[label.replace(/\s*\([^)]*\)/g,'').trim(),...([...label.matchAll(/\(([^)]+)\)/g)].map(m=>m[1]))].filter(s=>s&&s!==label);
 const entry={id,label,category:'power',summary:C.powerSummaries[rating.definitionId]||scope,aliases,related:['power-tier','power-mastery'],sources:[],powerTier:rating.powerTier,definitionId:rating.definitionId,definitionFile:rating.definitionFile,provenance:{file:rating.definitionFile,definitionId:rating.definitionId,origin:C.powerSummaries[rating.definitionId]?'editorial-translation-of-canonical-scope':'canonical-power-scope'}};
 if(p.scopeModes)entry.modeNote=modeNote.trim();
 if(rating.grantModeTiers)entry.tierByMode=rating.grantModeTiers;
 entries.push(entry);refs.set(rating.definitionId,id);
}
const byId=new Map(entries.map(e=>[e.id,e]));
const relate=(id,ids)=>{const e=byId.get(id);e.related=[...new Set([...e.related,...ids])].filter(x=>byId.has(x)&&x!==id);};
const pools=await load('content/universal-power-wheels-design.json');
for(const w of pools.wheels){
 const id='pool-'+w.id;
 const related=w.outcomes.flatMap(o=>(o.effects||[]).filter(e=>e.type==='grant-power').map(e=>refs.get(e.definitionId))).filter(Boolean);
 const entry={id,label:w.label,category:'mechanic',summary:`Kumpulan universal ${w.label} dengan ${w.outcomes.length} pilihan kemampuan. Pemanggil memakai kumpulan yang sama; hanya kemampuan dari hasil terpilih yang diberikan.`,aliases:[],related:[...new Set(related)],sources:[],provenance:{file:'content/universal-power-wheels-design.json',definitionId:w.id,origin:'canonical-power-pool-summary'}};
 entries.push(entry);byId.set(id,entry);
}
for(const e of entries.filter(e=>T.familyTypes.some(t=>t[0]===e.id)||T.wheelTypes.some(t=>t[0]===e.id)))for(const parent of e.related)relate(parent,[e.id]);
relate('anime-lineage',['anime-mc','anime-npc']);relate('anime-npc',['archetype-npc']);
relate('archetype-goliath',['berserker','uncontrollable-rage']);relate('archetype-paladin',['ascension']);relate('archetype-vessel',['compatibility']);
for(const id of ['strength','speed','durability','intelligence','fight'])relate(id,['stat']);
for(const [id] of C.roles)relate('archetype-'+id,['archetype','backstory']);
for(const [id]of C.races)relate(id,['archetype','size']);
relate('elf',C.elfTypes.map(e=>e[0]));relate('machine',C.machines.map(e=>e[0]));relate('cosmic-warrior',C.cosmic.map(e=>e[0]));relate('lelembut',C.spirits.map(e=>e[0]));
for(const [id]of C.elfTypes)relate(id,['elf','power-mastery']);for(const[id]of C.machines)relate(id,['machine','power-mastery']);
for(const p of spirits.eventProfiles){relate(p.id,['lelembut',...p.effects.filter(e=>e.type==='grant-power').map(e=>refs.get(e.definitionId))]);}
for(const [id]of C.cosmic)relate(id,['cosmic-warrior']);
relate('tuyul',['power-nyolong']);relate('ultraman',['power-ultraman-power','stat']);
relate('archetype-gambler',['all-in','double-or-nothing','high-roller','lucky-number']);relate('archetype-hybrid',['hybrid']);
relate('power-mastery',['weapon-mastery','power-tier','none']);relate('weapon-mastery',['enchant','stat']);relate('enchant',['weapon-mastery']);relate('none',['weakness','power-mastery']);relate('roda-kekacauan',['title','stat']);
for(const id of ['pocong','tuyul','kuntilanak','wewe-gombel','sundel-bolong','suster-ngesot'])byId.get(id).sources.push({label:'UNESA · Penjelasan nama hantu Indonesia',url:'https://mandarin.fbs.unesa.ac.id/post/terjemahan-nama-nama-hantu-indonesia-ke-dalam-bahasa-mandarin',kind:'lore'});
byId.get('ultraman').sources.push({label:'Tsuburaya Productions · Profil resmi Ultraman',url:'https://tsuburaya-prod.com/heroes/ultraman',kind:'lore'});
byId.get('ultraman').gameNote='Warna Merah memberi Strength +2; Biru memberi Speed +2; Mixed memberi Strength +1 dan Speed +1. Warna tidak memberi power kedua atau ukuran tubuh otomatis.';
byId.get('tuyul').gameNote='Nyolong dicatat sebagai power milik karakter dan memakai Power Mastery bersama pada tahapnya; hasil Power utama None tidak menghapusnya.';
// Narrative and inspiration are editorial fields; they never alter canonical rules.
enrichLore(entries,{isekai:await load('content/isekai-cheat-wheel-design.json'),raceResearch:await load('reference/race-content-research.json'),cosmicResearch:await load('reference/cosmic-warrior-media-research.json')});
// Index all meaningful mentions, including notes, using the same resolver as the UI.
const lookup=glossary.create({schemaVersion:1,entries});
for(const e of entries){
 const mentioned=lookup.mentions([e.summary,e.gameNote,e.modeNote,e.lore].filter(Boolean).join(' '),{currentId:e.id,preferredIds:e.related}).filter(s=>s.id).map(s=>s.id);
 relate(e.id,mentioned);
 if(['folklore','reference','race'].includes(e.category))for(const id of e.related.filter(id=>byId.get(id).category==='power'))relate(id,[e.id]);
}
for(const e of entries) e.related=e.related.filter(Boolean);
const result={schemaVersion:1,updatedDate:'2026-10-11',entries,editorialPolicy:C.editorialPolicy};
glossary.validate(result);
await writeFile(path.join(root,'data/wiki.json'),JSON.stringify(result,null,2)+'\n');
await writeFile(path.join(root,'data/wiki-source-snapshot.json'),JSON.stringify({capturedAt:new Date().toISOString(),registryVersion:registry.version,definitionCount:registry.ratings.length,files:fingerprints},null,2)+'\n');
console.log(`Saved ${entries.length} wiki entries, including ${registry.ratings.length} canonical power definitions. Source project unchanged.`);
