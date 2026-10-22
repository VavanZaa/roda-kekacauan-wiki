(function () {
  'use strict';
  const ROOT = new URL('.', document.currentScript.src);
  const M = window.WikiModel;
  const catalog = window.WIKI_CATALOG;
  let G;
  const app = document.getElementById('app');
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const asset = value => new URL(M.safeImage(value) || 'assets/mark.svg', ROOT).href;
  const TIKTOK = 'https://www.tiktok.com/@roda_kekacauan';
  const ICONS = {
    arrow: '<path d="M4 8h10m-4-4 4 4-4 4"/>',
    external: '<path d="M9 3h5v5M14 3 7 10M7 3H3v11h11v-4"/>',
    search: '<circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 4 4"/>',
    chevron: '<path d="m6 3 5 5-5 5"/>',
    copy: '<rect x="6" y="6" width="8" height="8" rx="1"/><path d="M10 6V2H2v8h4"/>',
    info: '<circle cx="8" cy="8" r="6"/><path d="M8 7v5M8 4v1"/>'
  };
  const icon = name => `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.arrow}</svg>`;
  const home = (params = '') => new URL('index.html' + (params ? '?' + params : ''), ROOT).href;
  const params = new URLSearchParams(location.search);
  const state = { demo: params.get('demo') === '1', search: params.get('cari') || '', race: params.get('ras') || '', archetype: params.get('role') || '', sort: params.get('urut') || 'latest' };
  const number = n => String(n).replace('.', ',');
  const signed = n => n > 0 ? '+' + number(n) : number(n);
  const statClass = score => score.final < 0 ? 'negative' : score.final > score.raw ? 'boosted' : '';
  const wikiUrl = (id='') => new URL('wiki/' + (id ? id+'/' : ''),ROOT).href;
  const termLink = (value,id) => `<a class="wiki-link" href="${escape(wikiUrl(id))}" title="${escape(G.byId.get(id).summary)}">${escape(value)}</a>`;
  const reference = (value,hint={}) => {const entry=G.resolve(value,hint);return entry ? termLink(value,entry.id) : explain(value);};
  const explain = (value,ids=[],exclude='',entryId) => (G.mentions?G.mentions(value,{currentId:entryId,preferredIds:ids}):G.segments(value,ids,exclude)).map(s=>s.id?termLink(s.text,s.id):escape(s.text)).join('');
  const tags = (values,category) => values.map(value => `<span class="tag">${reference(value,category?{category}:{})}</span>`).join('');
  const demoNotice = '<div class="demo-notice">' + icon('info') + '<span><strong>Mode demo.</strong> Karakter, cerita, dan angka ini hanya contoh tampilan. Belum ada video atau hasil spin nyata untuk entri ini.</span></div>';
  function stateParams() {
    const query = new URLSearchParams();
    if (state.demo) query.set('demo','1');
    if (state.search) query.set('cari',state.search);
    if (state.race) query.set('ras',state.race);
    if (state.archetype) query.set('role',state.archetype);
    if (state.sort !== 'latest') query.set('urut',state.sort);
    return query;
  }
  function linkFor(c) {
    const url = c.status === 'demo' ? new URL('index.html',ROOT) : new URL(`karakter/${c.id}/index.html`,ROOT);
    const query = stateParams();
    if (c.status === 'demo') { query.set('demo','1'); query.set('karakter',c.id); }
    url.search = query.toString();
    return url.href;
  }
  function header(detail = false) {
    const inWiki=/\/wiki(?:\/|$)/.test(location.pathname);
    return `<header class="topbar"><div class="wrap topbar-inner"><a class="brand" href="${escape(home())}" aria-label="Roda Kekacauan, halaman utama"><img src="${asset('assets/logo-roda-kekacauan.jpg')}" alt="" width="48" height="48"><span>RODA KEKACAUAN<small>CATATAN DARI SETIAP PUTARAN</small></span></a><nav class="nav" aria-label="Navigasi utama"><a class="${detail || inWiki ? '' : 'active'}" href="${escape(home())}#arsip">Arsip karakter</a><a class="wiki-nav ${inWiki?'active':''}" href="${escape(wikiUrl())}">Wiki dunia</a><a class="atlas-nav" href="${escape(new URL('atlas/',ROOT).href)}">Atlas visual</a><a class="nav-about" href="${escape(home())}#tentang">Panduan</a><a class="external tiktok" href="${TIKTOK}" target="_blank" rel="noopener noreferrer"><span class="desktop">@roda_kekacauan</span><span class="mobile">TikTok</span>${icon('external')}</a></nav></div></header>`;
  }
  function footer() {
    return `<footer class="wrap footer"><div><a href="${escape(home())}" class="brand">RODA KEKACAUAN</a><small>Putar roda, ciptakan takdirmu.</small></div><span>Arsip dunia & karakter</span><a class="external" href="${TIKTOK}" target="_blank" rel="noopener noreferrer">Kisahnya berlanjut di TikTok ${icon('external')}</a></footer><div id="toast" class="toast" role="status" hidden></div><dialog id="share-dialog" class="dialog"><h2>Bagikan karakter</h2><p>Salin tautan profil ini:</p><input id="share-url" readonly aria-label="Tautan karakter"><button class="button" id="close-share">Selesai</button></dialog>`;
  }
  function options(rows, current, allLabel) {
    return `<option value="">${allLabel}</option>` + [...new Set(rows)].sort((a,b)=>a.localeCompare(b,'id')).map(v=>`<option value="${escape(v)}" ${current === v ? 'selected' : ''}>${escape(v)}</option>`).join('');
  }
  function gallery() {
    const uniqueRaces = new Set(catalog.characters.flatMap(c=>c.races)).size;
    app.innerHTML = header() + `<main id="main"><section class="hero"><div class="wrap hero-inner"><div class="hero-copy"><div class="kicker"><span class="ornament">✦</span> Kumpulan hasil spin & kisah karakter</div><h1>Arsip<br><em>Kekacauan.</em></h1><p>Nama, kekuatan, dan jejak takdir mereka tercatat di sini. Buka lembar karakter untuk membaca hasil akhir dari setiap putaran.</p><div class="hero-actions"><a class="button" href="#arsip">Buka arsip ${icon('arrow')}</a><button class="text-button" id="hero-demo">Lihat contoh lembar karakter ${icon('chevron')}</button></div></div><div class="hero-seal"><div class="seal-ring"><img src="${asset('assets/logo-roda-kekacauan.jpg')}" alt="Logo Roda Kekacauan: wajah menyala di dalam roda berwarna perunggu" width="200" height="200"></div><p>PUTAR RODA, CIPTAKAN TAKDIRMU.</p><span>FANTASY CHARACTER ARCHIVE</span></div></div><div class="wrap folio-line"><span>RODA KEKACAUAN / ARSIP DUNIA</span><span>${catalog.characters.length} KARAKTER · ${uniqueRaces} RAS TERCATAT</span></div></section><div class="wrap archive-layout"><aside class="archive-index" aria-label="Daftar isi"><div class="index-label">Daftar isi</div><a class="index-link active" href="#arsip"><span>I</span> Karakter</a><a class="index-link" href="#tentang"><span>II</span> Panduan arsip</a><a class="index-link" href="${escape(wikiUrl())}"><span>III</span> Wiki dunia</a><a class="index-link" href="${escape(new URL('atlas/',ROOT).href)}"><span>IV</span> Atlas visual</a><div class="index-note"><span class="ornament">✦</span><p>Setiap lembar menyimpan identitas, stat, perlengkapan, dan riwayat spin.</p></div><a class="index-tiktok" href="${TIKTOK}" target="_blank" rel="noopener noreferrer">Saksikan putarannya ${icon('external')}<small>@roda_kekacauan</small></a></aside><section class="archive" id="arsip" aria-labelledby="archive-title"><div class="section-heading"><div><div class="chapter">BAGIAN I · KOLEKSI</div><h2 id="archive-title">Lembar karakter</h2><p>Pilih nama untuk membuka catatan lengkapnya.</p></div><span class="folio-number" aria-hidden="true">I</span></div><div class="mode-switch" aria-label="Pilih arsip"><button id="live-mode" aria-pressed="${!state.demo}">Karakter dipublikasikan</button><button id="demo-mode" aria-pressed="${state.demo}">Contoh tampilan</button></div><div id="notice">${state.demo ? demoNotice : ''}</div><form class="filters" id="filters" role="search"><div class="filter search-filter"><label for="search">Cari dalam arsip</label><div class="search-box">${icon('search')}<input id="search" type="search" value="${escape(state.search)}" placeholder="Nama, ras, power, episode…" autocomplete="off"></div></div><div class="filter"><label for="race">Ras</label><select id="race"></select></div><div class="filter"><label for="archetype">Archetype</label><select id="archetype"></select></div><div class="filter"><label for="sort">Urutan</label><select id="sort">${[['latest','Episode terbaru'],['name','Nama A–Z'],...M.STAT_IDS.map(id=>['stat:'+id,M.LABELS[id]+' tertinggi'])].map(([id,label])=>`<option value="${id}" ${state.sort === id ? 'selected' : ''}>${label}</option>`).join('')}</select></div></form><div class="result-meta"><span id="results-count" role="status" aria-live="polite"></span><button id="reset" class="text-button" hidden>Hapus filter</button></div><div class="cards" id="cards"></div><div class="page-end" aria-hidden="true"><span></span>✦<span></span></div></section></div><section class="wrap about" id="tentang"><div class="about-intro"><div class="chapter">BAGIAN II · CATATAN PEMBACA</div><h2>Membaca sebuah takdir.</h2><p>Profil adalah catatan hasil spin. Video di TikTok menyimpan prosesnya; arsip ini menyimpan identitas dan hasil akhirnya.</p><a class="external" href="${TIKTOK}" target="_blank" rel="noopener noreferrer">Buka Roda Kekacauan di TikTok ${icon('external')}</a></div><dl class="reading-guide"><div><dt><span>01</span> Stat & modifier</dt><dd>${reference('Raw')} berasal dari skala 0–9. Bonus dan debuff membentuk ${reference('stat akhir')}, yang bisa negatif atau melampaui 9.</dd></div><div><dt><span>02</span> Senjata & kekuatan</dt><dd>Periksa ${reference('Power Mastery')}, ${reference('Enchant')}, dan ${reference('Power Tier')} pada lembar karakter. Setiap senjata mencatat mastery-nya sendiri.</dd></div><div><dt><span>03</span> Jejak putaran</dt><dd>${explain('Hasil roda dan asal modifier dicatat agar perubahan karakter bisa ditelusuri kembali.')}</dd></div></dl></section></main>` + footer();
    document.getElementById('filters').addEventListener('submit',event=>event.preventDefault());
    document.getElementById('search').addEventListener('input',event=>{ state.search=event.target.value; updateResults(); });
    for (const [dom,key] of [['race','race'],['archetype','archetype'],['sort','sort']]) document.getElementById(dom).addEventListener('change',event=>{ state[key]=event.target.value; updateResults(); });
    document.getElementById('reset').addEventListener('click',()=>{state.search='';state.race='';state.archetype='';state.sort='latest';document.getElementById('search').value='';document.getElementById('sort').value='latest';fillFilters();updateResults();});
    document.getElementById('live-mode').addEventListener('click',()=>setMode(false));
    document.getElementById('demo-mode').addEventListener('click',()=>setMode(true));
    document.getElementById('hero-demo').addEventListener('click',()=>{setMode(true);document.getElementById('arsip').scrollIntoView({ behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth' });});
    fillFilters(); updateResults(false);
  }
  function setMode(demo) {
    if (state.demo !== demo) { state.race=''; state.archetype=''; }
    state.demo=demo;
    document.getElementById('live-mode').setAttribute('aria-pressed',String(!demo));
    document.getElementById('demo-mode').setAttribute('aria-pressed',String(demo));
    document.getElementById('notice').innerHTML=demo ? demoNotice : '';
    fillFilters();updateResults();
  }
  function fillFilters() {
    const rows = state.demo ? catalog.demos : catalog.characters;
    document.getElementById('race').innerHTML=options(rows.flatMap(c=>c.races),state.race,'Semua ras');
    document.getElementById('archetype').innerHTML=options(rows.flatMap(c=>c.archetypes),state.archetype,'Semua Archetype');
    // Unknown saved filters remain in state and show no matches; an explicit reset clears them.
    for (const [dom,key] of [['race','race'],['archetype','archetype']]) {
      if (state[key] && ![...document.getElementById(dom).options].some(o=>o.value===state[key])) {
        const option = document.createElement('option'); option.value=state[key];option.textContent=state[key];option.selected=true;document.getElementById(dom).append(option);
      }
    }
  }
  function card(c) {
    const url=escape(linkFor(c));
    return `<article class="card"><a class="portrait-link" href="${url}" aria-label="Buka profil ${escape(c.name)}"><img src="${asset(c.image?.src)}" alt="${escape(c.image?.alt || 'Potret belum tersedia')}" width="640" height="760" loading="lazy"><span class="episode-badge">${c.episode === null ? 'Karakter' : 'EP. '+String(c.episode).padStart(3,'0')}</span>${c.status === 'demo' ? '<span class="demo-badge">Demo</span>' : ''}</a><div class="card-body"><div class="identity-row"><span>${c.races.map(v=>reference(v)).join(' / ')}</span>${c.archetypes.length ? `<span class="dot">·</span><span>${c.archetypes.map(v=>reference(v,{category:'archetype'})).join(' / ')}</span>` : ''}</div><h3><a href="${url}">${escape(c.name)}</a></h3><p class="card-subtitle">${escape(c.title || 'Karakter Roda Kekacauan')}</p><div class="mini-stats" aria-label="Stat akhir">${M.STAT_IDS.map((id,i)=>`<div class="mini-stat"><span>${['STR','SPD','DUR','INT','FGT'][i]}</span><strong class="${statClass(c.stats[id])}">${number(c.stats[id].final)}</strong></div>`).join('')}</div><div class="card-bottom"><span>${escape(c.requestedBy || 'Roda Kekacauan')}</span><a href="${url}" aria-label="Lihat profil ${escape(c.name)}">Lihat profil ${icon('arrow')}</a></div></div></article>`;
  }
  function updateResults(writeUrl = true) {
    const all = state.demo ? catalog.demos : catalog.characters;
    const rows=M.filterCharacters(all,state);
    document.getElementById('results-count').textContent=`${rows.length} dari ${all.length} ${state.demo ? 'contoh karakter' : 'karakter dipublikasikan'}`;
    const hasFilter=Boolean(state.search || state.race || state.archetype || state.sort !== 'latest');
    document.getElementById('reset').hidden=!hasFilter;
    if (rows.length) document.getElementById('cards').innerHTML=rows.map(card).join('');
    else if (all.length) document.getElementById('cards').innerHTML=`<div class="empty"><img src="${asset('assets/mark.svg')}" alt=""><h3>Takdir itu belum ditemukan.</h3><p>Coba nama, ras, atau power lain. Kamu juga bisa menghapus filter untuk melihat semua karakter.</p><button class="button ghost" id="empty-reset">Hapus filter</button></div>`;
    else document.getElementById('cards').innerHTML=`<div class="empty"><span class="empty-folio" aria-hidden="true">✦</span><div class="chapter">ARSIP BELUM TERISI</div><h3>Lembar pertama menunggu.</h3><p>Belum ada karakter yang dipublikasikan. Setelah tampil di TikTok, profilnya akan dicatat di sini bersama potret, stat, dan jejak putarannya.</p><button class="button" id="empty-demo">Buka contoh lembar karakter ${icon('arrow')}</button><small>Contoh memakai data ilustrasi, bukan hasil spin nyata.</small></div>`;
    document.getElementById('empty-demo')?.addEventListener('click',()=>setMode(true));
    document.getElementById('empty-reset')?.addEventListener('click',()=>document.getElementById('reset').click());
    if (writeUrl) {
      try { const url=new URL(location.href);url.search=stateParams().toString();history.replaceState(null,'',url); } catch { /* file previews can restrict history updates */ }
    }
  }
  function statPanel(c) {
    const scoreRows=M.STAT_IDS.map(id=>{
      const s=c.stats[id], delta=s.modifiers.reduce((sum,x)=>sum+x.value,0);
      const base=s.base ?? s.raw;
      return `<tr><td><span class="stat-label">${reference(M.LABELS[id])}</span>${s.rawLabel ? `<span class="raw-label">${escape(s.rawLabel)}</span>` : ''}</td><td>${number(s.raw)}${s.base !== undefined && s.base !== s.raw ? `<span class="raw-label"> · base ${number(base)}</span>` : ''}</td><td>${signed(delta)}</td><td class="final ${s.final<0?'negative':''}">${number(s.final)}</td></tr>`;
    }).join('');
    const sources=M.STAT_IDS.flatMap(id=>c.stats[id].modifiers.map(mod=>`${M.LABELS[id]} ${signed(mod.value)} · ${mod.label}`));
    const max=Math.max(9,...M.STAT_IDS.map(id=>Math.abs(c.stats[id].final)));
    const bars=M.STAT_IDS.map(id=>`<div class="score-chart-row"><span>${M.LABELS[id]}</span><div class="track"><div class="bar ${c.stats[id].final<0?'negative':''}" style="--bar-width:${Math.abs(c.stats[id].final)/max*100}%"></div></div><span>${number(c.stats[id].final)}</span></div>`).join('');
    return `<section class="panel" id="stat"><div class="stat-heading"><h2>${reference('Stat akhir')}</h2><small>Hasil spin + modifier</small></div><table class="score-table"><thead><tr><th scope="col">Stat</th><th scope="col">${reference('Raw')}</th><th scope="col">Bonus</th><th scope="col">Final</th></tr></thead><tbody>${scoreRows}</tbody></table><div class="stat-note">${explain('Hasil raw memakai skala 0–9. Angka final dapat negatif atau lebih dari 9.')}</div>${sources.length ? `<details class="stat-sources"><summary>Asal bonus dan debuff</summary><ul>${sources.map(s=>`<li>${explain(s)}</li>`).join('')}</ul></details>` : ''}<div class="score-chart" aria-hidden="true">${bars}</div><p class="chart-caption">Panjang bar membandingkan besar skor pada karakter ini. Nilai negatif ditandai merah.</p></section>`;
  }
  function masteryDescription(s) {
    const base=s.base ?? s.raw, delta=s.modifiers.reduce((sum,m)=>sum+m.value,0);
    return `${s.rawLabel ? escape(s.rawLabel)+' · ' : ''}raw ${number(s.raw)}${base !== s.raw ? ' · base '+number(base) : ''}${delta ? ' '+signed(delta) : ''} → <strong>${number(s.final)}</strong>`;
  }
  function weaponPanel(c) {
    return `<section class="panel" id="senjata"><h2>Senjata & ${reference('Enchant')}</h2>${c.weapons.length ? c.weapons.map(w=>`<div class="inventory-row"><div class="inventory-title"><span>${reference(w.label)}</span></div>${w.description ? `<p>${explain(w.description)}</p>` : ''}<div class="mastery-pill">${reference('Weapon Mastery')} · ${masteryDescription(w.mastery)}</div>${w.enchantments.length ? '<div class="tags">'+tags(w.enchantments)+'</div>' : '<small>Tidak ada enchant tercatat.</small>'}${w.sources.length ? `<details class="stat-sources"><summary>Asal senjata</summary><ul>${w.sources.map(s=>`<li>${explain(s)}</li>`).join('')}</ul></details>` : ''}</div>`).join('') : '<p>Tidak memiliki senjata yang tercatat.</p>'}</section>`;
  }
  function powerPanel(c) {
    return `<section class="panel" id="kekuatan"><h2>Kekuatan</h2><div class="inventory-row"><div class="eyebrow">${reference('Power Mastery')} bersama</div><div class="mastery-pill">${masteryDescription(c.powerMastery)}</div>${c.powerMastery.modifiers.length ? `<details class="stat-sources"><summary>Asal modifier mastery</summary><ul>${c.powerMastery.modifiers.map(m=>`<li>${escape(m.label)} · ${signed(m.value)}</li>`).join('')}</ul></details>` : ''}</div>${c.powers.length ? c.powers.map(p=>`<div class="inventory-row"><div class="inventory-title"><span>${reference(p.label,{category:'power',definitionId:p.definitionId,definitionFile:p.definitionFile})}</span><span class="tier">Tier ${p.tier}</span></div>${p.description ? `<p>${explain(p.description)}</p>` : ''}<div class="mastery-pill">Mastery · ${masteryDescription(p.masteryOverride || c.powerMastery)}${p.masteryOverride ? ' · khusus power ini' : ''}</div>${p.sources.length ? `<details class="stat-sources"><summary>Asal power</summary><ul>${p.sources.map(s=>`<li>${explain(s)}</li>`).join('')}</ul></details>` : ''}</div>`).join('') : '<p>Tidak memiliki power yang tercatat.</p>'}</section>`;
  }
  function profile(c) {
    state.demo=c.status === 'demo';
    document.title=`${c.name} — Roda Kekacauan`;
    const date=c.publication.publishedAt ? new Date(c.publication.publishedAt).toLocaleDateString('id-ID',{timeZone:'Asia/Jakarta',day:'numeric',month:'long',year:'numeric'}) : null;
    const video=M.tiktokUrl(c.publication.tiktokUrl);
    app.innerHTML=header(true)+`<main id="main" class="wrap"><div class="breadcrumbs"><a href="${escape(home(stateParams().toString()))}#arsip">Arsip karakter</a>${icon('chevron')}<span>${escape(c.name)}</span></div>${state.demo ? demoNotice : ''}<section class="detail-header"><div class="detail-art"><img src="${asset(c.image?.src)}" alt="${escape(c.image?.alt || 'Potret belum tersedia')}" width="640" height="760">${state.demo ? '<span class="demo-badge">Contoh tampilan</span>' : ''}</div><div class="detail-intro"><div class="kicker">${c.episode === null ? 'Karakter Roda Kekacauan' : 'Episode '+String(c.episode).padStart(3,'0')}</div><h1>${escape(c.name)}</h1>${c.title ? `<p class="detail-title">“${escape(c.title)}”</p>` : ''}<div class="detail-meta">${c.requestedBy ? '<span>Spin untuk '+escape(c.requestedBy)+'</span>' : ''}${date ? '<span>'+date+'</span>' : ''}${c.size ? '<span>'+escape(c.size.label)+'</span>' : ''}</div><div class="tags">${tags(c.races)+tags(c.archetypes,'archetype')}</div><div class="detail-actions">${video ? `<a class="button" href="${escape(video)}" target="_blank" rel="noopener noreferrer">Tonton spin di TikTok ${icon('external')}</a>` : `<a class="button" href="${TIKTOK}" target="_blank" rel="noopener noreferrer">Ikuti Roda Kekacauan ${icon('external')}</a>`}<button class="button ghost" id="share">Bagikan profil ${icon('copy')}</button></div></div></section><nav class="sheet-nav" aria-label="Isi lembar karakter"><a href="#stat">Stat</a><a href="#kisah">Kisah</a><a href="#senjata">Senjata</a><a href="#kekuatan">Kekuatan</a><a href="#jejak">Jejak putaran</a></nav><div class="detail-grid"><div>${statPanel(c)}<section class="panel" id="kisah"><h2>Kisahnya</h2><p>${explain(c.backstory || 'Backstory belum ditambahkan.')}</p></section>${weaponPanel(c)}${powerPanel(c)}</div><div><section class="panel"><h2>Identitas & atribut</h2><div class="eyebrow">Ras</div><p>${c.races.map(v=>reference(v)).join(' / ')}</p><div class="eyebrow" style="margin-top:17px">${reference('Archetype')}</div><p>${c.archetypes.length?c.archetypes.map(v=>reference(v,{category:'archetype'})).join(' / '):'Tanpa Archetype'}</p>${c.size ? `<div class="eyebrow" style="margin-top:17px">${reference('Ukuran tubuh')}</div><p>${escape(c.size.label)} <small>· ${escape(c.size.metric)}</small></p>` : ''}${c.attributes.length ? `<div class="tags" style="margin-top:20px">${tags(c.attributes)}</div>` : ''}</section><section class="panel"><h2>${reference('Kelemahan',{category:'mechanic'})}</h2>${c.weaknesses.length ? '<ul class="weakness-list">'+c.weaknesses.map(w=>`<li>${explain(w)}</li>`).join('')+'</ul>' : '<p>Tidak ada kelemahan yang tercatat.</p>'}</section><section class="panel" id="jejak"><h2>Jejak putaran</h2>${c.spins.length ? '<ol class="timeline">'+c.spins.map(s=>`<li><span class="spin-wheel">${explain(s.wheel)}</span><span class="spin-result">${explain(s.result)}</span>${s.note ? `<p class="spin-note">${explain(s.note)}</p>` : ''}</li>`).join('')+'</ol>' : '<p>Riwayat spin belum ditambahkan.</p>'}<div class="journal-meta">${state.demo ? 'Data ilustrasi. Tidak berasal dari generator.' : 'Versi aturan: '+escape(c.provenance.rulesVersion)+'<br>Snapshot: '+escape(c.snapshotId)}</div></section></div></div></main>`+footer();
    document.getElementById('share').addEventListener('click',async()=>{
      const url=linkFor(c);
      if (location.protocol === 'file:' || ['127.0.0.1','localhost'].includes(location.hostname)) { toast('Ini preview lokal. Tautan publik tersedia setelah website diterbitkan.'); return; }
      try { if (!navigator.clipboard) throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(url);toast('Tautan profil disalin.'); }
      catch { const dialog=document.getElementById('share-dialog');document.getElementById('share-url').value=url;dialog.showModal();document.getElementById('share-url').select(); }
    });
    document.getElementById('close-share').addEventListener('click',()=>document.getElementById('share-dialog').close());
  }
  let toastTimer;
  function toast(message) {
    const element=document.getElementById('toast');element.textContent=message;element.hidden=false;
    clearTimeout(toastTimer);toastTimer=setTimeout(()=>{element.hidden=true;},5000);
  }
  function missing() {
    document.title='Karakter tidak ditemukan — Roda Kekacauan';
    app.innerHTML=header(true)+`<main id="main" class="wrap archive"><div class="empty"><img src="${asset('assets/mark.svg')}" alt=""><h1>Karakter belum ditemukan.</h1><p>Profil ini mungkin belum dipublikasikan. Jelajahi arsip untuk melihat karakter yang sudah tersedia.</p><a class="button" href="${escape(home())}">Kembali ke arsip ${icon('arrow')}</a></div></main>`+footer();
  }
  try {
    // A nested page's <base> must not send the keyboard skip link to the homepage.
    const skipLink=document.querySelector('.skip');
    const updateSkipLink=()=>{skipLink.href=location.pathname+location.search+'#main';};
    updateSkipLink();skipLink.addEventListener('click',updateSkipLink);
    // An older cached homepage can still render while a new deployment propagates.
    G=window.GlossaryModel?.create({schemaVersion:1,entries:catalog.wiki||[]})||{byId:new Map(),resolve:()=>null,segments:value=>[{text:value,id:null}]};
    M.validateArchive({schemaVersion:catalog.schemaVersion,characters:catalog.characters});
    M.validateArchive({schemaVersion:catalog.schemaVersion,characters:catalog.demos},{demo:true});
    const wikiRoute=decodeURIComponent(location.pathname).match(/\/wiki(?:\/([^/]+))?(?:\/index\.html|\/)?$/);
    const wikiContext={app,G,catalog,escape,icon,header,footer,home,wikiUrl,termLink,explain,linkFor};
    if(wikiRoute){
      const id=wikiRoute[1];
      if(!id||id==='index.html')window.WikiPages.index(wikiContext);
      else if(G.byId.has(id))window.WikiPages.article(G.byId.get(id),wikiContext);
      else window.WikiPages.missing(wikiContext);
      return;
    }
    const route=decodeURIComponent(location.pathname).match(/\/karakter\/([^/]+)(?:\/index\.html|\/)?$/);
    const requested=route?.[1] || params.get('karakter');
    if (requested) {
      const c=(route ? catalog.characters : state.demo ? catalog.demos : catalog.characters).find(c=>c.id===requested);
      if (c) profile(c);else missing();
    } else if (/\/404\.html$/.test(location.pathname)) missing();else gallery();
  } catch (error) {
    console.error(error);
    app.innerHTML='<main id="main" class="wrap loading"><h1>Arsip belum bisa dibuka.</h1><p>Data karakter memerlukan perbaikan. Silakan kembali lagi nanti.</p></main>';
  }
})();

