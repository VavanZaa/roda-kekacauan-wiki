(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.WikiModel = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const STAT_IDS = ['strength', 'speed', 'durability', 'intelligence', 'fight'];
  const LABELS = { strength: 'Strength', speed: 'Speed', durability: 'Durability', intelligence: 'Intelligence', fight: 'Fight' };
  const text = v => typeof v === 'string' && v.trim().length > 0;
  const id = v => typeof v === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
  const fail = message => { throw new Error(message); };
  const check = (condition, message) => { if (!condition) fail(message); };
  const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
  function safeImage(value) {
    if (typeof value !== 'string') return '';
    if (/^assets\/[a-zA-Z0-9/_-]+\.(?:webp|png|jpg|jpeg|svg)$/i.test(value) && !value.includes('..')) return value;
    return '';
  }
  function tiktokUrl(value) {
    if (typeof value !== 'string') return '';
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || url.username || url.password || url.port) return '';
      const allowed = ['www.tiktok.com', 'tiktok.com', 'vm.tiktok.com', 'vt.tiktok.com'];
      if (!allowed.includes(url.hostname)) return '';
      if (['tiktok.com','www.tiktok.com'].includes(url.hostname) && !/^\/@[^/]+\/video\/\d+\/?$/.test(url.pathname)) return '';
      if (['vm.tiktok.com','vt.tiktok.com'].includes(url.hostname) && !/^\/[A-Za-z0-9]+\/?$/.test(url.pathname)) return '';
      return url.href;
    } catch { return ''; }
  }
  function date(value) {
    if (!text(value)) return false;
    const match = /^(\d{4})-(\d{2})-(\d{2})(?:T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d))?$/.exec(value);
    if (!match) return false;
    const y = Number(match[1]), m = Number(match[2]), d = Number(match[3]);
    const parsed = new Date(Date.UTC(y, m - 1, d));
    return parsed.getUTCFullYear() === y && parsed.getUTCMonth() === m - 1 && parsed.getUTCDate() === d && Number.isFinite(Date.parse(value));
  }
  function score(value, label) {
    check(value && typeof value === 'object', `${label}: skor wajib ada.`);
    check(Number.isInteger(value.raw) && value.raw >= 0 && value.raw <= 9, `${label}: raw harus 0–9.`);
    check(Number.isFinite(value.final), `${label}: final harus berupa angka.`);
    check(Array.isArray(value.modifiers), `${label}: modifiers harus array (boleh kosong).`);
    const sourceIds = new Set();
    for (const mod of value.modifiers) {
      check(text(mod.sourceId) && text(mod.label) && Number.isFinite(mod.value), `${label}: setiap modifier wajib punya sourceId, label, value.`);
      check(!sourceIds.has(mod.sourceId), `${label}: sumber modifier terduplikasi.`);
      sourceIds.add(mod.sourceId);
    }
    const base = own(value, 'base') ? value.base : value.raw;
    check(Number.isInteger(base) && base >= 0 && base <= 9, `${label}: base override harus 0–9.`);
    check(Math.abs(base + value.modifiers.reduce((sum, mod) => sum + mod.value, 0) - value.final) < 1e-8, `${label}: final tidak sama dengan base + modifier.`);
    if (value.rawLabel !== undefined) check(text(value.rawLabel), `${label}: rawLabel harus teks.`);
    return value;
  }
  function list(value, label) {
    check(Array.isArray(value) && value.every(text), `${label}: harus array teks (boleh kosong).`);
  }
  function inventory(value, label, weapon) {
    check(Array.isArray(value), `${label}: harus array (boleh kosong).`);
    const ids = new Set(), definitions = new Set();
    for (const item of value) {
      check(text(item.id) && text(item.definitionId) && text(item.label), `${label}: item wajib punya id, definitionId, label.`);
      check(!ids.has(item.id), `${label}: instance ID terduplikasi.`); ids.add(item.id);
      if (!weapon) { check(!definitions.has(item.definitionId), 'Power identik harus digabung, simpan semua sumber pada satu item.'); definitions.add(item.definitionId); }
      list(item.sources, `${label} sources`);
      if (item.description !== undefined) check(typeof item.description === 'string', `${label}: description harus teks.`);
      if (weapon) { score(item.mastery, 'Weapon mastery'); list(item.enchantments, 'Enchantments'); }
      else {
        check(Number.isInteger(item.tier) && item.tier >= 1 && item.tier <= 5, 'Power tier harus 1–5.');
        if (item.masteryOverride !== undefined && item.masteryOverride !== null) score(item.masteryOverride, 'Power mastery override');
      }
    }
  }
  function validateCharacter(c, { demo = false } = {}) {
    check(c && typeof c === 'object', 'Karakter harus berupa objek.');
    check(id(c.id), 'ID harus slug huruf kecil/angka dengan tanda hubung.');
    check(text(c.snapshotId), 'snapshotId hasil final wajib diisi.');
    check(text(c.name), 'Nama wajib diisi.');
    check(['draft', 'published', 'demo'].includes(c.status), 'Status harus draft, published, atau demo.');
    check(demo ? c.status === 'demo' : c.status !== 'demo', 'Data demo harus terpisah dari arsip nyata.');
    check(c.episode === null || (Number.isInteger(c.episode) && c.episode > 0), 'Episode harus angka positif atau null.');
    check(typeof c.title === 'string' && typeof c.requestedBy === 'string' && typeof c.backstory === 'string', 'title, requestedBy dan backstory harus teks.');
    for (const key of ['races', 'archetypes', 'attributes', 'weaknesses']) list(c[key], key);
    check(c.races.length > 0, 'Minimal satu identitas ras wajib diisi.');
    if (c.size !== null) check(c.size && text(c.size.label) && Number.isFinite(c.size.meters) && c.size.meters > 0 && text(c.size.metric), 'Size memerlukan label, meter positif dan metric.');
    check(c.image === null || (c.image && safeImage(c.image.src) && text(c.image.alt)), 'Gambar harus aset lokal assets/ dengan alt text.');
    check(c.stats && typeof c.stats === 'object', 'Stats wajib diisi.');
    for (const key of STAT_IDS) score(c.stats[key], LABELS[key]);
    score(c.powerMastery, 'Power mastery bersama');
    inventory(c.weapons, 'Weapons', true); inventory(c.powers, 'Powers', false);
    check(Array.isArray(c.spins), 'spins harus array (boleh kosong).');
    for (const spin of c.spins) check(text(spin.id) && text(spin.wheel) && text(spin.result) && typeof spin.note === 'string', 'Spin memerlukan id, wheel, result, note.');
    check(new Set(c.spins.map(s => s.id)).size === c.spins.length, 'Spin ID terduplikasi.');
    check(c.provenance && text(c.provenance.runId) && text(c.provenance.rulesVersion), 'Provenance memerlukan runId dan rulesVersion.');
    check(c.publication && typeof c.publication === 'object', 'Publication wajib ada.');
    if (c.status === 'published') {
      check(c.image !== null, 'Karakter publik harus punya gambar.');
      check(tiktokUrl(c.publication.tiktokUrl), 'Karakter publik harus punya URL video TikTok HTTPS yang valid.');
      check(date(c.publication.publishedAt), 'publishedAt harus tanggal ISO yang valid.');
    } else {
      check(c.publication.tiktokUrl === null || !!tiktokUrl(c.publication.tiktokUrl), 'URL TikTok tidak valid.');
      check(c.publication.publishedAt === null || date(c.publication.publishedAt), 'Tanggal tidak valid.');
    }
    return c;
  }
  function validateArchive(archive, options = {}) {
    check(archive?.schemaVersion === 1 && Array.isArray(archive.characters), 'Arsip harus schemaVersion: 1 dengan characters array.');
    const ids = new Set(), episodes = new Set();
    for (const c of archive.characters) {
      validateCharacter(c, options);
      check(!ids.has(c.id), `ID karakter ${c.id} terduplikasi.`); ids.add(c.id);
      if (c.episode !== null) { check(!episodes.has(c.episode), `Episode ${c.episode} terduplikasi.`); episodes.add(c.episode); }
    }
    return archive;
  }
  function published(archive) { return archive.characters.filter(c => c.status === 'published'); }
  function filterCharacters(characters, { search = '', race = '', archetype = '', sort = 'latest' } = {}) {
    const query = search.trim().toLocaleLowerCase('id-ID');
    const rows = characters.filter(c => (!query || [c.name, c.title, c.requestedBy, c.episode === null ? '' : String(c.episode), c.backstory, ...c.races, ...c.archetypes, ...c.attributes, ...c.weaknesses, ...c.powers.map(p => p.label), ...c.weapons.map(w => w.label)].join(' ').toLocaleLowerCase('id-ID').includes(query)) && (!race || c.races.includes(race)) && (!archetype || c.archetypes.includes(archetype)));
    if (sort.startsWith('stat:')) {
      const stat = sort.slice(5);
      if (STAT_IDS.includes(stat)) return rows.sort((a, b) => b.stats[stat].final - a.stats[stat].final || a.name.localeCompare(b.name, 'id'));
    }
    if (sort === 'name') return rows.sort((a, b) => a.name.localeCompare(b.name, 'id'));
    return rows.sort((a, b) => (Date.parse(b.publication.publishedAt || 0) || 0) - (Date.parse(a.publication.publishedAt || 0) || 0) || (b.episode || 0) - (a.episode || 0));
  }
  return { STAT_IDS, LABELS, safeImage, tiktokUrl, score, validateCharacter, validateArchive, published, filterCharacters };
});
