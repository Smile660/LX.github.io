'use strict';
const profile = window.PROFILE;
const main = document.querySelector('main');
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Reject executable URLs while allowing local files, anchors and ordinary web links.
function safeURL(value) {
  if (!value || typeof value !== 'string') return '';
  const input = value.trim();
  if (/[\u0000-\u001f\u007f]/.test(input)) return '';
  try { const url = new URL(input, location.href); return ['https:', 'http:', 'file:', 'mailto:'].includes(url.protocol) ? input : ''; } catch { return ''; }
}
function link(label, url, className = '') {
  const checked = safeURL(url);
  if (!checked) return '';
  const external = /^https?:/i.test(checked);
  return `<a class="${escapeHTML(className)}" href="${escapeHTML(checked)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHTML(label)}</a>`;
}
const symbols = {
  location: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  institution: '<path d="m3 8 9-5 9 5M4 21h16M6 9v9m6-9v9m6-9v9M3 8h18"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2"/>',
  scholar: '<path d="m2 8 10-5 10 5-10 5-10-5Zm4 3v6q6 5 12 0v-6M22 8v9"/>'
};
function icon(name) {return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${symbols[name] || symbols.link}</svg>`;}
for (const [id, value] of Object.entries({'author-name':profile.name,'author-role':profile.role,'author-bio':profile.bio,'footer-name':profile.name,'year':new Date().getFullYear(),'updated':profile.updated})) document.getElementById(id).textContent = value;
const advisorEl=document.getElementById('author-advisor');
if(profile.advisor){
  const advURL=safeURL(profile.advisorURL);
  advisorEl.innerHTML=`指导老师：${advURL?`<a href="${escapeHTML(advURL)}" target="_blank" rel="noopener noreferrer">${escapeHTML(profile.advisor)}</a>`:escapeHTML(profile.advisor)}`;
}else advisorEl.remove();
document.getElementById('updated').dateTime = profile.updated;
const avatar = document.getElementById('avatar');
avatar.textContent = profile.initials || profile.name.slice(0,1);
if (safeURL(profile.photo)) {
  const img = new Image(); img.alt = profile.name; img.src = safeURL(profile.photo);
  img.addEventListener('load', () => { avatar.replaceChildren(img); avatar.setAttribute('aria-label', profile.name); });
}
const contacts = [
  ['location', profile.location, ''], ['institution', profile.institution, ''],
  ['email', 'Email', profile.email ? `mailto:${profile.email}` : ''],
  ['scholar', 'Google Scholar', profile.links.scholar], ['link', 'ORCID', profile.links.orcid],
  ['link', 'CV (PDF)', profile.cv], ['link', 'ResearchGate', profile.links.researchgate],
  ['link', 'GitHub', profile.links.github], ['link', 'LinkedIn', profile.links.linkedin]
];
const emailItem=(label,url)=>{const addr=url.replace(/^mailto:/,'');return `<li class="contact-email">${icon('email')}<span class="contact-label">${escapeHTML(label)}</span><div class="email-pop"><p class="email-pop-title">Email</p><p class="email-pop-addr">${escapeHTML(addr).replace('@',' (at) ')}</p><a class="email-pop-btn" href="${escapeHTML(url)}">${icon('email')}<span>Send Email</span></a></div></li>`;};
document.getElementById('author-links').innerHTML = contacts.filter(([type,label,url]) => label && (['location','institution'].includes(type) || safeURL(url))).map(([type,label,url]) => type==='email' ? emailItem(label,url) : `<li>${icon(type)}${url ? link(label,url) : `<span>${escapeHTML(label)}</span>`}</li>`).join('');
const emailLi=document.querySelector('.contact-email');
if(emailLi){
  const setOpen=state=>emailLi.classList.toggle('open',state);
  const hovering=()=>!emailLi.classList.contains('pinned');
  emailLi.addEventListener('mouseenter',()=>{if(hovering())setOpen(true);});
  emailLi.addEventListener('mouseleave',()=>{if(hovering())setOpen(false);});
  emailLi.addEventListener('focusin',()=>{if(hovering())setOpen(true);});
  emailLi.addEventListener('focusout',()=>{if(hovering())setOpen(false);});
  emailLi.addEventListener('click',e=>{
    if(e.target.closest('a'))return;
    setOpen(emailLi.classList.toggle('pinned'));
  });
  emailLi.addEventListener('keydown',e=>{if(e.key==='Escape'){emailLi.classList.remove('pinned');setOpen(false);}});
}
function toggle(buttonId, targetId) {
  const button = document.getElementById(buttonId), target = document.getElementById(targetId);
  button.addEventListener('click', () => { const expanded = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded',String(expanded)); target.classList.toggle('open',expanded); });
}
toggle('menu-toggle','navigation'); toggle('contact-toggle','author-links');
const figure = `<figure class="research-figure"><svg viewBox="0 0 760 190" role="img" aria-labelledby="diagram-title diagram-desc"><title id="diagram-title">研究框架示意图</title><desc id="diagram-desc">光伏、储能、负荷接入配电网，通过协调控制支撑安全运行、公平调节和市场参与。</desc><g font-family="Arial, Microsoft YaHei, sans-serif" text-anchor="middle"><g fill="#fff" stroke="#71858f" stroke-width="1.4"><rect x="18" y="24" width="150" height="40" rx="3"/><rect x="18" y="77" width="150" height="40" rx="3"/><rect x="18" y="130" width="150" height="40" rx="3"/><rect x="286" y="63" width="187" height="68" rx="3"/><rect x="591" y="24" width="150" height="40" rx="3"/><rect x="591" y="77" width="150" height="40" rx="3"/><rect x="591" y="130" width="150" height="40" rx="3"/></g><g fill="none" stroke="#71858f" stroke-width="1.5"><path d="M168 44h52v106h-52m52-53h66m-66 0h-52M473 97h63m55-53h-55v106h55m-55-53h55"/></g><g fill="#425964" font-size="18"><text x="93" y="51">分布式光伏</text><text x="93" y="104">储能系统</text><text x="93" y="157">可调负荷</text><text x="380" y="92" font-weight="600">配电网协调控制</text><text x="380" y="115" font-size="14" fill="#647780">Local sensing · Coordination</text><text x="666" y="51">安全运行</text><text x="666" y="104">公平调节</text><text x="666" y="157">市场参与</text></g></g></svg><figcaption>研究框架：资源协同、运行安全与市场参与</figcaption></figure>`;
function research() {
  const r=profile.research;
  return `<h1>${escapeHTML(r.aboutTitle)}</h1>${r.about.map(t=>`<p>${escapeHTML(t)}</p>`).join('')}<h1>${escapeHTML(r.title)}</h1>${figure}<h2>${escapeHTML(r.heading)}</h2><p class="intro">${escapeHTML(r.intro)}</p><h2>${escapeHTML(r.problemTitle)}</h2><p>${escapeHTML(r.problem)}</p><h2>${escapeHTML(r.approachTitle)}</h2><p>${escapeHTML(r.approach)}</p>${r.topics.map((t,i)=>`<section class="topic"><h3>${i+1}. ${escapeHTML(t.title)}</h3><p><strong>研究问题：</strong>${escapeHTML(t.question)}</p><p><strong>研究方法：</strong>${escapeHTML(t.method)}</p></section>`).join('')}<h2>${escapeHTML(r.openTitle)}</h2><p>${escapeHTML(r.openText)}</p>`;
}
function empty(text) {return `<div class="empty"><p>${escapeHTML(text)}</p></div>`;}
function publications() {
  let year='';
  return '<h1>Publications</h1><p class="small-note">论文与研究成果</p>'+(profile.publications.length?profile.publications.map(p=>{const heading=p.year!==year?`<h2>${escapeHTML(p.year)}</h2>`:'';year=p.year;return `${heading}<article class="record"><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.authors)}</p><p class="meta">${escapeHTML(p.venue)}</p>${p.status?`<span class="tag">${escapeHTML(p.status)}</span>`:''}<p>${escapeHTML(p.summary)}</p><div class="record-links">${link('Paper / PDF',p.paper)}${link('Code',p.code)}</div>${p.bibtex?`<details><summary>BibTeX</summary><pre><code>${escapeHTML(p.bibtex)}</code></pre></details>`:''}</article>`;}).join(''):empty('暂无公开论文。'));
}
function talks(){return '<h1>Talks</h1><p class="small-note">学术报告与会议交流</p>'+(profile.talks.length?profile.talks.map(t=>`<article class="record"><h3>${escapeHTML(t.title)}</h3><p class="talk-field"><strong>Conference:</strong> ${escapeHTML(t.conference)}</p><p class="talk-field"><strong>Location:</strong> ${escapeHTML(t.location)}</p><p class="talk-field"><strong>Type:</strong> 📢 ${escapeHTML(t.type)}</p><p class="talk-field"><strong>Year:</strong> ${escapeHTML(t.year)}</p></article>`).join(''):empty('暂无公开报告信息。'));}
function portfolio(){return '<h1>Portfolio</h1><p class="small-note">研究项目、代码与复现资料</p>'+(profile.projects.length?profile.projects.map(p=>`<article class="record"><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.description)}</p><div>${(p.tags||[]).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div>${link('查看项目',p.url)}</article>`).join(''):empty('暂无公开项目。'));}
const postParagraphs=t=>escapeHTML(t).split('\n\n').map(x=>`<p>${x.trim().replace(/\n/g,'<br>')}</p>`).join('');
const postExcerpt=t=>{const s=String(t).replace(/\s+/g,' ').trim();if(s.length<=120)return s;const cut=s.slice(0,120);const m=cut.match(/.*[。！？；]/);return (m?m[0]:cut)+'…';};
function blog(){return '<h1>Blog Posts</h1><p class="small-note">研究笔记与方法分享</p>'+(profile.posts.length?profile.posts.map((p,i)=>`<article class="record post"><h3><a class="post-title" href="#post/${i}">${escapeHTML(p.title)}</a></h3><p class="meta">${escapeHTML(p.date)}</p><p class="post-excerpt">${escapeHTML(postExcerpt(p.text))}</p><a class="post-open" href="#post/${i}">阅读全文</a></article>`).join(''):empty('研究笔记整理中。'));}
function postPage(p){return `<article class="record post-detail"><h1>${escapeHTML(p.title)}</h1><p class="meta">${escapeHTML(p.date)}</p><div class="post-full">${postParagraphs(p.text)}</div><p class="post-back"><a href="#blog">← 返回 Blog Posts</a></p></article>`;}
function cv(){const c=profile.cvPage;const list=items=>`<ul class="interest-list">${items.map(i=>`<li>${escapeHTML(i)}</li>`).join('')}</ul>`;return `<h1>Curriculum Vitae</h1>${link('下载完整简历（PDF）',profile.cv,'download-link')}<h2>${escapeHTML(c.directionsTitle)}</h2>${list(c.directions)}<h2>${escapeHTML(c.educationTitle)}</h2>${list(c.education)}<h2>${escapeHTML(c.publicationsTitle)}</h2>${c.sections.map(s=>`<h3>${escapeHTML(s.title)}</h3>${list(s.items)}`).join('')}<h2>${escapeHTML(c.awardsTitle)}</h2>${list(c.awards)}`;}
function projects(){const p=profile.researchProjects;return `<h1>${escapeHTML(p.title)}</h1><p class="small-note">${escapeHTML(p.note)}</p>`+(p.items.length?p.items.map(x=>`<article class="record"><h3>${escapeHTML(x.title)}</h3><p class="meta">${escapeHTML(x.funder)} · ${escapeHTML(x.program)} · ${escapeHTML(x.number)}</p><p class="meta">${escapeHTML(x.period)} · ${escapeHTML(x.budget)} · ${escapeHTML(x.role)}</p>${x.status?`<span class="tag">${escapeHTML(x.status)}</span>`:''}</article>`).join(''):empty('暂无公开项目信息。'));}
const pages={research,publications,talks,portfolio,blog,cv,projects};
const titles={research:'What I’m Doing',publications:'Publications',talks:'Talks',portfolio:'Portfolio',blog:'Blog Posts',cv:'Curriculum Vitae',projects:'Projects'};
function render(){
  const hash=location.hash.slice(1); if(hash==='main'){ main.focus(); return; }
  const postMatch=hash.match(/^post\/(\d+)$/), post=postMatch?profile.posts[Number(postMatch[1])]:null;
  if(post){
    main.innerHTML=postPage(post);
    document.title=`${post.title} · ${profile.name}`;
    document.querySelectorAll('.masthead a').forEach(a=>{a.hash==='#blog'?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current');});
  } else {
    const page=Object.hasOwn(pages,hash)?hash:'research';
    main.innerHTML=pages[page]();
    document.title=`${titles[page]} · ${profile.name}`;
    document.querySelectorAll('.masthead a').forEach(a=>{if(a.hash===`#${page}`)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  }
  document.getElementById('navigation').classList.remove('open');
  document.getElementById('menu-toggle').setAttribute('aria-expanded','false');
}
window.addEventListener('hashchange',()=>{render(); if(location.hash!=='#main'){main.focus({preventScroll:true});window.scrollTo(0,0);}});
render();
