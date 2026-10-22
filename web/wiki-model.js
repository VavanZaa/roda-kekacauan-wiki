(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.GlossaryModel=api;})(typeof window==='undefined'?globalThis:window,function(){
 'use strict';
 const CATEGORIES={race:'Ras & jenis',folklore:'Lelembut',reference:'Rujukan karakter',archetype:'Archetype',power:'Power',mechanic:'Mekanik'};
 const normalize=s=>String(s||'').normalize('NFKC').trim().toLocaleLowerCase('id').replace(/\s+/g,' ');
 function safeSource(value){try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password?u.href:null;}catch{return null;}}
 function validate(data){
  if(data.schemaVersion!==1||!Array.isArray(data.entries))throw new Error('Invalid wiki catalog');
  const ids=new Set();
  for(const e of data.entries){
   if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.id)||ids.has(e.id))throw new Error('Duplicate or unsafe wiki ID: '+e.id);
   ids.add(e.id);
   if(!CATEGORIES[e.category]||typeof e.label!=='string'||!e.label.trim()||typeof e.summary!=='string'||!e.summary.trim()||e.summary.length>650)throw new Error('Invalid wiki entry: '+e.id);
   if(!Array.isArray(e.aliases)||!e.aliases.every(a=>typeof a==='string'&&a.trim())||!Array.isArray(e.related)||!Array.isArray(e.sources))throw new Error('Invalid wiki references: '+e.id);
   if(e.powerTier!==undefined&&(!Number.isInteger(e.powerTier)||e.powerTier<1||e.powerTier>5))throw new Error('Invalid power tier');
   if(e.lore!==undefined&&(typeof e.lore!=='string'||!e.lore.trim()||e.lore.length>360||e.loreKind!=='adaptation'))throw new Error('Invalid wiki lore: '+e.id);
   if(e.inspiration!==undefined&&(typeof e.inspiration!=='string'||!e.inspiration.trim()||e.inspiration.length>500||!['recorded','theme','original'].includes(e.inspirationKind)))throw new Error('Invalid wiki inspiration: '+e.id);
   if(e.sources.some(s=>typeof s.label!=='string'||!safeSource(s.url)))throw new Error('Unsafe wiki source');
  }
  for(const e of data.entries)if(e.related.some(id=>!ids.has(id)||id===e.id))throw new Error('Missing wiki relation: '+e.id);
  return data;
 }
 function create(data){
  validate(data);const byId=new Map(data.entries.map(e=>[e.id,e])),aliases=new Map(),definitions=new Map();
  for(const e of data.entries){
   for(const a of [e.label,...e.aliases]){const k=normalize(a);if(!aliases.has(k))aliases.set(k,[]);if(!aliases.get(k).includes(e))aliases.get(k).push(e);}
   if(e.definitionId){if(!definitions.has(e.definitionId))definitions.set(e.definitionId,[]);definitions.get(e.definitionId).push(e);}
  }
  function resolve(text,hint={}){
   if(hint.definitionId){let refs=definitions.get(hint.definitionId)||[];if(hint.definitionFile)refs=refs.filter(e=>e.definitionFile?.replace(/^content\//,'')===hint.definitionFile.replace(/^content\//,''));return refs.length===1?refs[0]:null;}
   let candidates=aliases.get(normalize(text))||[];
   if(hint.category)candidates=candidates.filter(e=>e.category===hint.category);
   if(candidates.length===1)return candidates[0];
   // A lore identity wins over a same-name power; two same-category definitions stay ambiguous.
   const identity=candidates.filter(e=>['race','folklore','reference','mechanic'].includes(e.category));
   return identity.length===1?identity[0]:null;
  }
  function filter({search='',category='',letter=''}={}){const q=normalize(search);return data.entries.filter(e=>(!category||e.category===category)&&(!letter||normalize(e.label).startsWith(normalize(letter)))&&(!q||normalize([e.label,...e.aliases,e.summary,e.lore||'',e.inspiration||'',CATEGORIES[e.category]].join(' ')).includes(q))).sort((a,b)=>a.label.localeCompare(b.label,'id')||a.id.localeCompare(b.id));}
  function characterTerms(c){
   const terms=[];const add=e=>{if(e&&!terms.some(t=>t.id===e.id))terms.push(e);};
   for(const s of [...c.races,...c.attributes])add(resolve(s));
   for(const s of c.archetypes)add(resolve(s,{category:'archetype'}));
   for(const p of c.powers)add(resolve(p.label,{category:'power',definitionId:p.definitionId,definitionFile:p.definitionFile}));
   for(const w of c.weapons)add(resolve(w.label));
   return terms;
  }
  function segments(text,ids,excludeLabel=''){
   const names=new Map();
   for(const id of ids){const e=byId.get(id);if(!e)continue;for(const alias of [e.label,...e.aliases]){
    const k=normalize(alias);if(k===normalize(excludeLabel))continue;
    if(names.has(k)&&names.get(k).id!==id)names.set(k,{id:null,alias});else if(!names.has(k))names.set(k,{id,alias});
   }}
   const usable=[...names.values()].filter(x=>x.id).sort((a,b)=>b.alias.length-a.alias.length);
   if(!usable.length)return[{text:String(text),id:null}];
   const quoted=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
   const regex=new RegExp('(?<![\\p{L}\\p{N}_])('+usable.map(x=>quoted(x.alias)).join('|')+')(?![\\p{L}\\p{N}_])','giu');
   const output=[];let start=0;for(const m of String(text).matchAll(regex)){if(m.index>start)output.push({text:text.slice(start,m.index),id:null});output.push({text:m[0],id:names.get(normalize(m[0])).id});start=m.index+m[0].length;}if(start<text.length)output.push({text:text.slice(start),id:null});return output;
  }
  // Match the whole vocabulary, with longer names winning over contained words.
  // Resolve contextual homonyms before linking; never turn a self-reference into a link.
  const quoted=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const mentionPattern=aliases.size?new RegExp('(?<![\\p{L}\\p{N}_])('+[...aliases.keys()].sort((a,b)=>b.length-a.length).map(a=>quoted(a).replace(/\s+/g,'\\s+')).join('|')+')(?![\\p{L}\\p{N}_])','giu'):null;
  function mentions(value,{currentId,preferredIds=[]}={}){
   const text=String(value),output=[];let start=0;
   if(!mentionPattern)return[{text,id:null}];
   for(const m of text.matchAll(mentionPattern)){
    if(m.index>start)output.push({text:text.slice(start,m.index),id:null});
    const key=normalize(m[0]),prefix=text.slice(Math.max(0,m.index-36),m.index);
    let candidates=aliases.get(key)||[],chosen;
    if(key==='roda kekacauan'&&!/(?:roda|tahap|event)\s*$/i.test(prefix))candidates=[];
    const category=/(?:archetype)\s*$/i.test(prefix)?'archetype':/(?:power|kemampuan)\s*$/i.test(prefix)?'power':/(?:ras|jenis)\s*$/i.test(prefix)?'race':null;
    const contextual=category?candidates.filter(e=>e.category===category):[];
    if(contextual.length===1)chosen=contextual[0];
    else if(key==='npc'&&['anime-lineage','anime-mc','anime-npc'].includes(currentId)&&!category)chosen=byId.get('anime-npc');
    else if(candidates.some(e=>e.id===currentId))chosen=byId.get(currentId);
    else {
     const preferred=candidates.filter(e=>preferredIds.includes(e.id));
     chosen=preferred.length===1?preferred[0]:candidates.length===1?candidates[0]:undefined;
     if(!chosen){const identity=candidates.filter(e=>['race','folklore','reference','mechanic'].includes(e.category));if(identity.length===1)chosen=identity[0];}
    }
    output.push({text:m[0],id:chosen&&chosen.id!==currentId?chosen.id:null});start=m.index+m[0].length;
   }
   if(start<text.length)output.push({text:text.slice(start),id:null});
   return output.length?output:[{text,id:null}];
  }
  return{byId,resolve,filter,characterTerms,segments,mentions};
 }
 return{CATEGORIES,normalize,safeSource,validate,create};
});
