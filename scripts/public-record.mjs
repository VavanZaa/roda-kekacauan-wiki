const pick = (value, keys) => Object.fromEntries(keys.filter(key => key in value).map(key => [key,value[key]]));
function score(value) {
  return { ...pick(value,['raw','rawLabel','base','final']), modifiers: value.modifiers.map(m=>pick(m,['sourceId','label','value'])) };
}
export function publicRecord(c) {
  return {
    ...pick(c,['id','snapshotId','status','episode','name','title','requestedBy','races','archetypes','backstory','attributes','weaknesses']),
    size: c.size === null ? null : pick(c.size,['label','meters','metric']),
    image: c.image === null ? null : pick(c.image,['src','alt']),
    stats: Object.fromEntries(['strength','speed','durability','intelligence','fight'].map(key=>[key,score(c.stats[key])])),
    powerMastery: score(c.powerMastery),
    weapons: c.weapons.map(w=>({ ...pick(w,['id','definitionId','label','description','enchantments','sources']), mastery:score(w.mastery) })),
    powers: c.powers.map(p=>({ ...pick(p,['id','definitionId','label','description','tier','sources']), ...(p.masteryOverride ? {masteryOverride:score(p.masteryOverride)} : {}) })),
    spins: c.spins.map(s=>pick(s,['id','wheel','result','note'])),
    provenance:pick(c.provenance,['runId','rulesVersion']),
    publication:pick(c.publication,['tiktokUrl','publishedAt'])
  };
}
