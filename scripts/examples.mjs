const score = (raw, value = 0, label = 'Contoh modifier', base) => ({ raw, ...(base === undefined ? {} : { base }), modifiers: value === 0 ? [] : [{ sourceId: 'demo-modifier', label, value }], final: (base ?? raw) + value });
export function blankCharacter() {
  return {
    id: 'karakter-001', snapshotId: 'final-snapshot-001', status: 'draft', episode: 1,
    name: 'Nama karakter', title: '', requestedBy: '', races: ['Human'], archetypes: [],
    size: null, image: null, backstory: '', attributes: [],
    stats: Object.fromEntries(['strength','speed','durability','intelligence','fight'].map(id => [id, score(0)])),
    powerMastery: score(0), weapons: [], powers: [], weaknesses: [], spins: [],
    provenance: { runId: 'run-001', rulesVersion: 'isi-versi-aturan' },
    publication: { tiktokUrl: null, publishedAt: null }
  };
}
export const demos = [
  {
    ...blankCharacter(), id: 'garuda-senja', snapshotId: 'demo-garuda', status: 'demo', episode: 1,
    name: 'Garuda Senja', title: 'Bayangan di atas kota', requestedBy: '@contoh_penonton',
    races: ['Siluman'], archetypes: ['Assassin'], size: { label: '184 cm', meters: 1.84, metric: 'height' },
    image: { src: 'assets/demo-garuda.svg', alt: 'Ilustrasi siluet humanoid bersayap elang dengan latar hijau dan bulan senja.' },
    backstory: 'Penjaga langit yang meninggalkan sarangnya untuk mencari satu nama di antara jutaan manusia. Di siang hari, ia berjalan tanpa jejak. Di malam hari, seluruh kota menjadi wilayahnya. Ini cerita ilustrasi untuk mencoba tampilan wiki.',
    attributes: ['Elang', 'Humanoid bersayap', 'Transformasi hewan'],
    stats: { strength: score(5), speed: score(8, 2, 'Contoh bonus gabungan'), durability: score(3), intelligence: score(4), fight: score(7) },
    powerMastery: score(4),
    weapons: [{ id: 'demo-keris', definitionId: 'demo-keris', label: 'Keris Senja', description: 'Senjata ilustrasi; belum terhubung ke katalog weapon.', mastery: score(5, 1, 'Contoh bonus mastery'), enchantments: ['Angin senja (ilustrasi)'], sources: ['Contoh tampilan'] }],
    powers: [{ id: 'demo-flight', definitionId: 'demo-flight', label: 'Sayap Bayangan', tier: 3, description: 'Power ilustrasi untuk tampilan kartu. Tier contoh, bukan hasil generator.', sources: ['Contoh tampilan'] }],
    weaknesses: ['Sayap rentan di ruang sempit'],
    spins: [{ id: 'demo-g-1', wheel: 'Race', result: 'Siluman', note: 'Urutan ilustrasi; bukan journal spin nyata.' }, { id: 'demo-g-2', wheel: 'Siluman Type', result: 'Elang', note: 'Satu identitas hewan.' }, { id: 'demo-g-3', wheel: 'Archetype', result: 'Assassin', note: '' }, { id: 'demo-g-4', wheel: 'Speed', result: 'Raw 8', note: 'Contoh modifier +2 → final 10.' }],
    provenance: { runId: 'demo-only', rulesVersion: 'illustration-only' }
  },
  {
    ...blankCharacter(), id: 'banyu-aksara', snapshotId: 'demo-banyu', status: 'demo', episode: 2,
    name: 'Banyu Aksara', title: 'Pembaca arus yang terlupa', requestedBy: '@contoh_penonton',
    races: ['Elf'], archetypes: ['Mage'], size: { label: '172 cm', meters: 1.72, metric: 'height' },
    image: { src: 'assets/demo-banyu.svg', alt: 'Ilustrasi penyihir bertelinga runcing dengan tongkat dan lingkaran sihir biru.' },
    backstory: 'Di perpustakaan yang tenggelam, setiap ombak menyimpan satu halaman. Banyu adalah pembaca terakhirnya. Ia tidak mencari kekuatan; ia mencari akhir dari kisah yang belum selesai. Ini cerita ilustrasi untuk mencoba tampilan wiki.',
    attributes: ['Sea Elf', 'Sihir air', 'Penjelajah arsip'],
    stats: { strength: score(0, -1, 'Contoh debuff'), speed: score(3), durability: score(2), intelligence: score(9, 2, 'Contoh bonus'), fight: score(4) },
    powerMastery: score(5, 1, 'Contoh bonus mastery'), weapons: [],
    powers: [{ id: 'demo-water', definitionId: 'demo-water', label: 'Aksara Air', tier: 3, description: 'Power ilustrasi; tidak menetapkan reward ras atau role.', sources: ['Contoh tampilan'] }, { id: 'demo-memory', definitionId: 'demo-memory', label: 'Ingatan Samudra', tier: 2, description: 'Power ilustrasi.', sources: ['Contoh tampilan'] }],
    weaknesses: ['Rapuh dalam pertarungan jarak dekat'],
    spins: [{ id: 'demo-b-1', wheel: 'Race', result: 'Elf', note: 'Urutan ilustrasi; bukan journal spin nyata.' }, { id: 'demo-b-2', wheel: 'Elf Type', result: 'Sea Elf', note: '' }, { id: 'demo-b-3', wheel: 'Archetype', result: 'Mage', note: '' }, { id: 'demo-b-4', wheel: 'Strength', result: 'Raw 0', note: 'Contoh debuff −1 → final −1.' }],
    provenance: { runId: 'demo-only', rulesVersion: 'illustration-only' }
  },
  {
    ...blankCharacter(), id: 'raksa-kelana', snapshotId: 'demo-raksa', status: 'demo', episode: 3,
    name: 'Raksa Kelana', title: 'Gunung yang memilih berjalan', requestedBy: '@contoh_penonton',
    races: ['Raksasa'], archetypes: [], size: { label: '100 m', meters: 100, metric: 'height' },
    image: { src: 'assets/demo-raksa.svg', alt: 'Ilustrasi raksasa bertanduk dan bermata keemasan di antara pegunungan.' },
    backstory: 'Orang-orang mengira ia gunung. Sampai suatu pagi, gunung itu berdiri dan pergi. Kini setiap langkahnya menjadi legenda baru. Ini cerita ilustrasi untuk mencoba tampilan wiki.',
    attributes: ['Bertanduk', 'Tubuh batu', 'Pengelana'],
    stats: { strength: score(9, 3, 'Contoh bonus'), speed: score(1), durability: score(8, 2, 'Contoh bonus'), intelligence: score(2), fight: score(5) },
    powerMastery: score(3), weapons: [],
    powers: [{ id: 'demo-earth', definitionId: 'demo-earth', label: 'Langkah Gempa', tier: 4, description: 'Power ilustrasi; bukan reward mekanik Size.', sources: ['Contoh tampilan'] }],
    weaknesses: ['Gerak lambat'],
    spins: [{ id: 'demo-r-1', wheel: 'Race', result: 'Raksasa', note: 'Urutan ilustrasi; bukan journal spin nyata.' }, { id: 'demo-r-2', wheel: 'Archetype', result: 'Dilewati', note: 'Tampilan mendukung karakter tanpa Archetype.' }, { id: 'demo-r-3', wheel: 'Size', result: '100 m', note: 'Angka ilustrasi, bukan hasil planner Size.' }],
    provenance: { runId: 'demo-only', rulesVersion: 'illustration-only' }
  }
];
