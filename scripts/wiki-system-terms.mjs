// Additional public terms mentioned by the glossary. Every type is checked against
// its current canonical family/wheel, never a retired proposal or uncommitted result.
export const familyTypes = [
 ['demon-lord','Raja Iblis Agung','demon','demon-lord','Jenis Abyssal Axiom yang membuka empat putaran Demonic Power, lalu jumlah pengikut. Bonus pengikut mengikuti hasil yang benar-benar terpilih.'],
 ['iblis','Iblis','demon','ordinary-demon','Jenis Abyssal Axiom yang memperoleh satu power dari Tujuh Dosa Besar, lalu dua putaran Demonic Power. Semua hasil kemampuan dicatat sebagai power milik karakter.'],
 ['fallen-angel','Fallen Angel','demon','fallen-angel','Jenis Abyssal Axiom dengan satu putaran Demonic Power, disusul satu putaran Angelic Power. Kedua kemampuan mengikuti hasil putarannya masing-masing.'],
 ['setan','Setan','demon','setan','Cabang Abyssal Axiom yang memilih Succubus, Ifrit, Asura, atau Imp. Jenis terpilih menentukan satu power tetap sesuai resepnya.'],
 ['pendosa','Pendosa','demon','sinner','Jenis Abyssal Axiom yang memperoleh satu power dari Tujuh Dosa Besar. Jalur power dosa memakai kumpulan yang sama dengan Iblis.'],
 ['god','God','heavenly-principle','god','Jenis Heavenly Principle dengan jalur Concept dalam mode Authority, Divine Power, dan jumlah pengikut. Pengaruh pada tahap Power dan mastery mengikuti paket God yang tercatat.'],
 ['demigod','Demigod','heavenly-principle','demigod','Jenis Heavenly Principle yang memperoleh satu Concept sebagai power biasa dan +1 pada lima main stat. Hadiah ini mengikuti resep Demigod, bukan seluruh kemampuan God.'],
 ['angel','Angel','heavenly-principle','angel','Jenis Heavenly Principle yang membuka dua putaran Angelic Power. Nama kemampuan baru diketahui setelah masing-masing hasil dipilih.'],
 ['utusan-tuhan','Utusan Tuhan','heavenly-principle','utusan-tuhan','Jenis Heavenly Principle yang memperoleh satu Concept sebagai power biasa. Jalurnya juga memberikan +1 Power Mastery bersama.'],
 ['pemuka-agama','Pemuka Agama','heavenly-principle','pemuka-agama','Jenis Heavenly Principle yang membuka satu putaran Divine Power. Nama ini merupakan identitas dalam permainan, dengan hadiah sesuai resepnya.'],
 ['orang-saleh','Orang Saleh','heavenly-principle','orang-saleh','Jenis Heavenly Principle yang memperoleh power Komunikasi dengan Tuhan. Kemampuan memakai penguasaan dan batas yang berlaku pada karakter.'],
 ['goblin','Goblin','goblinoid','goblin','Jenis dalam keluarga Goblin & Orc yang menentukan jumlah pasukan lalu posisi Bos atau Kacung. Jumlah pasukan saja belum menentukan bahwa karakter menjadi bos.'],
 ['orc','Orc','goblinoid','orc','Jenis dalam keluarga Goblin & Orc yang memilih satu peran Orc. Event dan hadiah mengikuti peran yang benar-benar terpilih.'],
 ['troll','Troll','goblinoid','troll','Jenis dalam keluarga Goblin & Orc yang membuka satu roda Penyakit Troll. Kondisi terpilih mengurangi satu stat sesuai resep permainan.'],
 ['dwarf-type','Dwarf','dwarf','dwarf','Jenis Kurcaci yang memperoleh armor melalui hasil jumlah dan bagian armor. Bagian yang sudah terpilih tidak diulang pada hadiah berikutnya.'],
 ['gnome','Gnome','dwarf','gnome','Jenis Kurcaci yang memperoleh satu Gnome Tech sebagai senjata. Senjata hasilnya mempunyai Weapon Mastery sendiri.'],
 ['fairy-parents','Fairy Parents','fae','fairy-parents','Jenis Peri yang memperoleh Wish Granting. Batas kemampuan mengikuti definisi power, tanpa jatah atau hasil harapan tambahan otomatis.'],
 ['element-pixie','Element Pixie','fae','element-pixie','Jenis Peri yang memilih satu Element lalu memperoleh manipulation power yang sesuai. Elemen lain tidak ikut diberikan.'],
 ['healer-fairy','Healer Fairy','fae','healer-fairy','Jenis Peri yang memperoleh Healing Power. Pemulihan mengikuti batas kemampuan dan Power Mastery karakter.'],
 ['fairy-king','Fairy King','fae','fairy-king','Jenis Peri yang mendapat satu putaran Power tambahan pada tahapnya. Seluruh power miliknya menerima +2 Power Mastery sesuai aturan bonus yang berlaku.']
];

export const wheelTypes = [
 ['putri-duyung','Putri Duyung','sea-elf','content/race-wheel-design.json','sea-elf-form','putri-duyung','Bentuk Sea Elf yang memperoleh Mermaid Song. Kemampuan mengikuti definisi power dan Power Mastery karakter.'],
 ['atlantean-warrior','Atlantean Warrior','sea-elf','content/race-wheel-design.json','sea-elf-form','atlantean-warrior','Bentuk Sea Elf yang memperoleh Strength +1 dan senjata sesuai resepnya. Senjata tersebut mempunyai Weapon Mastery sendiri.'],
 ['succubus','Succubus','setan','content/abyssal-axiom-design.json','setan-type','succubus','Jenis Setan yang memperoleh Pesona Hasrat. Kemampuan tersebut mengikuti definisi power dan Power Mastery karakter.'],
 ['ifrit','Ifrit','setan','content/abyssal-axiom-design.json','setan-type','ifrit','Jenis Setan yang memperoleh Fire Manipulation. Dalam permainan ini, hadiah mengikuti resep Ifrit dan batas power Kendali Api.'],
 ['asura','Asura','setan','content/abyssal-axiom-design.json','setan-type','asura','Jenis Setan yang memperoleh Berserk. Power tersebut tidak menambahkan bonus main stat di luar aturan yang dinyatakan.'],
 ['imp','Imp','setan','content/abyssal-axiom-design.json','setan-type','imp','Jenis Setan yang memperoleh Invisibility. Kemampuan memakai batas power dan penguasaan karakter.'],
 ['slime-biasa','Slime Biasa','slime','content/video2-race-imports-design.json','slime-type','ordinary','Jenis Slime yang memperoleh Jelly Body dan dapat melanjutkan ke Archetype. Bentuk tubuh dan kemampuan mengikuti definisi Slime Biasa.'],
 ['acid-slime','Acid Slime','slime','content/video2-race-imports-design.json','slime-type','acid','Jenis Slime yang memperoleh Acid Control. Kemampuan mengendalikan asam mengikuti batas power yang tercatat.'],
 ['poison-slime','Poison Slime','slime','content/video2-race-imports-design.json','slime-type','poison','Jenis Slime yang memperoleh Poison Control. Racun dan pengaruhnya mengikuti definisi power serta mastery karakter.'],
 ['healing-slime','Healing Slime','slime','content/video2-race-imports-design.json','slime-type','healing','Jenis Slime yang memperoleh Healing Power. Pemulihan mengikuti batas kemampuan yang berlaku.'],
 ['metal-slime','Metal Slime','slime','content/video2-race-imports-design.json','slime-type','metal','Jenis Slime yang memperoleh Metal Manipulation. Pengendalian logam mengikuti definisi power tersebut.'],
 ['elemental-slime','Elemental Slime','slime','content/video2-race-imports-design.json','slime-type','elemental','Jenis Slime yang memilih satu Element dan memperoleh manipulation power sesuai hasilnya. Jalur ini menjalankan event Slime yang tercatat.']
];

export const extraMechanics = [
 ['authority-mode','Authority','Mode khusus pemberian Concept, dengan penguasaan dan perlakuan kemampuan sesuai sumbernya. Mode Authority berbeda dari power bernama Authority pada jalur Royal.','content/universal-concept-wheel-design.json',['Mode Authority']],
 ['wild-shape','Wild Shape','Jalur Druid yang memakai perubahan bentuk sesuai hewan hasil eventnya. Bentuk dan kemampuan mengikuti resep jalur yang terpilih.','content/druid-events-design.json',[]],
 ['raw','Raw','Nilai dasar hasil roda sebelum modifier akhir. Raw main stat memakai skala 0–9, sedangkan stat akhir boleh berada di luar skala itu.','content/bonus-timing-design.json',[]],
 ['modifier','Modifier','Pengaruh tambahan dari suatu sumber yang mengubah hasil sesuai aturan tahapnya. Stat dan mastery menyimpan modifier bersama sumbernya agar hasil akhir dapat ditelusuri.','content/bonus-timing-design.json',[]],
 ['gnome-tech','Gnome Tech','Roda teknologi Gnome yang memilih satu gadget sebagai senjata. Hanya gadget terpilih yang diberikan dan kemudian memakai Weapon Mastery sendiri.','content/dwarf-gnome-events-design.json',[]],
 ['troll-disease','Penyakit Troll','Roda kondisi permainan pada Troll yang memilih satu penalti stat sesuai resepnya. Nama kondisi merupakan hasil permainan, dengan pengaruh hanya dari modifier yang tercatat.','content/goblin-orc-troll-events-design.json',[]],
 ['power-stage','Power','Power adalah kemampuan yang dimiliki karakter dari hasil permainan. Tahap Power mengatur akuisisi berikutnya; hasil None tidak menghapus kemampuan yang sudah dimiliki.','content/main-power-wheel-design.json',['Power utama']],
 ['concept','Concept','Kumpulan konsep yang memilih satu kemampuan tematik melalui God Concept. Cara pemberian sebagai power biasa atau Authority mengikuti jalur pemanggilnya.','content/universal-concept-wheel-design.json',['God Concept']],
 ['element','Element','Roda elemen universal yang memilih satu elemen dan manipulation power yang sesuai. Hanya hasil terpilih yang diberikan kepada pemanggilnya.','content/universal-element-wheel-design.json',[]],
 ['seven-deadly-sins','Tujuh Dosa Besar','Roda tujuh dosa yang menentukan satu power dosa sesuai hasilnya. Iblis dan Pendosa memakai kumpulan power yang sama.','content/universal-sin-wheel-design.json',['Seven Deadly Sins']],
 ['takeover','Takeover','Persentase pengambilalihan ras inang oleh Symbiote, dari 0% hingga 100% dalam langkah 10%. Bonus dan power mengikuti tingkat Takeover yang benar-benar terpilih.','content/symbiote-events-design.json',['Symbiote Takeover']],
 ['compatibility','Compatibility','Tingkat kecocokan Vessel dengan sumber kekuatannya. Paket hadiah mengikuti sumber dan tingkat kecocokan yang terpilih.','content/vessel-events-design.json',[]],
 ['ascension','Ascension','Event Paladin yang menentukan jalur Nirvana High Paladin atau Paladin Biasa. Jalur terpilih menentukan jumlah Angelic Power dan bonus Weapon Mastery yang berlaku.','content/paladin-events-design.json',[]],
 ['berserker','Berserker','Jalur Goliath yang memberi Strength +4 dan Uncontrollable Rage. Jalur bukan Berserker memberi Strength +2 tanpa weakness Goliath tambahan.','content/goliath-events-design.json',[]],
 ['uncontrollable-rage','Uncontrollable Rage','Weakness dari jalur Berserker pada Goliath, berupa amarah yang sulit dikendalikan. Resep ini tidak menetapkan penalti stat numerik tambahan.','content/goliath-events-design.json',[]],
 ['strength','Strength','Salah satu dari lima main stat, berkaitan dengan kekuatan karakter. Raw 0–9 menerima modifier untuk membentuk stat akhir yang boleh negatif atau melampaui 9.','framework/spec.json',[]],
 ['speed','Speed','Salah satu dari lima main stat, berkaitan dengan kecepatan karakter. Nilai ditampilkan sebagai stat akhir setelah modifier.','framework/spec.json',[]],
 ['durability','Durability','Salah satu dari lima main stat, berkaitan dengan ketahanan karakter. Nilai raw dan modifier dicatat terpisah sebelum membentuk stat akhir.','framework/spec.json',[]],
 ['intelligence','Intelligence','Salah satu dari lima main stat, berkaitan dengan kecerdasan karakter. Nilai akhir mengikuti raw dan modifier yang tercatat.','framework/spec.json',[]],
 ['fight','Fight','Salah satu dari lima main stat, berkaitan dengan kemampuan bertarung karakter. Nilai akhir memakai hasil dan modifier permainan yang tercatat.','framework/spec.json',[]],
 ['anime-mc','MC','Posisi tokoh utama dalam jalur Anime. Event berikutnya mengikuti genre dan hasil MC yang benar-benar terpilih.','content/race-wheel-design.json',[]],
 ['anime-npc','NPC Anime','Posisi NPC dalam jalur Anime, berbeda dari Archetype NPC. Event berikutnya mengikuti resep genre yang terpilih.','content/race-wheel-design.json',['NPC']]
];
