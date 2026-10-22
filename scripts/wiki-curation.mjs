// Reader-facing summaries. These describe the game; they never execute rewards.
export const races = [
 ['human','Manusia','Ras manusia biasa yang langsung melanjutkan ke Archetype, tanpa event ras tambahan. Identitas ini tidak memberikan power atau bonus ras otomatis.',['Human']],
 ['goblinoid','Goblin & Orc','Keluarga ras yang bercabang menjadi Goblin, Orc, atau Troll. Event mengikuti jenis yang benar-benar terpilih, bukan seluruh keluarga sekaligus.',[]],
 ['dwarf','Kurcaci','Keluarga ras yang memilih antara Dwarf dan Gnome. Dwarf membuka perlengkapan armor, sedangkan Gnome membuka senjata teknologi.',[]],
 ['centaur','Centaur','Identitas bertubuh gabungan dengan bagian bawah dari satu hewan terpilih. Jenis hewan menentukan paket bonus dan kecocokan Archetype.',[]],
 ['slime','Slime','Keluarga tubuh slime dengan beberapa jenis dan kemampuan berbeda. Jalur spesialis mengikuti event jenisnya; Slime Biasa tetap dapat menuju Archetype.',[]],
 ['anime-lineage','Anime','Jalur identitas yang memilih genre lalu posisi MC atau NPC. Event khusus genre muncul sesuai hasil yang terpilih, tanpa otomatis mewarisi seluruh kemampuan suatu anime.',[]],
 ['elf','Elf','Keluarga ras dengan delapan jenis: High Elf, Dark Elf, Forest Elf, Sea Elf, Blood Elf, Fey Elf, Shadow Elf, dan Astral Elf. Setiap jenis memiliki jalur trait atau power tersendiri.',[]],
 ['beastfolk','Siluman','Dalam permainan ini, Siluman adalah humanoid dengan ciri satu hewan terpilih. Ia memperoleh Animal Transformation, sementara event khusus mengikuti jenis hewannya.',[]],
 ['lelembut','Lelembut','Keluarga identitas makhluk halus dan undead, dengan jalur Lokal atau Impor. Tuyul, Pocong, Vampire, dan Lich merupakan contoh jenis dengan event berbeda.',[]],
 ['elemental','Elemental','Identitas yang terikat pada satu elemen hasil roda Element. Power mengikuti elemen terpilih; namanya tidak otomatis memberikan bonus mastery.',[]],
 ['golem','Golem','Keluarga tubuh golem yang dibedakan oleh bahan atau elemen pembentuknya. Event dan power mengikuti jenis golem yang terpilih.',[]],
 ['machine','Machine','Keluarga tubuh atau keberadaan mesin, dari Android dan Cyborg sampai AI dan peralatan rumah tangga. Event jenis menentukan power, senjata, atau bonusnya.',[]],
 ['fae','Peri','Keluarga dengan empat jalur: Fairy Parents, Element Pixie, Healer Fairy, dan Fairy King. Setiap jalur menjalankan paket eventnya sendiri.',['Fairy']],
 ['legendary-warrior','Reinkarnasi Pahlawan Legendaris','Jalur warisan satu tokoh dari kelompok Lokal atau Impor. Identitas tokoh menjadi konteks karakter, sedangkan hadiah tetap mengikuti paket permainan yang tercatat.',[]],
 ['mythical-beast','Mythical Beast','Keluarga makhluk mitologis dengan cabang Lokal dan Impor. Jenis terpilih menentukan eventnya; legenda tidak otomatis menambahkan kemampuan di luar resep permainan.',[]],
 ['symbiote','Symbiote','Identitas yang menempel pada satu ras inang, lalu menentukan tingkat Takeover. Event inang diselesaikan lebih dahulu sebelum paket Symbiote ditentukan.',[]],
 ['demon','Abyssal Axiom','Kelompok permainan untuk Raja Iblis Agung, Iblis, Fallen Angel, Setan, dan Pendosa. Hasil jenis menentukan jalur event; pengelompokan ini bukan klasifikasi agama nyata.',[]],
 ['heavenly-principle','Heavenly Principle','Kelompok permainan untuk God, Demigod, Angel, Utusan Tuhan, Pemuka Agama, dan Orang Saleh. Bonus dan power hanya mengikuti jalur jenis yang terpilih.',[]],
 ['cosmic-warrior','Cosmic Warrior','Jalur Cosmic Warrior memilih satu kelompok media, seperti Ultraman, Saiyan, atau Lantern Corps. Paket hasilnya mengikuti aturan Roda Kekacauan dan melewati Archetype.',[]],
 ['raksasa','Raksasa','Ras hasil putaran berikutnya menjadi versi raksasa, dengan event ras dasarnya tetap dijalankan. Archetype dilewati dan ukuran ditentukan melalui jalur Size Raksasa.',['Giant']],
 ['hybrid','Hybrid','Jalur ras yang menyelesaikan dua cabang ras secara berurutan. Ras yang sudah muncul dikeluarkan dari pilihan berikutnya agar cabangnya tidak mengulang identitas yang sama.',[]],
 ['primordial','Primordial','Jalur satu tokoh awal penciptaan dari katalog Primordial. Tokoh terpilih menerima paket permainan tertentu dan melewati Archetype, tanpa otomatis menjadi mahakuasa.',[]]
];
export const roles = [
 ['npc','NPC','Archetype tanpa event lanjutan atau bonus tambahan. Hasil NPC tetap dicatat sebelum karakter melanjutkan ke Backstory.'],
 ['pirate','Pirate','Archetype yang memilih rank bajak laut, kemudian kapal. Bonus berasal dari rank; kapal menjadi konteks visual dan cerita tanpa bonus gameplay.'],
 ['alchemist','Alchemist','Archetype yang meminum tepat satu ramuan hasil roda. Resep ramuan dapat menghasilkan debuff, minuman netral, buff, atau power tertentu.'],
 ['disciple','Disciple','Archetype yang belajar stat, senjata, atau power dari mentor. Sumber yang diwarisi mengikuti hasil belajar; mastery karakter tidak sekadar menyalin mastery mentor.'],
 ['archaeologist','Archaeologist','Archetype yang menemukan tulang satu hewan dari berbagai zaman. Temuan tertentu membuka paket stat, power, atau keduanya sesuai resepnya.'],
 ['slayer','Slayer','Archetype pemburu yang menentukan identitas korban dan jumlah korbannya. Bonus Strength mengikuti hasil jumlah, tanpa mewarisi perlengkapan atau power korban.'],
 ['druid','Druid','Archetype dengan empat jalur bertema alam. Jalur terpilih memberi power sesuai resepnya, termasuk jalur perubahan bentuk Wild Shape.'],
 ['rider','Rider','Archetype yang memilih kategori lalu satu tunggangan. Paket bonus mengikuti tunggangan; hasil kuat juga dicatat sebagai senjata sesuai aturan Rider.'],
 ['goliath','Goliath','Archetype dengan cabang Berserker atau bukan Berserker. Berserker memberi bonus Strength lebih besar sekaligus Uncontrollable Rage.'],
 ['gladiator','Gladiator','Archetype yang mengganti senjata sebelumnya dengan satu senjata Gladiator. Karakter hanya memakai senjata terpilih dan menerima +2 Weapon Mastery.'],
 ['survivalist','Survivalist','Archetype yang menentukan lingkungan keras lalu peluang bertahan. Paket stat, power, atau keduanya mengikuti hasil kedua roda itu.'],
 ['priest','Priest','Archetype yang menjalankan satu roda Angelic Power. Power terpilih memakai Power Mastery bersama milik karakter.'],
 ['assassin','Assassin','Archetype yang memilih satu jenis Assassin dan menerima +1 Speed. Jenis terpilih memberi satu senjata atau satu power tematik sesuai paketnya.'],
 ['cursed','Cursed','Archetype yang menentukan tingkat kutukan. Hasil tingkat kutukan menentukan jumlah power dan weakness menurut resep Cursed.'],
 ['equaliser','Equalizer','Archetype yang menyamakan peluang hasil eligible pada roda-roda sesudahnya. Larangan hasil yang tidak cocok tetap berlaku; Equalizer tidak menambahkan pilihan yang dilarang.',['Equaliser']],
 ['paladin','Paladin','Archetype dengan jalur biasa atau Ascension. Jalur terpilih menentukan jumlah Angelic Power dan apakah bonus Weapon Mastery biasa berlaku.'],
 ['apostle','Apostle','Archetype yang memilih patron God atau Devil/Demon. Patron menentukan satu Divine atau Demonic Power, dengan +1 Power Mastery bersama.'],
 ['primordial-champion','Primordial Champion','Archetype yang terhubung dengan satu tokoh Primordial. Paket Champion mengikuti tokoh terpilih dan tidak otomatis menyalin semua kemampuan legenda.'],
 ['colossal-warmech','Colossal Warmech','Archetype mesin perang yang memilih kelas dan senjata mech. Kelas menentukan paket bonus; ukuran tubuh tetap mengikuti aturan Size yang berlaku.'],
 ['tamer','Tamer','Archetype yang memperoleh Taming Power dan satu companion dari roda hewan. Companion diberikan langsung tanpa roda keberhasilan menjinakkan tambahan.'],
 ['mage','Mage','Archetype dengan jalur Mage biasa atau Master Sihir. Akuisisi power dilakukan pada tahap Power dengan jumlah hasil terjamin sesuai jalurnya.'],
 ['gambler','Gambler','Archetype dengan empat mode: All In, Double or Nothing, High Roller, dan Lucky Number. Mode terpilih mengubah cara hasil stat diproses.'],
 ['resilient','Resilient','Archetype yang memberi satu percobaan ulang pada hasil raw stat atau mastery yang memenuhi ambang rendah. Hasil raw yang lebih tinggi dipertahankan.'],
 ['warlord','Warlord','Archetype yang memilih identitas dan jumlah pasukan. Identitas pasukan tidak otomatis memindahkan seluruh hadiah ras pasukan kepada pemimpinnya.'],
 ['vessel','Vessel','Archetype wadah suatu sumber kekuatan dengan tingkat Compatibility. Paket hadiah mengikuti sumber dan tingkat kecocokan yang benar-benar terpilih.'],
 ['royal','Royal','Archetype yang memilih satu bidak catur: King, Queen, Bishop, Knight, Rook, atau Pawn. Setiap bidak mempunyai paket bonus atau kondisi evolusi yang berbeda.'],
 ['mutant','Mutant','Archetype yang memperoleh satu ras tambahan melalui mutasi. Ras baru menjalankan eventnya tanpa mengulang ras yang sudah muncul.'],
 ['hybrid','Hybrid Archetype','Jalur yang menggabungkan dua Archetype berbeda dan saling cocok. Kedua jalur event mengikuti aturan komposisi, bukan campuran bonus bebas.',['Hybrid']]
];
export const spirits = [
 ['pocong','Pocong','Sosok hantu berkain kafan dalam cerita rakyat Indonesia. Versi Roda Kekacauan termasuk Lelembut Lokal dan memperoleh Jump.'],
 ['tuyul','Tuyul','Tuyul adalah makhluk kecil dalam cerita rakyat yang dikenal mencuri uang. Dalam Roda Kekacauan, ia merupakan Lelembut Lokal yang memperoleh power Nyolong.'],
 ['kuntilanak','Kuntilanak','Sosok hantu perempuan dalam cerita rakyat Indonesia. Dalam permainan ini, hasil Kuntilanak memperoleh Flight.'],
 ['genderuwo','Genderuwo','Jenis Lelembut Lokal dalam katalog Roda Kekacauan. Eventnya memberikan Size Manipulation, dengan batas kemampuan mengikuti power tersebut.'],
 ['wewe-gombel','Wewe Gombel','Jenis Lelembut Lokal yang merujuk cerita rakyat Jawa. Versi permainan memperoleh Child Protection.'],
 ['sundel-bolong','Sundel Bolong','Sosok hantu perempuan dengan lubang di punggung dalam cerita rakyat. Adaptasi permainan ini memperoleh power Mukbang.'],
 ['kuyang','Kuyang','Jenis Lelembut Lokal dalam katalog permainan. Eventnya memberikan Flight dan Organ Control.'],
 ['leak','Leak','Jenis Lelembut Lokal dengan jalur event tersendiri. Hadiah mengikuti hasil event Leak yang dicatat, bukan seluruh kemampuan dalam cerita atau legenda.'],
 ['palasik','Palasik','Jenis Lelembut Lokal dalam Roda Kekacauan. Eventnya memberikan Head Detachment.'],
 ['banaspati','Banaspati','Jenis Lelembut Lokal dengan power bertema api. Hasilnya memberikan Fire Manipulation sesuai definisi permainan.'],
 ['jenglot','Jenglot','Jenis Lelembut Lokal dalam katalog permainan. Hasilnya memberikan power Pesugihan sesuai resep yang tercatat.'],
 ['suster-ngesot','Suster Ngesot','Sosok hantu perawat yang bergerak dengan merangkak dalam cerita populer. Dalam permainan, ia memperoleh Ngesot serta penalti stat dari resep eventnya.'],
 ['skeleton','Skeleton','Jenis Lelembut Impor berupa identitas kerangka. Jalur ras asal mencatat asal-usulnya sesuai event, tanpa menganggap semua hadiah ras asal otomatis berlaku.'],
 ['vampire','Vampire','Jenis Lelembut Impor dengan jalur identitas mangsa dan jumlah korban. Hadiah mengikuti hasil event Vampire yang benar-benar dipilih.'],
 ['zombie','Zombie','Jenis Lelembut Impor dengan jalur asal-usulnya sendiri. Identitas dan bonus mengikuti resep Zombie dalam permainan.'],
 ['lich','Lich','Jenis Lelembut Impor dengan jaminan dasar Durability 9 dan satu akuisisi power tambahan yang dijadwalkan. Nilai final masih menerima modifier yang berlaku.'],
 ['ghost','Ghost','Jenis Lelembut Impor bertema roh tanpa tubuh padat. Dalam permainan ini, hasil Ghost memperoleh Intangibility.'],
 ['mummy','Mummy','Jenis Lelembut Impor dalam katalog permainan. Hasilnya memperoleh Sand Manipulation.']
];
export const elfTypes = [
 ['high-elf','High Elf','Salah satu jenis Elf dengan jalur power suci. Hadiah mengikuti hasil roda tematiknya.'],
 ['dark-elf','Dark Elf','Jenis Elf dengan jalur power kutukan. Rujukan namanya tidak otomatis menambahkan seluruh kemampuan dari franchise lain.'],
 ['forest-elf','Forest Elf','Jenis Elf yang langsung memperoleh Forest Control. Power ini dicatat sebagai kemampuan milik karakter.'],
 ['sea-elf','Sea Elf','Jenis Elf yang bercabang menjadi Putri Duyung atau Atlantean Warrior. Hadiah mengikuti cabang yang benar-benar terpilih.'],
 ['blood-elf','Blood Elf','Jenis Elf dengan jalur power bertema darah. Kendali dan batasnya mengikuti definisi power terpilih.'],
 ['fey-elf','Fey Elf','Jenis Elf yang menentukan salah satu dari empat musim. Summer, Autumn, Winter, dan Spring mengarahkan tema kemampuan berbeda.'],
 ['shadow-elf','Shadow Elf','Jenis Elf yang langsung memperoleh Shadow Manipulation. Nama Shadow Elf tidak menambahkan kemampuan lain di luar grant permainan.'],
 ['astral-elf','Astral Elf','Jenis Elf yang langsung memperoleh Astral Projection. Power tersebut tetap memakai mastery karakter yang berlaku.']
];
export const machines = [
 ['android','Android','Jenis Machine dengan bentuk android dan jalur Android Power. Power mengikuti hasil roda, bukan semua kemampuan android sekaligus.'],
 ['cyborg','Cyborg','Jenis Machine yang menggabungkan tubuh dengan komponen mesin. Jalurnya membuka satu Cyborg Weapon dan bonus Intelligence sesuai resepnya.'],
 ['mecha','Mecha','Jenis Machine yang memilih satu model mecha. Model terpilih menentukan paket permainan yang dicatat.'],
 ['transformer','Transformer','Jenis Machine yang memilih satu mode kendaraan. Kemampuan Vehicle Shifting mengikuti hasil bentuk yang ditentukan.'],
 ['nanobot','Nanobot','Jenis Machine berbasis kumpulan robot kecil. Versi permainan memperoleh Shapeshifting.'],
 ['ai','AI','Jenis Machine dengan keberadaan digital. Versi permainan memperoleh Digital Being dan bonus Intelligence dari eventnya.'],
 ['household-appliance','Household Appliance','Jenis Machine berupa satu peralatan rumah tangga hasil roda. Benda terpilih memperoleh satu power terkait yang sangat lemah.']
];
export const cosmic = [
 ['ultraman','Ultraman','Ultraman adalah pahlawan dari Land of Light dalam karya Tsuburaya, dikenal melindungi Bumi dan memakai serangan energi. Dalam Roda Kekacauan, ia menjadi pilihan Cosmic Warrior dengan power Ultraman Tier 4 dan satu hasil warna.'],
 ['alien-x','Alien X','Salah satu kelompok Cosmic Warrior dalam katalog permainan. Paket terpilih memakai definisi Reality Rewrite, bukan otomatis semua kemampuan atau stat dari karya asal.'],
 ['saiyan','Saiyan','Salah satu kelompok Cosmic Warrior yang merujuk Dragon Ball. Power dan bonus mengikuti paket Saiyan dalam Roda Kekacauan.'],
 ['lantern-corps','Lantern Corps','Kelompok Cosmic Warrior yang memilih satu cincin Lantern. Cincin terpilih menentukan power dan paket hasilnya.'],
 ['silver-surfer','Herald of Galactus / Silver Surfer','Kelompok Cosmic Warrior bertema herald Galactus dalam katalog permainan. Hadiah mengikuti paket terpilih dalam Roda Kekacauan.'],
 ['saint-seiya','Saint Seiya','Kelompok Cosmic Warrior yang memilih satu armor Saint. Armor terpilih menentukan grant Cosmic Armor dan tiernya.']
];
export const mechanics = [
 ['archetype','Archetype','Jalur peran yang dapat membuka event dan bonus setelah rangkaian ras selesai. Karakter hanya memakai hasil yang cocok dengan tubuhnya; beberapa ras melewati tahap ini.'],
 ['backstory','Backstory','Latar kisah hasil roda yang menjadi konteks narasi karakter. Pengaruh mekanik hanya berlaku bila dicatat dalam resep Backstory tersebut.'],
 ['size','Size','Ukuran tubuh yang ditentukan melalui jalur ukuran yang sesuai dengan identitas karakter. Transformasi atau nama franchise tidak otomatis menggantikan hasil Size.',['Ukuran tubuh']],
 ['stat','Stat akhir','Strength, Speed, Durability, Intelligence, dan Fight memakai raw 0–9 sebelum modifier. Nilai final boleh negatif atau lebih dari 9, dan ditampilkan persis tanpa dipotong.'],
 ['power-tier','Power Tier','Tingkat potensi intrinsik power dari Tier 1 sampai 5. Tier berbeda dari Power Mastery dan tidak otomatis menentukan tinggi stat karakter.',['Tier']],
 ['power-mastery','Power Mastery','Karakter memakai satu dasar Power Mastery bersama untuk seluruh power, dengan modifier sesuai sumbernya. Tanpa power, tahap ini dilewati; Power Mastery tidak membuka Enchant.'],
 ['weapon-mastery','Weapon Mastery','Setiap senjata milik karakter memiliki mastery sendiri. Modifier diterapkan pada senjata yang sesuai, lalu pemeriksaan Enchant dilakukan pada tahap yang ditetapkan.'],
 ['enchant','Enchant','Efek tambahan pada senjata yang lolos syarat mastery akhir dan slot yang cocok. Enchant tidak diberikan oleh Power Mastery.'],
 ['weakness','Weakness','Kelemahan yang mengikuti kondisi atau penalti resepnya. Hasil tanpa weakness tambahan tidak menghapus kelemahan yang sudah dimiliki.',['Kelemahan']],
 ['title','Title','Gelar penutup yang dipilih dari kandidat sesuai karakter dan sejumlah gelar receh. Nama gelar biasanya hanya lore; hadiah hanya ada bila resep hidden event menyatakannya.'],
 ['none','None','Hasil tanpa tambahan dari roda yang sedang dijalankan. Power, senjata, kelemahan, dan hasil tahap sebelumnya tetap tersimpan sesuai aturan masing-masing.'],
 ['roda-kekacauan','Roda Kekacauan','Tahap event dengan tujuh hasil: Chaos Low, Medium, High; Divine Low, Medium, High; dan None. Efek lanjut mengikuti resep hasil terpilih; sebagian detail Chaos masih dalam peninjauan desain.'],
 ['lucky-number','Lucky Number','Mode Gambler yang memilih satu angka 0–9 sebagai angka keberuntungan. Setiap hasil spin stat atau mastery yang benar-benar cocok memberi +1 ke lima main stat pada perhitungan akhir.'],
 ['all-in','All In','Mode Gambler yang memutar satu main stat, lalu memakai angka itu sebagai dasar main stat lainnya. Modifier tiap stat tetap diproses sesuai sumbernya.'],
 ['double-or-nothing','Double or Nothing','Mode Gambler dengan hasil Double atau Nothing setelah setiap putaran main stat. Yang digandakan atau dijadikan nol adalah dasar hasil raw, bukan seluruh bonus akhir.'],
 ['high-roller','High Roller','Mode Gambler yang membatasi roda stat pada dua angka tertinggi dan dua terendah. Bonus akhir tetap mengikuti aturan modifier.']
];
export const editorialPolicy = {
 dedicated: 'Ras dan subjenis penting, rujukan makhluk atau karakter, Archetype, power terdefinisi, serta mekanik khusus mempunyai halaman sendiri.',
 inline: 'Angka hasil, ukuran dalam cm/m, nomor episode, benda sehari-hari, dan gelar yang hanya kosmetik cukup ditulis dalam konteksnya.',
 excluded: 'Nama yang telah dihapus dari roster, proposal hadiah yang belum diterima, dan kandidat yang tidak terpilih tidak diperlakukan sebagai hasil karakter.'
};

// Local editorial translations keep the public glossary readable in Indonesian.
// The canonical definitions and reward hooks remain unchanged in the source project.
export const powerSummaries = {
 'shrek-power':'Setiap hasil spin receh yang sah pada tahap berikutnya menambah +1 pada lima main stat melalui aturan Shrek Power yang berlaku.',
 'earth-dive':'Bergerak melalui tanah yang sesuai dengan batas kemampuan. Power ini tidak memberi kebebasan menembus semua jenis benda.',
 'animal-command':'Memengaruhi hanya jenis hewan yang terikat pada sumber pemberian power. Kemampuan ini tidak otomatis memanggil hewan, menjadikannya milik pengguna, atau memberi pasukan.',
 'alchemy':'Mengubah bahan yang tersedia dan cocok melalui alkimia dalam batas permainan. Kemampuan ini tidak mencipta dari ketiadaan, menciptakan kehidupan secara otomatis, atau menjamin keabadian.',
 'sound-manipulation':'Mengendalikan suara dalam batas kemampuan yang ditetapkan. Power ini tidak otomatis memberi kutukan atau menjamin kemenangan.'
};
