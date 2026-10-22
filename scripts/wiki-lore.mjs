// Brief, newly authored world notes. These are narrative adaptations, never rewards.
// Specific franchise credits require a recorded design reference or an explicit
// editorial theme credit; ordinary fantasy motifs are not assigned a false author.
const notes = new Map();
function add(text){for(const line of text.trim().split('\n')){const [id,...parts]=line.split('|');if(notes.has(id))throw new Error('Duplicate lore: '+id);notes.set(id,parts.join('|').trim());}}

add(`
human|Di antara makhluk yang lahir dari sihir, manusia membawa sesuatu yang sederhana: pilihan. Kisah mereka dimulai dari jalan yang berani diambil.
goblinoid|Perkemahan Goblin, Orc, dan Troll jarang sunyi. Ada yang sibuk mencari kedudukan, ada yang hanya ingin bertahan sampai esok.
dwarf|Bunyi palu dan roda gigi mengisi bengkel Kurcaci. Dwarf mempercayai hasil tempa, sementara Gnome selalu punya rancangan yang belum selesai.
centaur|Dua bentuk bertemu dalam satu perjalanan. Langkah Centaur membawa watak hewan asalnya, tetapi kisahnya tetap milik sang pengelana.
slime|Makhluk yang tampak seperti genangan ini sulit dinilai dari penampilan. Di dalam tubuh lunaknya, setiap jenis menyimpan cara hidup yang berbeda.
anime-lineage|Satu dunia bisa diceritakan dari banyak sudut. Roda memilih genre dan tempat seseorang dalam cerita, lalu membiarkan perjalanan itu terbuka.
elf|Hutan, laut, bayangan, dan langit meninggalkan jejak yang berbeda pada Elf. Satu nama keluarga menyimpan banyak cara memandang dunia.
beastfolk|Di balik wajah humanoid, Siluman membawa jejak seekor hewan. Naluri dan kehidupan sosialnya bertemu dalam identitas yang sama.
lelembut|Ada nama yang dibisikkan setelah lampu padam. Lelembut mengumpulkan sosok-sosok itu dalam satu halaman, dari cerita kampung hingga fantasi undead.
elemental|Bagi Elemental, alam terasa dekat dengan dirinya sendiri. Api, air, tanah, atau angin menjadi bahasa yang paling dikenalnya.
golem|Tubuh Golem mengingat bahan yang membentuknya. Retak batu, kilau kristal, atau tumpukan sampah memberi setiap wujud kesan tersendiri.
machine|Di sini, pertanyaan tentang kehidupan juga terdengar dari mesin. Ada yang menyerupai manusia, ada yang masih tampak seperti barang di dapur.
fae|Peri datang dengan janji, unsur alam, pemulihan, atau mahkota. Keajaiban kecil di tepi cerita dapat menjadi awal sebuah takdir.
legendary-warrior|Nama lama memperoleh kehidupan baru melalui reinkarnasi. Warisan seorang pahlawan menjadi titik awal, sementara perjalanan berikutnya masih harus ditulis.
mythical-beast|Makhluk yang dahulu tinggal dalam dongeng kini mendapat lembar identitas. Setiap bentuk membawa bayangan legenda yang melahirkannya.
symbiote|Dua kehidupan berbagi satu tubuh. Kerja sama dan perebutan kendali membuat hubungan inang dengan Symbiote selalu terasa dekat sekaligus asing.
demon|Abyssal Axiom adalah halaman tentang ambisi, godaan, dan kejatuhan. Iblis, Setan, dan Pendosa menempuh jalan berbeda di bawah nama yang sama.
heavenly-principle|Di bawah Heavenly Principle, kekuatan bertemu tanggung jawab. Ada yang membawa konsep besar, ada yang cukup menjaga keyakinan dalam hidup sehari-hari.
cosmic-warrior|Cerita kepahlawanan meluas sampai ke bintang. Cosmic Warrior membawa motif cahaya, energi, cincin, dan armor dari dunia-dunia media yang berbeda.
raksasa|Ketika bayangan tubuh menutupi jalan, orang lebih dulu melihat ukurannya. Di balik skala Raksasa, identitas asalnya masih menyimpan kisah sendiri.
hybrid|Dua garis asal bertemu tanpa harus menjadi sama. Hybrid hidup dengan warisan yang kadang saling melengkapi, kadang menuntut kompromi.
primordial|Nama-nama Primordial mengingatkan pada awal segala sesuatu. Adaptasi mereka membawa tema penciptaan, kekosongan, dan makhluk pertama ke dunia roda.
high-elf|Cahaya dan ketelitian memberi High Elf kesan anggun. Dalam catatan dunia ini, sihir suci menjadi warna jalannya.
dark-elf|Dark Elf berjalan di sisi cerita yang lebih muram. Kutukan memberi sihirnya tema yang berbeda dari kerabat yang mencari cahaya.
forest-elf|Forest Elf memandang hutan sebagai lingkungan hidup, bukan latar perjalanan. Akar dan daun menjadi bagian dari bahasanya.
sea-elf|Di bawah permukaan, jalur Sea Elf berpisah antara nyanyian dan tradisi prajurit. Laut menjadi rumah bagi dua kisah yang berbeda.
blood-elf|Merah darah menjadi motif yang kuat pada adaptasi Blood Elf ini. Keindahan dan bahaya hadir dalam warna yang sama.
fey-elf|Fey Elf membawa suasana musim pada dirinya. Hangat, gugur, dingin, dan tumbuh kembali menjadi empat wajah satu perjalanan.
shadow-elf|Shadow Elf akrab dengan tempat yang dilewati pandangan orang lain. Bayangan memberi kisahnya ruang yang tenang dan samar.
astral-elf|Astral Elf menatap langit seperti sebuah jalan. Proyeksi Astral memberi perjalanan batinnya tema yang melampaui tubuh.
android|Wajah yang menyerupai manusia tidak selalu dibuat dari daging. Android membawa pertanyaan lama tentang kehendak ke dalam tubuh rakitan.
cyborg|Tubuh Cyborg menyimpan dua jenis riwayat: yang hidup dan yang dirakit. Sambungan logam menjadi bagian dari kisah pribadinya.
mecha|Rangka besar dan gerak mesin memberi Mecha kehadiran yang sulit diabaikan. Modelnya menentukan corak kisah yang dibawa.
transformer|Sebuah kendaraan dapat menyimpan identitas lain di balik bentuknya. Transformer membuat perjalanan dan perubahan wujud terasa seperti satu cerita.
nanobot|Sesuatu yang tampak utuh dapat tersusun dari banyak bagian kecil. Nanobot memberi perubahan bentuk nuansa kerja sama dalam skala mungil.
ai|AI tinggal di tempat yang tidak selalu memiliki pintu atau jendela. Identitas digitalnya membuat wadah dan keberadaan menjadi bagian penting kisah.
household-appliance|Tidak semua tokoh fantasi lahir dengan pedang. Sebagian masih sibuk memasak nasi atau memastikan lantai tetap bersih.
demon-lord|Raja Iblis Agung membawa ambisi yang lebih besar dari dirinya. Di belakang nama megah itu, pengikut dan pilihan kekuatan membentuk jalannya.
iblis|Iblis berada di antara dorongan dosa dan kekuatan infernal. Jalan yang dipilih membuat godaan itu memperoleh wajah yang berbeda pada tiap karakter.
fallen-angel|Fallen Angel membawa dua warna yang sulit dipisahkan: cahaya yang pernah dekat dan bayangan yang kini mengikutinya.
setan|Setan adalah persimpangan empat bentuk godaan dan kelicikan. Succubus, Ifrit, Asura, dan Imp memberi cabang ini wajah masing-masing.
pendosa|Pendosa mulai dari kelemahan yang sangat manusiawi. Dalam kisah roda, satu dorongan dapat menjadi tema kekuatan sekaligus cermin dirinya.
god|God membawa sebuah Concept sebagai pusat identitasnya. Kebesaran nama itu mengundang kisah tentang pengaruh, pengikut, dan tanggung jawab.
demigod|Demigod berdiri di antara yang biasa dan yang ilahi. Sebuah Concept memberi arah, tetapi perjalanan pribadinya tetap harus ditempuh.
angel|Angel memberi kisah ini wajah bersayap dan bercahaya. Kekuatan yang dibawanya menjadi ekspresi peran, bukan seluruh isi legenda.
utusan-tuhan|Seorang utusan membawa pesan yang lebih besar dari dirinya. Dalam adaptasi ini, Concept menjadi tema amanah yang menyertai perjalanannya.
pemuka-agama|Pemuka Agama berada dekat dengan harapan orang banyak. Kisahnya bertumpu pada keyakinan, tanggung jawab, dan pilihan yang harus dijalani.
orang-saleh|Orang Saleh menemukan makna dalam hubungan yang dijaga sehari-hari. Komunikasi dengan Tuhan menjadi motif spiritual dalam adaptasi dunia ini.
goblin|Goblin memandang perkemahan sebagai tempat kesempatan. Duduk di kursi bos atau berdiri sebagai kacung memberi awal cerita yang sangat berbeda.
orc|Bagi Orc, peran di kelompok menentukan cara ia dikenal. Di tengah barisan, setiap pilihan hidup meninggalkan julukan dan tanggung jawab.
troll|Troll membawa kisah tubuh yang harus menghadapi gangguannya sendiri. Daya tahan dan kesulitan menjadi dua sisi perjalanan itu.
dwarf-type|Dwarf mempercayai benda yang lahir dari pekerjaan teliti. Armor yang dikenakannya terasa seperti catatan bengkel yang dibawa ke medan perjalanan.
gnome|Gnome selalu melihat kemungkinan di balik baut yang longgar. Gadget berikutnya sering dimulai dari pertanyaan kecil yang tidak mau berhenti.
fairy-parents|Fairy Parents mendengar harapan yang tidak sempat terucap. Keajaiban mereka memberi tema tentang keinginan dan arti sebuah permintaan.
element-pixie|Element Pixie membuat alam terasa dekat dan lincah. Satu elemen memberi warna pada cara ia hadir di dalam cerita.
healer-fairy|Healer Fairy datang ketika perjalanan menyisakan luka. Kehadirannya memberi jeda lembut di antara kisah-kisah yang keras.
fairy-king|Mahkota Fairy King membawa beban selain kilau. Keajaiban dan kepemimpinan bertemu pada sosok yang menjadi pusat perhatian para Peri.
putri-duyung|Nyanyian Putri Duyung memberi lautan suara yang mudah dikenang. Dalam kisah ini, keindahan dan daya tarik mengalir bersama.
atlantean-warrior|Atlantean Warrior membawa citra prajurit dari dunia bawah laut. Senjata dan sikapnya memberi Sea Elf corak yang lebih tegas.
succubus|Succubus membuat perhatian terasa seperti undangan. Pesona Hasrat memberi ceritanya tema godaan yang sulit dibaca dari penampilan saja.
ifrit|Ifrit hadir dengan tema api dan kehendak yang menyala. Nyala itu memberi bentuk pada kisahnya di cabang Setan.
asura|Asura membawa wajah amarah dalam pertempuran. Berserk menjadi bahasa ketika dorongan hati terasa lebih keras dari kata-kata.
imp|Imp memilih tempat kecil dalam cerita besar. Kelicikan dan Invisibility membuat kehadirannya mudah terlewat sampai orang menyadari akibatnya.
slime-biasa|Slime Biasa memulai cerita dengan tubuh sederhana. Wujud jelly-nya membuat jalan menuju sebuah peran terasa sedikit lebih aneh.
acid-slime|Genangan Acid Slime memberi kesan yang lebih tajam daripada kelihatannya. Tema asam mewarnai tubuh lunak yang mudah diremehkan.
poison-slime|Poison Slime membawa tema racun dalam tubuh yang tenang. Bahayanya diceritakan melalui sifatnya, bukan penampilan yang megah.
healing-slime|Healing Slime memberi bentuk yang tidak lazim pada pemulihan. Sesuatu yang tampak seperti genangan justru hadir sebagai penolong.
metal-slime|Kilau logam membuat Metal Slime berbeda di antara tubuh-tubuh jelly. Lunak dan keras menjadi dua kesan yang berbagi satu wujud.
elemental-slime|Di dalam tubuh Elemental Slime, satu unsur alam mendapat wadah yang lentur. Warna elemennya menjadi petunjuk pertama kisahnya.
pocong|Kain kafan dan langkah melompat memberi Pocong siluet yang segera dikenali. Jalan sepi menjadi panggung kecil bagi rasa takut.
tuyul|Sosok kecil ini muncul dalam cerita tentang uang yang lenyap. Di dunia roda, Tuyul membawa motif pencuri gaib melalui Nyolong.
kuntilanak|Tawa dari tempat yang gelap membuat orang menoleh dua kali. Kuntilanak membawa suasana horor yang akrab dalam cerita rakyat Indonesia.
genderuwo|Siluet besar di balik pepohonan membuat jarak terasa berbeda. Genderuwo memberi kisah ini wajah gelap yang sulit diabaikan.
wewe-gombel|Nama Wewe Gombel membawa suasana cerita malam dan kekhawatiran tentang anak-anak. Adaptasi ini memberi ruang pada motif perlindungan anak.
sundel-bolong|Lubang di punggung memberi Sundel Bolong penampilan yang melekat dalam ingatan. Keanehan fisik itu menjadi pintu masuk kisah horornya.
kuyang|Kuyang membawa citra tubuh yang terpisah dari bentuk manusia biasa. Organ Control memberi adaptasinya kesan ganjil dan menyeramkan.
leak|Leak datang dari ranah kisah mistis yang tidak selesai dalam satu penjelasan. Adaptasinya menjaga suasana perubahan dan rahasia.
palasik|Palasik memberi kisah horor wajah yang terlepas dari tubuh. Head Detachment menjadi motif utama pada lembar dunia ini.
banaspati|Di tengah gelap, api dapat terasa seperti sesuatu yang mengamati. Banaspati membawa nyala itu sebagai wajah horornya.
jenglot|Benda kecil yang tampak ganjil dapat menyimpan cerita besar. Jenglot membawa suasana misteri dan pesugihan ke dalam arsip.
suster-ngesot|Koridor sunyi dan sosok perawat yang merangkak menjadi citra yang sukar dilupakan. Suster Ngesot menempatkan horor di ruang yang biasanya merawat.
skeleton|Tulang yang seharusnya diam kembali menjalani perjalanan. Skeleton membawa pertanyaan tentang kehidupan lama di balik wujud yang tersisa.
vampire|Vampire berjalan bersama tema lapar dan kehidupan yang diambil dari orang lain. Pesona malamnya menyimpan hubungan yang tidak pernah sederhana.
zombie|Zombie memberi tubuh lama sebuah perjalanan yang ganjil. Asal-usulnya membuat setiap sosok memiliki kisah sebelum menjadi undead.
lich|Lich membawa citra undead yang dekat dengan sihir. Dalam arsip ini, tubuh dan kekuatan menjadi bagian dari identitas yang sukar padam.
ghost|Ghost meninggalkan kesan seseorang yang belum sepenuhnya pergi. Kehadiran tanpa tubuh padat memberi kehilangan bentuk yang samar.
mummy|Balutan tubuh dan pasir membawa Mummy ke dalam suasana makam kuno. Adaptasi ini mempertemukan jejak masa lalu dengan fantasi undead.
ultraman|Cahaya dari Land of Light menjadi tanda harapan bagi Bumi. Sosok Ultra membawa citra penjaga yang menghadapi ancaman dari luar dunia.
alien-x|Alien X memberi kisah Cosmic Warrior tema perubahan realitas. Keheningan sosoknya terasa sebanding dengan besarnya gagasan yang dibawa.
saiyan|Saiyan membawa semangat petarung yang selalu mencari tantangan berikutnya. Ki menjadi motif yang menghubungkan tekad dengan gerak tempur.
lantern-corps|Sebuah cincin memberi emosi bentuk yang terlihat. Lantern Corps mengubah kehendak, takut, harapan, dan perasaan lain menjadi tema kepahlawanan kosmik.
silver-surfer|Di antara bintang, seorang herald membawa kabar tentang Galactus. Kilau perak dan Power Cosmic memberi kisahnya keindahan yang muram.
saint-seiya|Konstelasi memberi armor Saint sebuah identitas. Di balik kilau Cloth, tekad petarung menjadi pusat cerita kosmiknya.
archetype-npc|NPC tetap mempunyai hari yang harus dijalani meski cerita besar melewatinya. Kehidupan biasa dapat menyimpan takdir yang tidak terduga.
archetype-pirate|Pirate memandang cakrawala sebagai undangan. Kapal, awak, dan keberanian berlayar memberi petualangannya tempat untuk tumbuh.
archetype-alchemist|Di meja Alchemist, botol yang sama dapat menyimpan harapan atau masalah. Setiap ramuan memberi kisahnya percobaan baru.
archetype-disciple|Disciple memulai dari pelajaran orang lain. Menjadi murid berarti menerima warisan sekaligus mencari cara sendiri untuk memakainya.
archetype-archaeologist|Archaeologist membaca masa lalu lewat benda yang tertinggal. Tulang purba memberi petualangannya hubungan dengan dunia yang sudah berubah.
archetype-slayer|Slayer dikenali dari ancaman yang dipilih untuk dihadapi. Kisahnya terbentuk ketika ketakutan mendapat nama dan seseorang memutuskan mendekat.
archetype-druid|Druid melihat kehidupan liar sebagai kerabat perjalanan. Jalur alam dan perubahan bentuk memberi kisahnya ritme yang mengikuti lingkungan.
archetype-rider|Rider menemukan cerita bersama tunggangannya. Jalan yang sama dapat terasa berbeda ketika ditempuh dengan sahabat berkaki, bersayap, atau beroda.
archetype-goliath|Tubuh besar membuat Goliath mudah terlihat. Cara menghadapi amarah dan kekuatan menentukan kesan yang lebih lama tertinggal.
archetype-gladiator|Gladiator membawa kehidupan arena ke dalam perjalanan. Sorak penonton dan latihan keras meninggalkan jejak pada cara ia bertarung.
archetype-survivalist|Survivalist belajar dari tempat yang tidak ramah. Setiap hari yang berhasil dilewati menjadi bagian dari pengetahuan yang dibawa.
archetype-priest|Priest hadir di antara keyakinan dan kebutuhan orang lain. Pelayanan memberi kisahnya tugas yang tidak selalu terlihat heroik.
archetype-assassin|Assassin bekerja dalam ruang yang jarang disoraki. Kerahasiaan dan ketelitian memberi kisahnya ketegangan sebelum tindakan terjadi.
archetype-cursed|Cursed membawa sesuatu yang tidak dipilihnya sendiri. Kutukan menjadi beban yang ikut berjalan, tanpa harus menjadi seluruh identitasnya.
archetype-equaliser|Equalizer membawa gagasan tentang kesempatan yang diratakan. Dalam dunia penuh perbedaan, ia mengingatkan bahwa keberuntungan mempunyai banyak wajah.
archetype-paladin|Paladin menempatkan sumpah di dekat senjatanya. Ascension memberi jalannya tema tentang perubahan dan tanggung jawab yang makin besar.
archetype-apostle|Apostle berjalan membawa hubungan dengan patron. Kesetiaan dan pilihan pribadi menjadi dua suara dalam kisah yang sama.
archetype-primordial-champion|Primordial Champion membawa jejak kekuatan dari kisah awal dunia. Perannya mempertemukan nama purba dengan perjalanan yang masih baru.
archetype-colossal-warmech|Colossal Warmech memberi medan cerita bunyi langkah mesin besar. Kehadirannya dibaca melalui rangka, perlengkapan, dan skala yang tidak biasa.
archetype-tamer|Tamer membangun kisah lewat hubungan dengan makhluk lain. Kepercayaan memberi persahabatan itu makna di luar sekadar kepemilikan.
archetype-mage|Mage melihat pertanyaan sebagai awal sihir. Pengetahuan, latihan, dan rasa ingin tahu memberi setiap mantera corak pribadi.
archetype-gambler|Gambler memilih hidup dekat dengan hasil yang belum diketahui. Setiap putaran memberi alasan baru untuk berharap atau menyesal.
archetype-resilient|Resilient dikenal karena masih melanjutkan perjalanan. Luka dan kegagalan menjadi riwayat yang dibawa, bukan akhir cerita.
archetype-warlord|Warlord membawa kepemimpinan ke tempat konflik. Nama besarnya juga memuat tanggung jawab terhadap mereka yang berjalan di belakangnya.
archetype-vessel|Vessel menjadi tempat bagi kekuatan yang datang dari luar dirinya. Kecocokan dan identitas membuat hubungan itu lebih rumit dari sebuah hadiah.
archetype-royal|Royal membawa lambang kedudukan ke dalam pergaulan. Mahkota, peran, dan kehendak memberi kuasanya wajah yang berbeda.
archetype-mutant|Mutant hidup dengan perubahan yang membuatnya berbeda. Tubuh menjadi tempat kisah tentang adaptasi dan penerimaan diri.
archetype-hybrid|Dua peran bertemu dalam satu perjalanan. Hybrid Archetype memberi tokohnya kesempatan untuk belajar dari dua cara hidup sekaligus.
archetype|Asal menjawab siapa seorang tokoh, sedangkan Archetype memberi arah perjalanannya. Peran tumbuh dari pilihan yang dijalani.
backstory|Sebelum roda berikutnya bergerak, seseorang telah memiliki masa lalu. Backstory memberi hasil spin tempat untuk menjadi sebuah kisah.
size|Ukuran mengubah cara dunia terlihat dari tubuh seseorang. Pintu, jalan, dan cakrawala menjadi pengalaman yang berbeda pada tiap skala.
stat|Di balik angka terdapat lima sisi kemampuan karakter. Catatan Stat akhir menyimpan hasil perjalanan dengan seluruh perubahan yang benar-benar terjadi.
power-tier|Power Tier menandai besarnya gagasan dalam suatu kemampuan. Cara tokoh menggunakannya tetap menjadi bagian lain dari cerita.
power-mastery|Kekuatan dapat datang mendadak, tetapi penguasaan memberi hubungan yang lebih lama. Power Mastery mencatat sisi itu pada lembar karakter.
weapon-mastery|Senjata menyimpan kebiasaan tangan yang memakainya. Weapon Mastery memberi setiap benda catatan pengalaman sendiri.
enchant|Enchant memberi senjata lapisan cerita tambahan. Benda yang sudah dikenal memperoleh kesan baru melalui pengaruh yang tercatat.
weakness|Tokoh tidak dibentuk oleh kekuatan saja. Weakness memberi perjalanan tempat untuk mengalami hambatan, meminta bantuan, atau mencari cara lain.
title|Sebuah perjalanan akhirnya mendapat nama. Title dapat terdengar megah atau receh, tetapi selalu terasa paling hidup ketika sesuai pemiliknya.
none|Ada putaran yang meninggalkan halaman tetap tenang. None memberi cerita ruang untuk melanjutkan apa yang sudah dimiliki.
roda-kekacauan|Takdir belum selesai ketika kemampuan sudah tercatat. Roda Kekacauan membuka ruang bagi gangguan, berkat, atau jeda yang datang belakangan.
lucky-number|Gambler menyimpan satu angka seperti jimat pribadi. Ketika angka itu muncul kembali, kebetulan terasa mempunyai wajah.
all-in|All In adalah keberanian menaruh arah perjalanan pada satu hasil. Harapan dan kecemasan berkumpul pada momen yang sama.
double-or-nothing|Double or Nothing membuat keputusan sederhana terasa berat. Satu pertanyaan tentang mengambil risiko mengikuti setiap hasil.
high-roller|High Roller memilih hidup di ujung-ujung kemungkinan. Kisahnya jarang terasa biasa karena hasil besar dan kecil sama-sama dekat.
authority-mode|Authority memberi sebuah Concept suara yang tegas dalam cerita. Mode ini menekankan hubungan antara gagasan dan cara ia diberlakukan.
wild-shape|Druid menatap hewan sebagai cara lain mengalami dunia. Wild Shape memberi perubahan bentuk tema yang dekat dengan kehidupan liar.
raw|Raw adalah jejak pertama sebelum perjalanan menambahkan pengaruhnya. Catatan dasar itu menjaga awal cerita tetap dapat dilihat.
modifier|Setiap perubahan mempunyai asal. Modifier mencatat jejak sumber yang ikut membentuk angka pada akhir perjalanan.
gnome-tech|Di bengkel Gnome, alat aneh selalu punya penjelasan yang terdengar masuk akal bagi pembuatnya. Gnome Tech membawa rasa ingin tahu ke medan cerita.
troll-disease|Penyakit Troll memberi kisah ini hambatan dari tubuhnya sendiri. Kondisi permainan tersebut menjadi bagian dari perjuangan, bukan penjelasan medis.
power-stage|Power membuat hal yang mustahil mendapat tempat dalam perjalanan. Tahapnya mencatat kemampuan yang benar-benar masuk ke lembar karakter.
concept|Concept mengangkat sebuah gagasan menjadi tema kekuatan. Kehidupan, waktu, ruang, dan ide lain memberi arah yang berbeda pada kisah.
element|Satu elemen menjadi bahasa pertama bagi jalur elemental. Api, air, tanah, dan angin memberi dunia empat suasana yang mudah dikenali.
seven-deadly-sins|Tujuh Dosa Besar menjadi cermin dorongan yang bisa menyeret seseorang. Adaptasi roda memberi setiap dorongan sebuah tema kemampuan.
takeover|Takeover memberi hubungan Symbiote dan inang sebuah ukuran ketegangan. Pertanyaannya selalu sama: siapa yang sedang memegang kendali?
compatibility|Kekuatan dari luar membutuhkan tempat yang dapat menerimanya. Compatibility memberi hubungan Vessel dengan sumbernya tema kecocokan.
ascension|Ascension menempatkan Paladin di depan sebuah perubahan. Jalan yang terbuka menentukan bentuk pengabdian berikutnya dalam cerita.
berserker|Berserker membawa amarah ke garis depan kisah Goliath. Dorongan yang kuat memberi ketegangan antara tenaga dan kendali diri.
uncontrollable-rage|Ada amarah yang lebih dahulu bergerak daripada pikiran. Uncontrollable Rage memberi perjalanan Berserker sisi yang sulit ditenangkan.
strength|Strength membuat kekuatan tubuh menjadi bagian dari identitas. Dalam cerita, tenaga besar tetap mendapat makna dari cara ia dipakai.
speed|Speed memberi perhatian pada langkah dan tempo. Kadang perbedaan kisah terletak pada siapa yang tiba sedikit lebih dahulu.
durability|Durability menyoroti kemampuan tetap bertahan ketika perjalanan menjadi keras. Ketahanan memberi tokoh waktu untuk melanjutkan cerita.
intelligence|Intelligence membawa ruang bagi pemahaman dan pertimbangan. Pertanyaan yang tepat dapat mengubah cara seseorang menghadapi masalah.
fight|Fight melihat pengalaman bertarung sebagai sesuatu yang lebih luas dari tenaga. Gerak, keputusan, dan latihan bertemu di dalamnya.
anime-mc|MC berada dekat dengan pusat cerita. Perhatian itu memberi petualangan lebih banyak ruang, tetapi belum menentukan bagaimana kisah berakhir.
anime-npc|NPC Anime melihat dunia dari sisi yang sering dilewati tokoh utama. Kehidupan di pinggir cerita tetap menyimpan alasan untuk terus berjalan.
pool-power-holy|Holy Power membawa suasana cahaya, perlindungan, dan pemulihan. Keajaibannya diceritakan lewat kemampuan yang benar-benar terpilih.
pool-power-cursed|Cursed Power menyimpan motif tanda buruk, bisikan, dan kutukan. Setiap pilihan memberi rasa tidak nyaman bentuk yang berbeda.
pool-power-blood|Blood Power menjadikan darah motif bagi kekuatan yang dekat dengan tubuh. Warna merah menghubungkan bentuk, pemulihan, dan kendali.
pool-power-cosmic|Cosmic Power memandang langit sebagai sumber imajinasi. Debu bintang, orbit, dan ruang memberi kemampuan tema yang luas.
pool-power-symbiote|Symbiote Power tumbuh dari citra tubuh yang hidup dan berubah. Sulur, lapisan, dan hubungan antarbagian memberi jalur ini bahasanya sendiri.
pool-power-divine|Divine Power membawa tema berkat, perintah, dan perubahan besar. Kekuatan ilahi mendapat bentuk melalui setiap pilihan yang tercatat.
pool-power-demonic|Demonic Power memberi ambisi dan bayangan citra yang infernal. Dari suara kecil sampai domain besar, setiap kemampuan menyimpan suasana berbeda.
pool-power-angelic|Angelic Power membawa citra suci ke dalam jalan Heavenly Principle. Cahaya menjadi motif yang menyatukan pilihan-pilihan kemampuannya.
`);

add(`
power-invisibility|Invisibility membuat cerita bergantung pada apa yang gagal dilihat. Sosok yang sama meninggalkan kesan berbeda ketika pandangan kehilangan bentuknya.
power-gold-touch|Kilau emas membuat sentuhan terasa seperti janji keberuntungan. Gold Touch membawa tema kekayaan yang begitu dekat dengan sebuah godaan.
power-molecular-manipulation|Benda yang tampak utuh mempunyai susunan yang jauh lebih kecil. Molecular Manipulation memberi perubahan materi bahasa yang teliti dan tersembunyi.
power-fossil-fangs|Taring fosil menjadi pengingat bahwa bumi pernah dihuni pemangsa lain. Fossil Fangs membawa kesan masa purba ke dalam tubuh karakter.
power-bone-armor|Tulang yang dahulu menopang tubuh kini menjadi motif perlindungan. Bone Armor membuat temuan lama terasa dekat dengan kehidupan baru.
power-ancestral-charge|Serudukan membawa kesan hewan besar dari masa yang sudah jauh. Ancestral Charge memberi gerak sederhana bobot sebuah warisan purba.
power-ancestral-constriction|Lilitan menjadi bahasa kekuatan yang sabar dan rapat. Ancestral Constriction mengambil suasananya dari tubuh ular yang meninggalkan jejak dalam temuan.
power-aquatic-adaptation|Air menjadi lingkungan hidup alih-alih sekadar rintangan. Aquatic Adaptation memberi perjalanan tema belajar bertahan di dunia yang berbeda.
power-ancestral-stomp|Satu hentakan mengingatkan pada langkah makhluk besar zaman purba. Ancestral Stomp memberi tanah peran dalam kisah pertempuran.
power-forest-control|Hutan tampak lebih dari kumpulan pohon bagi pemilik kemampuan ini. Forest Control memberi akar dan daun tempat dalam kehendaknya.
power-mermaid-song|Nyanyian dari bawah permukaan memberi laut sebuah suara. Mermaid Song membawa tema daya tarik yang terasa lembut sekaligus sulit diabaikan.
power-decay-manipulation|Gugur dan lapuk juga bagian dari kehidupan. Decay Manipulation memberi perubahan perlahan itu tempat dalam kisah kekuatan.
power-ice-manipulation|Dingin membuat air mengambil bentuk yang tegas. Ice Manipulation membawa suasana musim beku ke dalam gerak dan pilihan karakter.
power-life-manipulation|Pertumbuhan memberi kehidupan ritme yang tidak selalu terlihat. Life Manipulation menjadikan ritme itu motif kekuatan yang dekat dengan alam.
power-shadow-manipulation|Bayangan selalu mengikuti bentuk, tetapi dalam fantasi ia juga bisa menjadi bahasa. Shadow Manipulation memberi gelap sebuah peran yang aktif.
power-astral-projection|Tubuh tetap menjadi titik berangkat bagi perjalanan batin. Astral Projection membawa kisah tentang kesadaran yang menatap dunia dari jarak lain.
power-wish-granting|Sebuah harapan mengungkap hal yang paling diinginkan seseorang. Wish Granting membuat permintaan itu menjadi pusat cerita tentang keajaiban.
power-healing-power|Pemulihan memberi perjalanan kesempatan untuk berlanjut. Healing Power membawa suasana pertolongan pada cerita yang telah meninggalkan luka.
power-shrek-power|Kejadian receh mendapat tempat terhormat dalam kisah Shrek Power. Humor menjadi motif pertumbuhan pada adaptasi yang suka menertawakan kemegahan.
power-rock-manipulation|Batu tampak diam sampai seseorang memberinya arah. Rock Manipulation membawa tekstur keras bumi ke dalam bahasa kekuatan.
power-magma-manipulation|Di bawah kerak yang tenang, panas masih bergerak. Magma Manipulation mengambil suasana dari dunia yang menyala di balik batu.
power-crystal-manipulation|Kristal mempertemukan keteraturan dan kilau. Crystal Manipulation memberi bentuk tajam sebuah kesan indah yang tidak selalu ramah.
power-diamond-manipulation|Berlian membawa citra benda yang kuat sekaligus berharga. Diamond Manipulation membuat kilau itu menjadi tema bentuk dan kendali.
power-trash-manipulation|Barang yang dibuang masih dapat mempunyai peran. Trash Manipulation memberi tumpukan sisa kesempatan menjadi bagian penting cerita.
power-communication-with-god|Dalam adaptasi spiritual ini, komunikasi menjadi tema hubungan dengan yang ilahi. Maknanya bertumpu pada keyakinan tokoh di dalam cerita.
power-earth-dive|Tanah tidak selalu menjadi akhir sebuah jalan. Earth Dive memberi perjalanan motif bergerak melalui lingkungan yang biasanya terasa padat.
power-petrification-curse|Kisah Kutukan Membatu membawa ketegangan ketika gerak berubah menjadi diam. Batu menjadi lambang akibat yang sulit diabaikan.
power-aksara-seal|Aksara memberi bentuk pada sesuatu yang ingin disimpan atau dibatasi. Segel Aksara mempertemukan tulisan dengan suasana sihir.
power-animal-command|Hubungan dengan hewan menjadi pusat Kendali Hewan. Di balik tema pengaruh itu, makhluk yang terikat tetap mempunyai identitas sendiri.
power-lightning-manipulation|Petir mengubah langit dalam sekejap. Lightning Manipulation membawa citra kilat dan ketegangan ke dalam pilihan tempur karakter.
power-alchemy|Alkimia memandang bahan sebagai awal suatu kemungkinan. Di meja kerja, perubahan menjadi kisah tentang pengetahuan dan percobaan.
power-illusion|Mata dapat melihat sesuatu yang berbeda dari keadaan sebenarnya. Illusion memberi cerita ruang bagi keraguan sebelum seseorang mengambil keputusan.
power-inspiration|Satu dorongan dapat membuat perjalanan terasa mungkin lagi. Inspiration memberi keberanian dan fokus tempat yang kecil tetapi berarti.
power-sound-manipulation|Suara memberi tahu dunia bahwa sesuatu hadir. Sound Manipulation menjadikan bunyi bahasa yang dapat membentuk suasana dan tindakan.
power-jump|Jump membuat satu gerak sederhana mendapat sorotan. Dalam kisah Pocong, lompatan juga menjadi bagian dari siluet yang dikenali.
power-nyolong|Nyolong memberi kehilangan kecil suasana yang ganjil. Barang yang lenyap mengingatkan orang pada cerita tentang pencuri yang tidak terlihat biasa.
power-flight|Flight membuka jalan di tempat yang tidak memiliki pijakan. Langit menjadi bagian perjalanan, sementara bumi terlihat dari sudut lain.
power-size-manipulation|Ukuran mengubah hubungan tubuh dengan lingkungannya. Size Manipulation memberi kisah kesempatan melihat benda yang sama sebagai kecil atau besar.
power-child-protection|Child Protection membawa tema menjaga mereka yang rentan. Kemampuan ini memberi kisah horor satu sisi yang dekat dengan kepedulian.
power-mukbang|Mukbang mengambil gagasan makan berlebihan ke panggung fantasi. Adaptasi recehnya memberi rasa lapar sebuah penampilan yang sulit dilupakan.
power-organ-control|Organ Control memberi tubuh kesan yang asing bagi penonton. Bagian yang biasanya tersembunyi menjadi motif horor yang terlihat.
power-head-detachment|Head Detachment membuat citra tubuh manusia terasa tidak utuh. Kepala yang terpisah menjadi pusat keanehan dalam kisah karakter.
power-pesugihan|Pesugihan membawa tema keinginan memperoleh kekayaan lewat hal gaib. Adaptasi ini menjaga suasana pertukaran yang misterius dalam cerita.
power-ngesot|Ngesot memberi perjalanan bentuk gerak yang dekat dengan tanah. Koridor dan langkah orang lain terasa berbeda dari sudut itu.
power-intangibility|Intangibility memberi Ghost cara hadir yang samar. Tubuh dan penghalang menjadi tema tentang jarak antara terlihat dan tersentuh.
power-sand-manipulation|Pasir menghubungkan makam, gurun, dan jejak yang mudah berubah. Sand Manipulation memberi butir-butir kecil peran dalam kisah kekuatan.
power-android-power-negation|Power Negation memberi konflik tema tentang kekuatan yang menemui hambatan. Kehadirannya membuat kemampuan lawan menjadi bagian dari pertanyaan cerita.
power-android-laser-eye|Tatapan mekanis mendapat bahasa berupa berkas cahaya. Laser Eye memberi Android citra yang tajam dan mudah dikenali.
power-android-energy-absorption|Energy Absorption membawa tema mesin yang menerima aliran daya. Serangan energi menjadi bagian dari hubungan antara sumber dan wadah.
power-android-energy-force-field|Force Field memberi perlindungan bentuk yang tidak menyerupai dinding biasa. Cahaya dan batas menjadi motif pada tubuh mekanis.
power-android-magnetism-control|Magnetism Control membuat logam terasa mempunyai arah yang tersembunyi. Tarikan dan susunan memberi kemampuan ini kesan rapi sekaligus ganjil.
power-android-hologram-projection|Cahaya dapat menampilkan bentuk tanpa menjadi benda padat. Hologram Projection memberi mesin tempat dalam cerita tentang gambar dan persepsi.
power-android-sonic-blast|Sonic Blast mengubah suara menjadi motif serangan. Bunyi mesin tidak lagi sekadar latar ketika ia menjadi pusat tindakan.
power-android-electric-discharge|Electric Discharge membawa citra daya yang keluar dari rangka. Percikan memberi mesin sebuah suasana yang selalu terasa tegang.
power-android-receipt-printing|Di tengah petualangan besar, Print Struk masih menanyakan bukti transaksi. Kertas kecil menjadi lelucon tentang teknologi yang sangat praktis.
power-android-disco-lights|Lampu Disko memberi medan cerita suasana pesta yang salah tempat. Kadang kemampuan paling mudah diingat justru yang paling receh.
power-android-autotune-voice|Auto-Tune Voice membuat ucapan terasa seperti pertunjukan. Mesin mendapat gaya berbicara yang sulit terdengar biasa.
power-android-local-hotspot|Hotspot Gratis membawa kebutuhan sehari-hari ke dunia fantasi. Kehadiran Android mendadak terasa berguna bagi orang yang mencari koneksi.
power-digital-being|Digital Being memberi identitas tempat di dalam media digital. Wadah menjadi bagian dari kisah keberadaan, bukan sekadar sebuah alat.
power-appliance-rice-cooker|Masak Nasi mengingatkan bahwa petualangan juga memerlukan makan. Di antara sihir besar, semangkuk nasi hangat tetap mempunyai tempat.
power-appliance-microwave|Angetin Sisa Makan membawa cerita kembali ke meja dapur. Kenyamanan kecil mendapat perhatian di dunia yang sering memikirkan pertempuran.
power-appliance-refrigerator|Dingin-Dingin Kulkas memberi makanan rumah tangga tempat yang sejuk. Keajaiban recehnya terasa dekat dengan kehidupan sehari-hari.
power-appliance-washing-machine|Cuci Baju menyelesaikan masalah yang selalu mengikuti perjalanan. Pahlawan pun akhirnya perlu memikirkan pakaian kotor.
power-appliance-electric-fan|Angin Sepoi memberi udara panas sebuah jeda. Kipas kecil membawa kenyamanan yang lebih akrab daripada badai dalam legenda.
power-appliance-air-conditioner|Ademin Kamar membuat ruang biasa terasa lebih nyaman. Kemampuan ini menemukan kemegahannya sendiri pada siang yang terlalu panas.
power-appliance-vacuum-cleaner|Sedot Debu mengingatkan bahwa lantai jarang bersih dengan sendirinya. Teknologi rumah tangga mendapat peran receh di antara nama-nama besar.
power-appliance-electric-iron|Rapiin Baju memberi pakaian bekas perjalanan penampilan yang lebih tertib. Setrika membawa disiplin kecil yang sering terlupakan.
power-appliance-blender|Ngejus memandang buah dari sisi yang sangat praktis. Dalam dunia roda, bunyi blender tetap boleh mempunyai lembar kisah sendiri.
power-appliance-air-fryer|Goreng Tanpa Minyak memberi dapur satu jalan memasak yang berbeda. Udara panas menjadi motif yang akrab dan receh.
power-appliance-toaster|Panggang Roti membuat pagi biasa terasa lebih siap dimulai. Roti hangat menjadi pusat kisah yang tidak membutuhkan medan perang.
power-appliance-electric-kettle|Rebus Air memberi waktu tunggu yang sederhana arti sendiri. Sepanci air panas dapat menjadi awal minuman dan percakapan.
power-appliance-water-dispenser|Tuang Air membawa kemudahan kecil ke dalam perjalanan. Gelas yang terisi mengingatkan bahwa tidak semua kebutuhan terasa heroik.
power-appliance-hair-dryer|Tiup Rambut memberi angin pekerjaan yang sangat khusus. Sesudah hujan dan petualangan, penampilan masih meminta perhatian.
power-appliance-mixer|Ngaduk Adonan memberi bahan-bahan dapur kesempatan bertemu. Putaran kecilnya terasa akrab di dunia yang dibentuk oleh roda.
power-appliance-electric-oven|Panggang Kue memberi rumah aroma yang menenangkan. Di sini, panas lebih dekat dengan dapur daripada api pertempuran.
power-appliance-induction-stove|Panasin Panci membuat teknologi terasa seperti kebiasaan rumah. Wadah yang cocok menjadi pusat kemampuan yang sangat sederhana.
power-appliance-coffee-machine|Seduh Kopi memberi pagi dan malam panjang sebuah teman. Aroma minuman menjadi warna kecil di antara kisah takdir.
power-appliance-television|Nonton Siaran membuat dunia lain hadir di sebuah layar. Tokoh mekanis ini membawa hiburan ke tempat yang kadang terlalu serius.
power-appliance-robot-vacuum|Bersihin Lantai memberi robot kecil sebuah tugas yang jelas. Perjalanan besarnya mungkin hanya mengitari ruang, tetapi pekerjaan itu tetap selesai.
power-shapeshifting|Shapeshifting memberi tubuh kesempatan untuk tampil berbeda. Bentuk menjadi bagian dari kisah identitas yang belum selalu menetap.
power-vehicle-shifting|Vehicle Shifting membuat kendaraan dan tubuh berbagi cerita. Jalan raya menjadi latar yang berbeda ketika bentuknya dapat berubah.
power-unity-inducement|Unity Inducement membawa motif keselarasan di antara orang-orang yang berbeda. Kerja sama menjadi tema yang mengikat perjalanan bersama.
power-spirit-control|Spirit Control memberi dunia roh tempat dalam kehendak tokoh. Yang tidak terlihat biasa menjadi bagian dari hubungan dan tanggung jawab.
power-purity-power|Purity Power membawa citra bersih dan jernih dalam fantasi. Kemampuannya memberi kisah suasana pemurnian yang lembut.
power-hydra-regeneration|Regeneration mengambil motif tumbuh kembali dari kisah Hydra. Tubuh yang rusak menjadi tempat cerita tentang bertahan dan pulih.
power-animal-transformation|Animal Transformation mempertemukan identitas humanoid dengan hewan asalnya. Perubahan bentuk memberi naluri wajah yang lebih jelas.
power-acid-manipulation|Asam memberi Acid Control citra yang tajam dan korosif. Perubahan bahan menjadi bagian dari suasana kemampuan ini.
power-radiation-manipulation|Radiation Control mengambil tema energi yang tidak mudah dilihat. Fiksi ilmiah memberi sesuatu yang tersembunyi peran dalam konflik.
power-space-adaptation|Space Adaptation membawa kisah hidup ke lingkungan yang sangat asing. Langit tanpa pijakan menjadi tempat ujian perjalanan.
power-poison-manipulation|Poison Control membuat racun menjadi tema yang memerlukan ketelitian. Bahaya yang kecil dapat terasa besar dalam sebuah cerita.
power-battle-instinct|Battle Instinct memberi pengalaman tempur bentuk yang terasa spontan. Tubuh seolah mengingat pelajaran sebelum tokoh sempat menyebutkannya.
power-taming|Taming Power memulai dari hubungan dengan makhluk lain. Latihan dan kepercayaan memberi kerja sama itu kisah yang lebih panjang.
power-concept-life|Kehidupan Concept memandang tumbuh dan pulih sebagai sebuah gagasan. Kehidupan menjadi pusat tema yang lebih luas daripada satu gerak.
power-concept-death|Kematian Concept memberi perhatian pada akhir dan ikatan yang ditinggalkan. Ceritanya bergerak di dekat batas yang membuat hidup berarti.
power-concept-time|Waktu Concept menjadikan urutan dan laju peristiwa sebuah tema kekuatan. Menunggu dan bergerak mendapat makna yang berbeda.
power-concept-space|Ruang Concept memandang jarak sebagai bagian dari gagasan. Tempat yang dekat dan jauh memberi kisahnya hubungan yang tidak biasa.
power-concept-fate|Takdir Concept membawa perhatian pada jalan yang mungkin terjadi. Kemungkinan memberi cerita cabang yang belum dapat dilihat sekaligus.
power-concept-knowledge|Pengetahuan Concept memberi informasi tempat dalam kekuatan. Hal yang diketahui dan hal yang masih samar membentuk arah perjalanan.
power-concept-war|Perang Concept membawa konflik sebagai gagasan utama. Pertempuran menjadi cerita tentang hubungan, tekanan, dan pilihan di medan yang sama.
power-concept-love|Cinta Concept menempatkan ikatan emosional di pusat tema. Perasaan memberi perjalanan hubungan yang tidak selesai dalam satu keputusan.
power-concept-nature|Alam Concept memandang lingkungan sebagai sesuatu yang saling berhubungan. Fenomena yang berbeda memberi satu gagasan banyak wajah.
power-concept-sea|Laut Concept membawa keluasan air sebagai pusat imajinasi. Arus, kedalaman, dan cakrawala memberi kisahnya suasana yang berlapis.
power-concept-storm|Badai Concept mengumpulkan angin dan ketegangan langit dalam satu tema. Perubahan cuaca memberi cerita kehadiran yang sulit diabaikan.
power-concept-light|Cahaya Concept menempatkan terang sebagai gagasan, bukan sekadar kilau. Apa yang terlihat menjadi bagian dari suasana kekuatannya.
power-fire-manipulation|Api membawa hangat dan bahaya dalam nyala yang sama. Fire Manipulation memberi unsur itu tempat dalam kehendak karakter.
power-water-manipulation|Air mengikuti wadah, arus, dan gerak. Water Manipulation memberi kelenturan itu bahasa yang dapat dibawa ke dalam cerita.
power-earth-manipulation|Tanah dan batu memberi dunia pijakan. Earth Manipulation membuat bahan yang terasa tetap itu menjadi pusat tindakan.
power-wind-manipulation|Angin dikenali dari benda yang disentuhnya. Wind Manipulation memberi sesuatu yang tak terlihat cara hadir yang jelas.
power-aura-superioritas|Aura Superioritas membawa kesan bahwa seseorang ingin berada di atas yang lain. Kebanggaan menjadi tema tekanan dalam kisahnya.
power-rampasan-energi|Rampasan Energi memberi keserakahan motif berupa daya yang diambil. Keinginan memiliki lebih banyak terasa dekat dengan setiap tindakan.
power-pesona-hasrat|Pesona Hasrat membuat perhatian menjadi tempat godaan bekerja. Perasaan yang tertarik memberi kisahnya ketegangan yang halus.
power-tiru-skill|Tiru Skill membawa kecemburuan menjadi tema belajar dari orang lain. Teknik yang diamati menjadi cermin dari keinginan untuk menyamai.
power-devour|Devour menempatkan lapar di pusat sebuah kemampuan. Materi dan energi menjadi bagian dari kisah tentang mengambil terlalu banyak.
power-berserk-amuk|Berserk memberi amarah bahasa yang keras dan terbuka. Aura agresifnya membawa suasana ketika perasaan mendahului ketenangan.
power-zona-mager|Zona Mager mengubah kemalasan menjadi motif yang terasa receh. Lingkungan seolah ikut malas ketika kemampuan itu menjadi pusat cerita.
power-royal-authority|Authority pada Royal membawa tema perintah dan kedudukan. Kehendak seseorang menjadi pusat ketegangan tentang kuasa.
power-assassin-kage-bunshin|Kage Bunshin memberi satu sosok citra ramai dalam bayangan. Klon menjadi bagian dari kisah kelicikan dan perhatian yang terpecah.
power-assassin-death-mark|Death Mark membawa pertanda buruk pada satu lawan. Tanda menjadi pusat ketegangan sebelum akibatnya terasa dalam kisah.
power-assassin-presence-concealment|Presence Concealment membuat keberadaan terasa samar. Assassin memberi cerita ketegangan ketika orang tidak yakin siapa yang masih berada di dekatnya.
power-primordial-creation|Creation membawa gagasan bahwa bentuk baru dapat lahir dari kehendak. Kisah awal dunia menjadi motif sebuah tindakan penciptaan.
power-primordial-void-manipulation|Void Manipulation memandang kekosongan sebagai tema yang aktif. Apa yang tidak ada memberi cerita suasana yang luas dan sunyi.
power-primordial-monster-genesis|Monster Genesis membawa motif makhluk yang lahir dari kekuatan penciptanya. Hubungan antara asal dan kendali menjadi pusat kisah.
power-slime-jelly-body|Tubuh Jelly memberi keberadaan bentuk yang lentur dan sederhana. Dunia terasa berbeda ketika tubuh tidak mengikuti garis yang kaku.
power-metal-manipulation|Logam membawa kilau, berat, dan bentuk yang dapat dikerjakan. Manipulasi Logam memberi bahan itu tempat dalam kehendak tokoh.
power-ultraman-power|Energi cahaya dan teknik Ultra memberi kemampuan ini motif seorang penjaga. Kilau yang dikenali membawa semangat tokusatsu ke dalam arsip.
power-cosmic-ki-control|Ki Control mempertemukan tekad dengan citra energi tempur. Gerak seorang petarung menjadi bahasa bagi kekuatan yang dipancarkan.
power-cosmic-solar-empowerment|Solar Empowerment membawa tema kekuatan yang dekat dengan Matahari. Fisiologi Kryptonian menjadi rujukan bagi adaptasi kemampuan ini.
power-cosmic-asgardian-force|Asgardian Force memberi energi tempur citra dunia Asgard. Mitologi yang diolah Marvel menjadi rujukan tematik kemampuan ini.
power-cosmic-lantern-constructs|Kehendak memperoleh bentuk dalam konstruksi cahaya. Energy Constructs membawa cincin Lantern sebagai motif bagi gagasan yang tampak nyata.
power-cosmic-power-cosmic|Power Cosmic membawa keluasan ruang ke dalam gerak seorang herald. Energi dan perjalanan bintang menjadi dua wajah kisahnya.
power-cosmic-cosmo|Cosmo memberi petarung bahasa berupa energi kosmik. Tekad dan citra bintang bertemu dalam motif yang dekat dengan Saint Seiya.
power-cosmic-armor-bronze|Cosmic Armor Bronze memberi perlindungan citra sebuah konstelasi. Kilau kelas Bronze menjadi awal kisah armor pada jalur Saint.
power-cosmic-armor-silver|Cosmic Armor Silver membawa lapisan kilau yang berbeda dalam kisah Saint. Konstelasi tetap memberi bentuk pada identitas armornya.
power-cosmic-armor-gold|Cosmic Armor Gold membawa citra armor emas yang megah. Bintang dan tekad menjadi motif yang menyertai penampilannya.
power-lantern-green-power|Cahaya hijau memberi kehendak bentuk yang tegas. Konstruksi pribadi menjadi cara menceritakan ketetapan hati pemilik cincin.
power-lantern-yellow-power|Cahaya kuning menempatkan rasa takut di pusat perhatian. Lawan menghadapi tema yang dekat dengan apa yang ingin dihindarinya.
power-lantern-red-power|Plasma merah membawa amarah sebagai warna tindakan. Rage Plasma memberi konflik suasana yang panas dan terbuka.
power-lantern-blue-power|Cahaya biru membawa harapan ke tengah perjalanan. Hope Energy memberi dukungan sebuah motif yang tenang dan terang.
power-lantern-orange-power|Cahaya jingga memberi keserakahan bentuk yang terlihat. Avarice Constructs menjadikan keinginan memiliki pusat kisah energi.
power-lantern-indigo-power|Warna indigo mempertemukan emosi dengan peniruan yang terbatas. Emotional Mimicry membawa tema merasakan fungsi dari energi lain.
power-lantern-violet-power|Cahaya violet memberi cinta bentuk berupa ikatan. Love Binding menjadikan hubungan emosional motif yang dapat terlihat.
power-lantern-black-power|Cahaya hitam membawa motif kematian ke dalam energi. Death Energy memberi jalur Lantern suasana yang muram dan ganjil.
power-lantern-white-power|Cahaya putih menempatkan kehidupan di pusat tema. Life Energy membawa suasana pemulihan sebagai lawan dari kisah yang memudar.
power-water-breathing|Water Breathing membuka perjalanan di bawah permukaan. Bernapas memberi tokoh hubungan baru dengan lingkungan air.
power-time-stop|Time Stop memberi satu momen kesan yang terlalu panjang. Dunia seakan menahan napas ketika waktu menjadi pusat kemampuan.
`);

add(`
power-isekai-cheat-vending|Vending Machine Sultan memberi reinkarnasi bentuk yang sangat praktis. Petualangan dunia lain mendadak mempunyai suasana warung otomatis.
power-isekai-cheat-sword|Pedang Hidup menempatkan kesadaran di dalam benda yang biasanya digenggam. Hubungan antara senjata dan pemakai menjadi pusat cerita.
power-isekai-cheat-slime|Predator Adaptif memberi tubuh sederhana citra yang penuh kemungkinan. Rasa ingin bertahan menjadi motif belajar dari apa yang dihadapi.
power-isekai-cheat-spider|Jaring Evolusi membuat tubuh kecil mempunyai jalan perkembangan sendiri. Setiap benang memberi petualangan sudut yang dekat dengan seekor laba-laba.
power-isekai-cheat-pig|Telepati Babi memberi suara batin tempat di balik penampilan yang receh. Komunikasi menjadi awal kisah yang tidak bisa dinilai dari tubuhnya.
power-isekai-cheat-level1|Loot Level 1 Sultan membawa lelucon tentang ukuran kemajuan yang menipu. Angka kecil mendapat cerita yang jauh lebih ramai dari kesan awalnya.
power-isekai-cheat-level2|Level 2 Kebuka Cheat memberi perubahan kecil sebuah kejutan besar. Petualangan mendapat motif ketika batas lama ternyata bukan akhir kemungkinan.
power-isekai-cheat-level99|Hidden Boss Level 99 memberi kekuatan citra yang tidak selalu terlihat dari peran sosial. Tokoh yang terlewat dapat menyimpan pusat cerita sendiri.
power-isekai-cheat-potions|Potion Sesuka Hati membawa harapan dalam bentuk botol. Ramuan menjadi bahasa praktis bagi masalah yang datang di dunia lain.
power-isekai-cheat-gold|Bolak-balik Dunia memberi perjalanan dua tempat untuk pulang. Perpindahan menjadi motif hidup yang menghubungkan kebutuhan dari lingkungan berbeda.
power-isekai-cheat-slimes300|Grind Santai 300 Tahun membawa latihan panjang ke suasana yang tenang. Kebiasaan sehari-hari menjadi motif pertumbuhan yang tidak terburu-buru.
power-isekai-cheat-average|Average Salah Hitung memberi kata biasa sebuah arti yang mengejutkan. Kisahnya bermain dengan harapan tentang hidup yang seharusnya sederhana.
power-isekai-cheat-drugstore|Racik Obat Cheat membawa meja peracik ke dunia fantasi. Botol dan kebutuhan orang sekitar memberi petualangan pekerjaan yang dekat dengan keseharian.
power-isekai-cheat-pharmacy|Farmasi Sihir mempertemukan tema pengetahuan obat dengan keajaiban. Ketelitian menjadi warna kisah yang berpusat pada membantu orang lain.
power-isekai-cheat-cooking|Belanja Online Antar-Dunia membuat persediaan dapur terasa seperti petualangan. Makan bersama memberi dunia lain ruang untuk menjadi akrab.
power-isekai-cheat-bookworm|Knowledge Craft membawa rasa ingin membaca menjadi tema penciptaan. Pengetahuan lama mendapat kesempatan menemukan bentuk baru.
power-isekai-cheat-cleric|Recovery Training menempatkan pemulihan dekat dengan latihan yang tekun. Perjalanan memberi pertolongan suasana yang dibangun sedikit demi sedikit.
power-isekai-cheat-grace|Slime Utility memberi makhluk sederhana pekerjaan yang tidak selalu megah. Kegunaan sehari-hari menjadi pusat cerita yang hangat.
power-isekai-cheat-fluffy|Disayang Makhluk membawa petualangan ke suasana yang lembut. Hubungan dengan makhluk lain menjadi alasan untuk berhenti sejenak dan memperhatikan.
power-isekai-cheat-sweet|Magic Pastry memberi keajaiban aroma dapur. Kue dan rasa manis menjadi motif harapan yang sangat sederhana.
power-isekai-cheat-smartphone|Smartphone Cheat membuat benda sehari-hari ikut menyeberang dunia. Layar kecil memberi kisah fantasi sentuhan yang akrab dan modern.
power-isekai-cheat-deathmarch|EXP Kebanjiran memberi perkembangan tokoh citra yang mendadak ramai. Petualangan membawa tema kemajuan yang sulit terasa biasa.
power-isekai-cheat-magician|Mana Kebanyakan menjadikan tenaga sihir pusat perhatian. Kisahnya bermain dengan kesan bahwa sebuah awal dapat membawa potensi yang tidak terduga.
power-isekai-cheat-summoner|Kontrak Summon membawa perjanjian ke tengah petualangan. Hubungan dengan makhluk yang dipanggil memberi kekuatan sebuah cerita bersama.
power-isekai-cheat-exorcist|Onmyoji Lintas Server membawa tema tradisi pengusiran gaib ke dunia lain. Pengetahuan lama memperoleh panggung yang baru dan asing.
power-isekai-cheat-assassin|Assassin Craft memberi ketelitian tempat di balik petualangan besar. Rancangan dan persiapan membuat tindakan singkat terasa mempunyai riwayat panjang.
power-isekai-cheat-aristocrat|Berkah Kebanyakan membawa hadiah ilahi ke suasana kehidupan baru. Kemegahan menjadi motif yang kadang terasa lebih merepotkan dari perkiraan.
power-isekai-cheat-strongest|Barrier Cheat memberi perlindungan citra yang mengundang pertanyaan. Di balik penghalang, tokoh tetap mencoba memahami tempatnya di dunia.
power-isekai-cheat-8thson|Mana Pewaris Bungsu menempatkan potensi sihir di sudut keluarga yang tidak selalu disorot. Nama kecil mendapat kesempatan menulis jalan sendiri.
power-isekai-cheat-grandchild|Sihir Pakai Logika mempertemukan rasa ingin tahu dengan mantera. Pertanyaan sederhana membuat pelajaran lama terasa berbeda.
power-isekai-cheat-spirits|Resonansi Roh membawa ingatan dan ikatan ke dunia baru. Sesuatu yang samar menjadi tema hubungan yang terus menyertai perjalanan.
power-isekai-cheat-moon|Ruang Saku memberi pengelana gagasan tentang tempat yang dibawa sendiri. Perjalanan mendapat sudut yang terasa seperti rumah kecil.
power-isekai-cheat-skeleton|Knight Spectral menempatkan citra kesatria di balik tubuh tulang. Penampilan yang ganjil membawa tekad yang tetap dekat dengan kepahlawanan.
power-isekai-cheat-realist|Multitasking Kerajaan memberi pemerintahan tempat dalam cerita isekai. Tugas yang bertumpuk membuat kepahlawanan tampak seperti pekerjaan sehari-hari.
power-isekai-cheat-prodigies|Blueprint Genius membawa rancangan cerdas ke lingkungan baru. Pengetahuan menjadi motif untuk melihat kebutuhan dari sudut berbeda.
power-isekai-cheat-villainess|Radar Bad Ending memberi masa depan yang ditakuti tempat dalam perhatian. Tokoh mencoba membaca hidup sebelum cerita memilih arah yang buruk.
power-isekai-cheat-saint|Saint Healing menempatkan pertolongan di tengah kisah dunia lain. Pemulihan menjadi bahasa yang memberi harapan pada orang sekitar.
power-isekai-cheat-ragnarok|Strategi Masa Depan membawa pengetahuan baru ke konflik lama. Sebuah gagasan memberi kepemimpinan kesempatan melihat jalan yang berbeda.
power-isekai-cheat-fruit|Buah Auto-Evolve memberi perubahan citra yang terasa lucu dan aneh. Sesuatu yang dimakan menjadi motif sebuah awal baru.
power-isekai-cheat-company|Kontrak Dungeon membuat petualangan mempunyai suasana pekerjaan. Di balik ruang bawah tanah, urusan perjanjian masih mengikuti tokoh.
power-isekai-cheat-shirohiyo|Skill Bekal Hidup Lama memberi masa lalu kegunaan di kehidupan baru. Pengalaman menjadi barang bawaan yang tidak terlihat.
power-isekai-cheat-mynoghra|RTS Civilization membawa pembangunan peradaban ke dalam cerita isekai. Peta dan keputusan memberi perjalanan skala yang lebih luas.
power-isekai-cheat-uglymug|Build Anti-Standar memberi penampilan yang tidak lazim tempat dalam kisah kekuatan. Tokoh mencari jalan yang tidak mengikuti harapan orang lain.
power-isekai-cheat-evil-lord|Command Imperial membawa tema kekuasaan ke panggung antarbintang. Perintah dan niat pribadi memberi cerita ruang bagi kesalahpahaman.
power-isekai-cheat-beginning|Memori Raja memberi kehidupan baru bayangan sebuah kedudukan lama. Pengalaman yang dibawa bertemu kesempatan untuk memulai lagi.
power-isekai-cheat-water|Water Precision memberi air citra yang teliti. Aliran kecil menjadi bahasa bagi perhatian yang besar pada detail.
power-isekai-cheat-alchemist|Alkimia Cheat memandang bahan biasa sebagai awal perubahan. Dunia baru memberi percobaan tempat yang lebih luas untuk berlangsung.
power-isekai-cheat-journey|Guardian Adventure membawa perlindungan ke perjalanan bersama. Kepedulian memberi petualangan alasan yang dekat dengan keluarga.
power-isekai-cheat-overlord|Overlord Spellcraft membawa citra penguasa sihir ke dunia lain. Mantera menjadi motif kedudukan yang terasa besar dan muram.
power-isekai-cheat-rezero|Return by Death memberi pengulangan suasana yang pahit. Kesempatan lain membawa ingatan tentang jalan yang sudah berakhir.
power-isekai-cheat-konosuba|Steal Cheat memberi petualangan motif kelicikan yang receh. Kejadian kecil dapat menjadi bagian cerita yang paling mudah dikenang.
power-isekai-cheat-mushoku|Sihir Tanpa Chant memberi mantera kesan yang dekat dengan pikiran. Latihan menjadi tema di balik kemudahan yang tampak dari luar.
power-isekai-cheat-tanya|Aerial Spell Combat membawa sihir ke suasana tempur udara. Langit menjadi medan cerita yang penuh gerak dan perhitungan.
power-isekai-cheat-zenshu|Gambar Jadi Nyata menjadikan garis di atas kertas pusat keajaiban. Imajinasi mendapat bentuk dalam tema seorang pembuat gambar.
power-isekai-cheat-problem-children|Gift Breaker membawa hadiah luar biasa ke dalam suasana tantangan. Aturan dan keberanian saling menguji pada setiap pilihan.
power-isekai-cheat-grimgar|Survival Sense memberi dunia asing kesan yang berat dan dekat. Bertahan sehari lagi menjadi pencapaian yang mempunyai cerita sendiri.
power-isekai-cheat-million|Quest Class Adaptation membuat tugas memberi arah pada peran tokoh. Dunia baru terasa seperti rangkaian pertanyaan yang harus dijalani.
power-isekai-cheat-eminence|Atomic Burst membawa citra kekuatan yang dramatis dari balik bayangan. Penampilan dan kehendak memberi adegan tempur kesan yang megah.
power-isekai-cheat-isekai-life|Slime Magic Network menjadikan makhluk kecil bagian dari hubungan sihir. Banyak tubuh sederhana memberi satu perjalanan suasana yang ramai.
power-isekai-cheat-loner|Skill Sisa OP memberi barang yang terlewat kesempatan menjadi berharga. Tokoh yang berjalan sendiri menemukan kegunaan dari pilihan yang tersisa.
power-isekai-cheat-no-game|Game Theory Cheat menempatkan permainan di pusat petualangan. Membaca aturan menjadi bagian dari kisah menghadapi tantangan.
power-isekai-cheat-shield|Shield Evolution memberi perlindungan sebuah jalan perkembangan. Perisai menjadi lambang tokoh yang menempuh kisah dari sisi bertahan.
power-isekai-cheat-instant-death|Instant Death membawa tema akhir yang mendadak ke dunia lain. Besarnya gagasan itu memberi kisah suasana yang sulit terasa ringan.
power-isekai-cheat-cautious|Overprepared Prediction menjadikan persiapan sebuah gaya hidup. Kekhawatiran tentang langkah berikutnya memberi petualangan ritme yang sangat teliti.
power-holy-spark|Holy Spark memberi gelap sebuah titik cahaya kecil. Keajaiban dimulai dari kilau yang sederhana dan dekat.
power-healing-touch|Healing Touch menempatkan pertolongan pada sentuhan. Kedekatan memberi pemulihan suasana yang hangat dan pribadi.
power-purify|Purify membawa motif membersihkan sesuatu yang mengganggu. Kejernihan menjadi bahasa kecil bagi sebuah awal yang lebih tenang.
power-holy-shield|Holy Shield memberi perlindungan bentuk cahaya. Batas terang itu menjadi lambang seseorang yang memilih bertahan.
power-holy-arrow|Holy Arrow membuat energi suci mempunyai arah. Citra anak panah memberi cahaya gerak yang tegas.
power-sacred-flame|Sacred Flame mempertemukan api dengan suasana pemurnian. Nyala menjadi motif yang terasa keras sekaligus suci.
power-sanctuary|Sanctuary memberi pertempuran gagasan tentang tempat berlindung. Di tengah konflik, sebuah zona menjadi alasan untuk mendekat bersama.
power-judgment-bolt|Judgment Bolt membawa citra hantaman yang terdengar seperti putusan. Cahaya suci memberi serangan suasana yang tegas.
power-divine-restoration|Divine Restoration menjadikan pemulihan sebuah adegan yang besar. Harapan muncul di tempat yang sudah terasa berat oleh luka.
power-seraph-form|Seraph Form memberi aura suci sebuah siluet bersayap. Bentuk menjadi bahasa yang terlihat bagi tema kekuatan ini.
power-resurrection|Resurrection membawa cerita ke dekat pertanyaan tentang kesempatan setelah gugur. Pemulihan hidup menjadi tema yang berat dan penuh harapan.
power-divine-miracle|Divine Miracle membawa keajaiban ke skala sebuah medan kisah. Perlindungan dan pemulihan menjadi citra pertolongan yang megah.
power-devils-whisper|Devil’s Whisper bekerja sebagai motif suara yang tidak nyaman. Bisikan kecil memberi perhatian alasan untuk terpecah.
power-hex-mark|Hex Mark membuat kutukan mempunyai tanda yang dapat dikenang. Sebuah jejak di tubuh menjadi pusat kecemasan cerita.
power-infernal-claw|Infernal Claw memberi bayangan bentuk yang tajam. Cakar energi membawa citra serangan dekat yang agresif.
power-hellfire|Hellfire membawa nyala dengan suasana kutukan. Api menjadi motif yang terasa lebih muram daripada kehangatan biasa.
power-life-drain|Life Drain mempertemukan pemulihan dengan sesuatu yang diambil. Kekuatan hidup menjadi pusat hubungan yang tidak seimbang.
power-torment-chains|Torment Chains memberi penderitaan citra berupa rantai. Ikatan membuat ruang gerak menjadi bagian dari ketegangan kisah.
power-nightmare-prison|Nightmare Prison menempatkan rasa takut di dalam persepsi. Penjara yang paling terasa dapat hadir tanpa dinding biasa.
power-demonic-possession|Demonic Possession membawa cerita ke perebutan kendali tubuh. Identitas dan kehendak menjadi dua tema yang sulit dipisahkan.
power-soul-shackles|Soul Shackles memberi ikatan sebuah kedalaman spiritual. Belenggu menjadi citra tekanan yang melampaui gerak tubuh.
power-abyss-domain|Abyss Domain membuat sebuah wilayah mempunyai suasana infernal. Tempat menjadi bagian aktif dalam cerita tentang kutukan.
power-devil-avatar|Devil Avatar memberi kekuatan infernal sosok yang besar. Manifestasi menjadi cara ambisi menampilkan dirinya.
power-infernal-sovereignty|Infernal Sovereignty membawa kuasa sebagai tema medan pertempuran. Bayangan yang tersebar terasa berada dalam satu kehendak.
power-blood-sense|Blood Sense menjadikan jejak darah petunjuk sebuah cerita. Kehadiran yang tertinggal memberi lingkungan suara yang samar.
power-blood-claw|Blood Claw mempertemukan tubuh dengan citra pemangsa. Merah yang mengeras memberi serangan bentuk yang dekat dan tajam.
power-blood-needle|Blood Needle memberi darah bentuk yang kecil dan terarah. Jarum menjadi motif ketelitian dalam kemampuan yang muram.
power-blood-whip|Blood Whip membuat warna merah mengikuti gerak cambuk. Kelenturan dan jangkauan memberi kisahnya kesan yang tegas.
power-blood-shield|Blood Shield menjadikan sesuatu dari tubuh motif perlindungan. Merah yang memadat memberi pertahanan citra yang tidak biasa.
power-crimson-regeneration|Crimson Regeneration membawa pemulihan dekat dengan tema darah. Luka dan daya hidup bertemu dalam warna yang sama.
power-blood-drain|Blood Drain memberi lapar bentuk hubungan dengan tubuh lain. Pemulihan menjadi bagian dari sesuatu yang diambil.
power-crimson-mist|Crimson Mist memberi wujud sebuah suasana berkabut merah. Batas tubuh terasa samar dalam tema perubahan ini.
power-blood-puppetry|Blood Puppetry membuat ikatan darah menjadi motif kendali. Gerak seseorang memberi kisah ketegangan tentang kehendak yang ditarik.
power-blood-plague|Blood Plague membawa kutukan ke suasana ancaman bersama. Warna merah memberi pengaruh buruk itu identitas yang jelas.
power-crimson-legion|Crimson Legion memberi darah citra pasukan yang dibentuk. Banyak konstruksi menjadi ekspresi satu tema tempur.
power-blood-dominion|Blood Dominion menempatkan kendali darah pada skala wilayah. Medan kisah mendapat warna yang terasa mengikuti satu kehendak.
power-cosmic-sense|Cosmic Sense menjadikan langit sumber petunjuk. Arah dan energi memberi perjalanan sebuah suasana antarbintang.
power-cosmic-ray|Cosmic Ray memberi energi ruang bentuk berupa berkas. Sinar terarah membawa citra langit ke dalam tindakan.
power-stardust-manipulation|Stardust Manipulation memberi debu bintang tempat dalam imajinasi. Partikel kecil menjadi motif bentuk yang lebih besar.
power-cosmic-barrier|Cosmic Barrier menjadikan energi langit sebuah batas perlindungan. Ruang terasa mempunyai dinding yang berbeda dari batu.
power-meteor-summon|Meteor Summon membawa citra benda langit yang turun. Langit menjadi bagian dari ketegangan di medan cerita.
power-solar-flame|Solar Flame mengambil suasana dari Matahari. Api dan plasma memberi kemampuan ini kilau yang terasa besar.
power-gravity-manipulation|Gravity Manipulation menjadikan tarikan sebuah tema kekuatan. Hubungan benda dengan pijakannya menjadi pusat kisah.
power-orbital-dominion|Orbital Dominion memandang lintasan sebagai sesuatu yang dapat diceritakan. Gerak melingkar memberi kuasa sebuah bentuk yang rapi.
power-space-fold|Space Fold memberi jarak citra yang bisa dilipat. Tempat-tempat dalam cerita terasa mempunyai hubungan yang tidak biasa.
power-cosmic-time-dilation|Cosmic Time Dilation membuat laju waktu menjadi motif kosmik. Momen yang sama mendapat kesan berbeda dalam domainnya.
power-black-hole-manifestation|Black Hole Manifestation memakai citra tarikan dan gelap dari langit. Pusat yang sunyi menjadi fokus sebuah medan cerita.
power-celestial-forge|Celestial Forge membayangkan proses tempa dalam skala bintang. Energi dan konstruksi memberi penciptaan suasana kosmik.
power-symbiote-tendril-control|Tendril Control memberi tubuh sulur yang bergerak. Hubungan antara pusat dan ujung menjadi bahasa bentuk yang hidup.
power-symbiote-wall-crawl|Wall Crawl membuat permukaan vertikal bagian dari perjalanan. Dinding memberi tubuh Symbiote sudut gerak yang berbeda.
power-symbiote-body-stretch|Body Stretch memberi tubuh citra yang memanjang. Batas bentuk menjadi tema yang lentur dalam kisahnya.
power-symbiote-blade-morph|Blade Morph mempertemukan tubuh hidup dengan ujung yang tajam. Perubahan menjadi motif serangan tanpa benda terpisah.
power-symbiote-shield-morph|Shield Morph memberi biomassa bentuk perlindungan. Lapisan hidup membawa pertahanan suasana yang dekat dengan tubuh.
power-symbiote-organic-web|Organic Web memberi serat hidup pekerjaan sebagai ikatan. Titik yang berbeda menjadi terhubung dalam tema jaring.
power-symbiote-camouflage|Camouflage membuat warna tubuh dekat dengan lingkungan. Penampilan menjadi bagian dari cerita tentang berbaur dan luput dari perhatian.
power-symbiote-sense|Symbiote Sense memberi tubuh hidup tema kewaspadaan. Ancaman terasa seperti petunjuk yang dibaca dari lingkungan dekat.
power-symbiote-venom-spit|Venom Spit membawa zat dari tubuh sebagai motif serangan. Sesuatu yang hidup mempunyai cara sendiri menjaga jarak.
power-symbiote-regeneration|Regeneration pada Symbiote membawa citra tubuh yang memperbaiki bagian rusak. Biomassa memberi pemulihan bahasa yang organik.
power-symbiote-clone|Symbiote Clone memberi satu tubuh citra yang terbagi. Fragmen menjadi tema kerja sama yang masih terikat asalnya.
power-symbiote-hive-link|Hive Link memberi hubungan antarfragmen kesan sebuah percakapan. Banyak bagian terasa dekat melalui koordinasi yang sama.
power-divine-reality-rewrite|Reality Rewrite membawa perubahan keadaan sebagai tema besar. Dunia di dalam domain menjadi tempat gagasan menemukan bentuk baru.
power-divine-decree|Divine Decree memberi perintah suasana yang ilahi. Ucapan menjadi pusat cerita tentang hukum dan kehendak.
power-divine-soul-dominion|Soul Dominion membawa perhatian pada jiwa dan ikatannya. Kuasa memberi hubungan spiritual sebuah tema yang tegas.
power-sacred-sense|Sacred Sense membuat energi suci terasa seperti petunjuk. Kepekaan memberi cahaya tempat dalam pengalaman pribadi.
power-blessed-water|Blessed Water membawa kesucian dekat dengan air minum. Pertolongan sederhana menjadi pusat keajaiban yang tenang.
power-comforting-prayer|Comforting Prayer memberi kegelisahan sebuah jeda. Kata-kata yang menenangkan menjadi motif pertolongan yang dekat.
power-sacred-binding|Sacred Binding mempertemukan energi suci dengan sebuah segel. Batas memberi perlindungan dan kendali bentuk yang jelas.
power-holy-constructs|Holy Constructs memberi cahaya suci bentuk yang sementara. Gagasan menjadi benda dalam suasana keajaiban yang terang.
power-bad-luck|Bad Luck membawa kesialan kecil ke pusat perhatian. Kegagalan sederhana mendapat rasa receh yang sangat akrab.
power-itch-curse|Itch Curse memberi kutukan sebuah gangguan sepele. Rasa gatal menjadi lelucon yang sulit diabaikan oleh pemiliknya.
power-hiccup-hex|Hiccup Hex membuat suasana tegang tersela oleh cegukan. Kutukan kecil memberi drama sebuah ritme yang agak memalukan.
power-stench-curse|Stench Curse memberi kehadiran seseorang jejak yang tidak menyenangkan. Bau menjadi motif receh yang datang lebih dulu daripada percakapan.
power-fear-glare|Fear Glare menjadikan tatapan tempat rasa takut muncul. Mata memberi kisah tekanan tanpa banyak kata.
power-curse-transfer|Curse Transfer membuat kutukan mempunyai tema perpindahan. Beban yang sama memperoleh hubungan baru di antara sasaran.
power-causality-curse|Causality Curse memandang akibat sebagai bagian dari sebuah kutukan. Tindakan memberi kisah pertanyaan tentang apa yang menyusulnya.
power-fate-blight|Fate Blight membawa nasib buruk sebagai tema yang terikat. Jalan tokoh mendapat suasana muram melalui kondisi yang menyertainya.
power-death-hex|Death Hex menempatkan ancaman akhir di dalam sebuah kutukan. Syarat menjadi pusat ketegangan sebelum cerita berubah.
power-eternal-damnation|Eternal Damnation memberi kutukan kedalaman yang spiritual. Jiwa menjadi tempat kisah tentang pengaruh yang sukar dipulihkan biasa.
power-demon-scent|Demon Scent membuat jejak infernal terasa dekat. Lingkungan yang tampak sunyi masih menyimpan petunjuk bagi tokoh.
power-imp-light|Imp Light memberi gelap sebuah lampu kecil bertema neraka. Keajaiban infernal juga dapat mempunyai pekerjaan yang sederhana.
power-sin-taste|Sin Taste membawa dorongan buruk sebagai sesuatu yang terasa dekat. Godaan mendapat tempat dalam kepekaan pribadi tokoh.
power-hell-voice|Hell Voice memberi suara citra Iblis. Penampilan lewat bunyi membuat ucapan biasa mempunyai suasana yang muram.
power-demon-skin|Demon Skin memberi kulit sebuah kesan yang keras. Tubuh menjadi tempat perlindungan infernal menampilkan dirinya.
power-infernal-body|Infernal Body membawa kekuatan infernal ke dalam wujud tubuh. Penampilan menjadi ekspresi kapasitas yang dimiliki tokoh.
power-demonic-regeneration|Demonic Regeneration memberi pemulihan warna infernal. Tubuh yang terluka tetap menjadi pusat cerita tentang bertahan.
power-shadow-army|Shadow Army menjadikan bayangan citra sebuah barisan. Manifestasi sementara memberi medan cerita suasana yang ramai dan gelap.
power-demonic-domination|Demonic Domination membawa tema kehendak yang menekan orang lain. Pikiran menjadi tempat ketegangan tentang kendali.
power-soul-contract|Soul Contract memberi perjanjian kedalaman yang supernatural. Jiwa menjadi motif bagi ikatan yang memerlukan aturan.
power-infernal-reality|Infernal Reality membuat perubahan realitas terasa muram. Domain infernal menjadi tempat gagasan baru memengaruhi keadaan.
power-sin-authority|Sin Authority membawa dorongan dosa sebagai tema konseptual. Pengaruhnya diceritakan melalui hubungan antara keinginan dan kuasa.
power-abyss-genesis|Abyss Genesis memberi penciptaan suasana infernal. Materi dan manifestasi menjadi motif bentuk yang lahir dari domainnya.
power-absolute-protection|Absolute Protection membawa perlindungan sebagai sebuah aturan. Cerita bertumpu pada domain dan syarat yang memberi aturan itu tempat.
power-rebirth-grace|Rebirth Grace menempatkan kelahiran ulang di dekat tema anugerah. Sebuah akhir memberi kisah ruang untuk membayangkan awal berikutnya.
`);

export const loreNotes=notes;

const source=(label,url)=>({label,url,kind:'inspiration'});
const primary={
 ultraman:source('Tsuburaya Productions · Ultraman','https://tsuburaya-prod.com/heroes/ultraman'),
 lantern:source('DC · Green Lantern','https://www.dc.com/characters/green-lantern'),
 seiya:source('Toei Animation · Saint Seiya','https://www.toei-animation.com/catalog/saint-seiya/'),
 surfer:source('Marvel · Heralds of Galactus','https://www.marvel.com/teams-and-groups/heralds-of-galactus'),
 saiyan:source('Dragon Ball Official · Goku / Saiyan','https://en.dragon-ball-official.com/news/01_1748.html'),
 superman:source('DC · Superman','https://www.dc.com/characters/superman'),
 shrek:source('DreamWorks · Shrek','https://www.dreamworks.com/movies/shrek'),
 naruto:source('Naruto Official · Shadow Clone Jutsu','https://naruto-official.com/en/anime/naruto1/list/01_260'),
 local:source('UNESA · Nama hantu Indonesia','https://mandarin.fbs.unesa.ac.id/post/terjemahan-nama-nama-hantu-indonesia-ke-dalam-bahasa-mandarin'),
 vending:source('Yen Press · Reborn as a Vending Machine','https://yenpress.com/series/reborn-as-a-vending-machine-i-now-wander-the-dungeon'),
 sword:source('Seven Seas · Reincarnated as a Sword','https://sevenseasentertainment.com/series/reincarnated-as-a-sword-light-novel/')
};
const credit=(text,kind='theme',sources=[])=>({text,kind,sources});
const recorded=(text,...sources)=>credit(text,'recorded',sources);
const roleThemes={
 npc:'Peran pendukung dalam permainan dan penceritaan.',pirate:'Kisah pelaut, bajak laut, dan petualangan laut.',alchemist:'Motif alkimia dan peracik ramuan dalam fantasi.',disciple:'Kisah guru, murid, dan pewarisan ilmu.',archaeologist:'Arkeologi, fosil, dan imajinasi tentang fauna purba.',slayer:'Motif pemburu ancaman dalam cerita fantasi.',druid:'Motif penjaga alam dan perubahan bentuk dalam RPG.',rider:'Kisah pengelana dan hubungan dengan tunggangan.',goliath:'Motif petarung besar dan jalur amarah dalam fantasi.',gladiator:'Citra petarung arena, diolah sebagai peran permainan.',survivalist:'Kisah bertahan hidup dan adaptasi terhadap lingkungan.',priest:'Motif pemuka spiritual dalam fantasi.',assassin:'Kisah penyusupan dan pembunuh tersembunyi; power supernatural merupakan adaptasi permainan.',cursed:'Motif kutukan dan beban yang diwarisi dalam fantasi.',equaliser:'Gagasan meratakan kesempatan, dirumuskan dalam sistem Roda Kekacauan.',paladin:'Motif kesatria bersumpah dan kekuatan suci dalam RPG.',apostle:'Motif utusan atau pengikut patron dalam fantasi.', 'primordial-champion':'Motif wakil kekuatan purba dalam mitologi dan fantasi.', 'colossal-warmech':'Fiksi ilmiah mecha dan mesin perang berukuran besar.',tamer:'Kisah penjinak dan persahabatan dengan makhluk lain.',mage:'Motif penyihir dan pembelajaran sihir dalam fantasi.',gambler:'Bahasa risiko dan keberuntungan, diadaptasi menjadi mode permainan tanpa uang nyata.',resilient:'Kisah keteguhan dan tokoh yang terus bertahan.',warlord:'Citra pemimpin pasukan dalam kisah konflik.',vessel:'Motif wadah bagi entitas atau kekuatan lain dalam fantasi.',royal:'Citra kedudukan kerajaan, dipadukan dengan jalur bidak dalam desain permainan.',mutant:'Fiksi perubahan tubuh dan adaptasi yang tidak biasa.',hybrid:'Gabungan dua peran dalam sistem Roda Kekacauan.'
};
const raceThemes={
 human:'Manusia sebagai titik awal petualangan dalam fantasi.',goblinoid:'Goblin, Orc, dan Troll dalam fantasi umum; keluarga ini merupakan pengelompokan permainan.',centaur:'Motif makhluk gabungan manusia–hewan; versi roda memperluas bentuk hewan yang dapat dipilih.',slime:'Monster tubuh lunak dalam fantasi dan RPG.', 'anime-lineage':'Anime, terutama penceritaan genre dan posisi MC/NPC.',beastfolk:'Motif manusia–hewan dan Siluman; gabungan versi Roda Kekacauan.',lelembut:'Cerita rakyat Nusantara dan motif undead dalam fantasi.',elemental:'Personifikasi unsur alam dalam fantasi elemental.',golem:'Motif konstruksi yang hidup dalam fantasi; bahan dan hadiah diramu untuk sistem roda.',machine:'Robot, kecerdasan buatan, dan tubuh mekanis dalam fiksi ilmiah.',fae:'Dongeng Peri dan keajaiban kecil dalam fantasi.', 'legendary-warrior':'Tokoh legenda, sejarah, dan mitologi; jalur Impor juga memakai rujukan tokoh yang tampil dalam Fate.', 'mythical-beast':'Makhluk dari cerita rakyat dan mitologi Lokal maupun Impor.',symbiote:'Fiksi tentang organisme yang berbagi tubuh dengan inang; sumber franchise khusus belum dicatat dalam desain.',demon:'Motif infernal, godaan, dan dosa dalam fantasi; Abyssal Axiom adalah pengelompokan permainan.', 'heavenly-principle':'Motif ilahi dan spiritual dalam fantasi; Heavenly Principle adalah pengelompokan permainan.', 'cosmic-warrior':'Rujukan media yang dicatat: Ben 10, Ultraman, Dragon Ball, DC, Marvel, dan Saint Seiya.',raksasa:'Motif sosok berukuran besar dalam dongeng dan fantasi.',hybrid:'Penggabungan dua identitas dalam desain Roda Kekacauan.',primordial:'Tokoh awal penciptaan dari berbagai mitologi, diadaptasi menjadi katalog permainan.'
};
const powerThemes={
 'abyssal-axiom':'Motif tidak terlihat dan kelicikan dalam fantasi infernal.', 'alchemist-events':'Fantasi transmutasi dan perubahan bahan.', 'archaeologist-events':'Fosil dan fauna purba, diolah menjadi kemampuan Roda Kekacauan.', 'elf-events':'Fantasi alam, musim, bayangan, dan perjalanan astral.', 'fairy-events':'Dongeng pengabul harapan dan fantasi pemulihan.', 'golem-events':'Fantasi kendali bahan; versi receh juga memakai benda sehari-hari.', 'heavenly-principle-events':'Motif hubungan spiritual dalam fantasi; adaptasi permainan, bukan ajaran agama.', 'legendary-hero-events':'Kemampuan tematik yang diramu untuk tokoh Reinkarnasi Pahlawan Legendaris; bukan klaim kemampuan tokoh sejarah.', 'lelembut-events':'Motif horor dan bentuk tubuh dari cabang Lelembut; power diramu untuk permainan.', 'machine-events':'Fiksi ilmiah tubuh mekanis dan teknologi rumah tangga.', 'mythical-beast-events':'Motif makhluk mitologis dari katalog Mythical Beast.', 'siluman-events':'Fantasi perubahan antara wujud humanoid dan hewan.', 'survivalist-events':'Fantasi adaptasi, bahaya lingkungan, dan insting tempur.', 'tamer-events':'Motif hubungan penjinak dengan makhluk lain.', 'universal-concept-wheel':'Personifikasi gagasan seperti kehidupan, waktu, atau takdir dalam fantasi.', 'universal-element-wheel':'Motif kendali api, air, tanah, dan angin dalam fantasi elemental.', 'universal-sin-wheel':'Motif tujuh dosa sebagai tema karakter; nama dan power merupakan adaptasi Roda Kekacauan.', 'royal-events':'Fantasi perintah dan dominasi kehendak pada jalur Royal.', 'assassin-events':'Fantasi Assassin; kemampuan supernatural tidak berasal dari fakta kelompok sejarah.', 'primordial-events':'Motif penciptaan, kekosongan, dan makhluk awal dalam mitologi dan fantasi.', 'main-power-wheel':'Kemampuan umum fantasi yang diadaptasi untuk katalog Roda Kekacauan.', 'video2-race-imports':'Fantasi tubuh Slime dan adaptasi media pada katalog Cosmic Warrior.'
};
const poolThemes={holy:'Fantasi cahaya suci, pemulihan, dan perlindungan.',cursed:'Fantasi kutukan, tanda buruk, dan pengaruh infernal.',blood:'Fantasi sihir darah dan motif vampirik.',cosmic:'Fiksi kekuatan kosmik dengan citra bintang, orbit, ruang, dan waktu.',symbiote:'Fantasi biomassa, organisme inang, dan tubuh yang berubah.',divine:'Fantasi kekuatan ilahi, berkat, dan hukum supernatural.',demonic:'Fantasi infernal, jiwa, godaan, dan kekuasaan.',angelic:'Fantasi malaikat, cahaya suci, dan perlindungan.'};

export function enrichLore(entries,{isekai,raceResearch,cosmicResearch}){
 const byId=new Map(entries.map(e=>[e.id,e]));
 const overrides=new Map();
 const assign=(ids,c)=>ids.forEach(id=>overrides.set(id,c));
 const researchSource=(id)=>{const s=raceResearch.sources.find(s=>s.id===id);if(!s)throw new Error('Missing inspiration source '+id);return source(s.publisher+' · '+s.title,s.url);};
 assign(['elf','high-elf','dark-elf','forest-elf'],recorded('Dungeons & Dragons (Wizards of the Coast); jenis dan tema Elf dicatat dalam riset desain. Jalur power di sini merupakan adaptasi Roda Kekacauan.',researchSource('elf-dnd-lineages')));
 assign(['sea-elf','fey-elf','shadow-elf'],recorded('Dungeons & Dragons: Sea Elf, Eladrin, dan Shadar-kai. Fey Elf dan Shadow Elf merupakan nama adaptasi pada desain ini.',researchSource('elf-dnd-multiverse')));
 assign(['astral-elf'],recorded('Astral Elf dari Dungeons & Dragons: Spelljammer. Proyeksi Astral merupakan paket adaptasi permainan ini.',researchSource('elf-dnd-astral')));
 assign(['blood-elf'],recorded('Blood Elf / Sin’dorei dari World of Warcraft (Blizzard Entertainment). Jalur Blood Power merupakan adaptasi Roda Kekacauan.',researchSource('elf-warcraft-blood')));
 assign(['gnome','gnome-tech'],recorded('Gnome perancang dalam Dungeons & Dragons dan tema mekanis Mechagon dari World of Warcraft. Gadget roda merupakan rancangan permainan sendiri.',researchSource('gnome-dnd-lineage'),researchSource('gnome-warcraft-mechagon')));
 assign(['dwarf','dwarf-type'],recorded('Dwarf dalam fantasi RPG, dengan Dungeons & Dragons sebagai rujukan yang dicatat dalam desain.',researchSource('size-dwarf-dnd-2014')));
 assign(['ultraman','power-ultraman-power'],recorded('Ultraman — Tsuburaya Productions. Cahaya dan teknik Ultra menjadi rujukan; paket warna dan stat mengikuti desain roda.',primary.ultraman));
 const alien=cosmicResearch.sources.find(s=>s.id==='alien-x');
 assign(['alien-x'],recorded('Alien X dari Ben 10 (Cartoon Network). Reality Rewrite adalah adaptasi kemampuan untuk sistem ini.',source('Cartoon Network · Rujukan Alien X',alien.url)));
 assign(['saiyan','power-cosmic-ki-control'],recorded('Saiyan dan Ki dari Dragon Ball. Paket kemampuan ini merupakan adaptasi pada katalog Cosmic Warrior.',primary.saiyan));
 assign(['lantern-corps','power-cosmic-lantern-constructs',...entries.filter(e=>e.id.startsWith('power-lantern-')).map(e=>e.id)],recorded('Lantern Corps dan spektrum emosi dari DC. Warna memberi rujukan tema; efek dan tier disusun untuk Roda Kekacauan.',primary.lantern));
 assign(['silver-surfer','power-cosmic-power-cosmic'],recorded('Silver Surfer, para Herald of Galactus, dan Power Cosmic dari Marvel.',primary.surfer));
 assign(['saint-seiya','power-cosmic-cosmo','power-cosmic-armor-bronze','power-cosmic-armor-silver','power-cosmic-armor-gold'],recorded('Saint Seiya: Cosmo, Cloth, dan motif konstelasi. Kelas armor dan tier merupakan adaptasi permainan.',primary.seiya));
 assign(['power-cosmic-solar-empowerment'],recorded('Superman / Kryptonian dari DC; definisi power tetap ada dalam katalog walau ras tersebut telah keluar dari roster Cosmic Warrior.',primary.superman));
 assign(['power-cosmic-asgardian-force'],recorded('Asgard dan Odinpower dari Marvel / Thor. Definisi power tetap tersimpan; sumber ini tidak mengaktifkan kembali ras yang telah dihapus.'));
 assign(['power-shrek-power'],recorded('Shrek — DreamWorks Animation, dipadukan dengan humor receh. Comedy Ascension dan bonusnya adalah mekanik Roda Kekacauan.',primary.shrek));
 assign(['power-assassin-kage-bunshin'],credit('Rujukan tema: teknik klon bayangan dari Naruto. Versi Assassin di sini merupakan adaptasi fantasi, bukan kemampuan ninja sejarah.','theme',[primary.naruto]));
 for(const o of isekai.wheel.outcomes){
  if(!o.referenceTitle||!byId.has('power-'+o.powerRef))throw new Error('Missing isekai lore reference '+o.id);
  const links=o.id==='isekai-cheat-vending'?[primary.vending]:o.id==='isekai-cheat-sword'?[primary.sword]:[];
  overrides.set('power-'+o.powerRef,recorded(o.referenceTitle+'. Judul ini dicatat sebagai inspirasi Cheat Skill dalam desain; kemampuan dan batasnya merupakan adaptasi Roda Kekacauan.',...links));
 }
 const localIds=['pocong','tuyul','kuntilanak','wewe-gombel','sundel-bolong','suster-ngesot'];
 assign(localIds,credit('Cerita rakyat dan horor Indonesia; versi sosok serta power diolah untuk Roda Kekacauan.','theme',[primary.local]));
 for(const e of entries){
  if(!notes.has(e.id))throw new Error('Write brief lore before publishing: '+e.id);
  e.lore=notes.get(e.id);e.loreKind='adaptation';
  let c=overrides.get(e.id);
  if(!c&&e.category==='archetype')c=credit(roleThemes[e.id.replace(/^archetype-/,'')]);
  if(!c&&e.category==='race'){
   const parent=e.related.find(id=>raceThemes[id]);
   c=credit(raceThemes[e.id]||raceThemes[parent]||'Motif makhluk, tubuh, dan kehidupan dalam fantasi; diadaptasi untuk Roda Kekacauan.');
  }
  if(!c&&e.category==='folklore')c=credit(['skeleton','vampire','zombie','lich','ghost','mummy'].includes(e.id)?'Motif undead dalam horor dan fantasi; paket sosok disusun untuk Roda Kekacauan.':'Cerita rakyat dan horor Nusantara; power merupakan adaptasi permainan.');
  if(!c&&e.category==='mechanic'){
   if(e.id.startsWith('pool-power-'))c=credit(poolThemes[e.id.slice(11)]+' Kumpulan kemampuan disusun dalam desain Roda Kekacauan.');
   else if(['anime-mc','anime-npc'].includes(e.id))c=credit('Bahasa penceritaan anime dan permainan tentang tokoh utama serta tokoh pendukung.');
   else c=credit('Perumusan sistem Roda Kekacauan dari konvensi permainan karakter dan tema pada jalur terkait.','original');
  }
  if(!c&&e.category==='power'){
   const file=e.definitionFile?.split('/').pop().replace(/-design\.json$/,'');
   c=credit(powerThemes[file]||'Motif kemampuan dalam fantasi; rumusan khusus pada Roda Kekacauan.');
   if(file==='universal-power-wheels'){
    const pool=entries.find(x=>x.id.startsWith('pool-power-')&&x.related.includes(e.id));
    c=credit((pool?poolThemes[pool.id.slice(11)]:'Fantasi kemampuan supernatural.')+' Nama dan cakupan diramu untuk kumpulan universal Roda Kekacauan.');
   }
  }
  if(!c?.text)throw new Error('Write an inspiration credit before publishing: '+e.id);
  e.inspiration=c.text;e.inspirationKind=c.kind;
  for(const s of c.sources)if(!e.sources.some(x=>x.url===s.url))e.sources.push(s);
 }
}
