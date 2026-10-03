'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];

/* ---------- DATA (verified from README / CV / your design) ---------- */
const NAV=[['work','Work'],['about','About'],['stack','Stack'],['skills','Skills'],['experience','Experience'],['contact','Contact']];
const REPO='https://github.com/AhmerIjaz639/CareerOS-AI';
const PROJECTS=[
 {t:'CareerOS AI',d:'Multi-agent career intelligence platform',cat:'Python · FastAPI · Gemini',st:'Case study →',arch:['Resume + GitHub + job','Specialist agents','Master agent','Score, gaps, roadmap'],link:REPO,
  cs:{Overview:'A platform that gives evidence-based career guidance by analysing a resume, a GitHub profile and target job requirements. Built at the Bano Qabil Hackathon (Alibaba) and selected for the regional level.',Approach:'Five specialised agents: Resume Analyzer, GitHub Analyzer, Job Matcher, Skill Gap Detector and a Master Agent.',Implementation:'FastAPI REST backend with resume upload, the GitHub API as a data source and Google Gemini for the agents.',Result:'A career readiness score, skill-gap analysis and a personalised roadmap.'},stack:['Python','FastAPI','Gemini API','HTML/CSS/JS']},
 {t:'Cybersecurity Labs & CTF Writeups',d:'Linux, Bash, Kali and OverTheWire practice',cat:'Linux · Bash · Security',st:'Case study →',arch:['Kali + Ubuntu VMs','Bandit 12/34','TryHackMe Pre-Security','Public writeups'],link:'https://github.com/AhmerIjaz639/CyberSecurity',cs:{Overview:'Public writeups and hands-on practice from a local VMware lab with Kali Linux and Ubuntu.',Result:'12 of 34 OverTheWire Bandit levels solved. The self-directed bootcamp is currently on Module 4: Networking & Protocols.'},stack:['Linux','Bash','Kali Linux','Wireshark']},
 {t:'Police Station Management System',d:'Python and MySQL management information system',cat:'Python · MySQL',st:'Case study →',arch:['FIR and case tracking','Normalized schema','Parameterized queries','Views, triggers, procedures'],link:'https://github.com/AhmerIjaz639/PoliceStationDBMS',cs:{Overview:'A full-stack MIS for FIRs, staff, funds and case tracking, deployed live for non-technical users.',Implementation:'All database access uses parameterized queries. Credentials are provided through environment variables, never hardcoded.',Result:'A database-backed system with normalized schema, views, stored procedures and triggers.'},stack:['Python','MySQL','SQL']},
 {t:'Cloud-Init / Butane Writeups',d:'Declarative configuration and immutable OS notes',cat:'YAML · Cloud-Init · Butane',st:'Case study →',arch:['users and write_files','packages and runcmd','systemd units','Cloud-Init mapping reference'],link:'https://github.com/AhmerIjaz639',cs:{Overview:'Working examples and notes on Cloud-Init, Butane and Ignition directives.',Result:'Manual Cloud-Init to Butane conversions used to verify understanding.'},stack:['YAML','Cloud-Init','Butane']},
 {t:'Sports Tournament Organizer',d:'Java DSA and OOP tournament system',cat:'Java · DSA · OOP',st:'Case study →',arch:['Queues','Stacks','Linked lists','Scheduling and score tracking'],link:'https://github.com/AhmerIjaz639',cs:{Overview:'A tournament bracket and scheduling system built with queues, stacks and linked lists.',Result:'Modular OOP design for team registration, match scheduling and score tracking.'},stack:['Java','DSA','OOP']},
 {t:'Portfolio & Python Projects',d:'Personal portfolio and Python practice',cat:'HTML · Python',st:'View project →',arch:[],link:'https://github.com/AhmerIjaz639/Python_projects',cs:{Overview:'Personal portfolio site and a collection of Python practice projects.'},stack:['HTML','Python']}];
const SKILLS=[['Python',54],['Java',45],['SQL / MySQL',65],['Linux',56],['Networking',63],['Bash',40],['JavaScript',"learning"],['Node.js',"learning"],['Express.js',"learning"],['Git / GitHub',63],['Kali Linux',48],['Wireshark',42],['Nmap',40],['YAML',30],['Cloud-Init / Butane',43]];
/* [name, related-tags, learning?] */
const MAP={BACKEND:[['Python','api db sec'],['Node.js','api',1],['Express.js','api',1]],DATABASE:[['MySQL','db api sec'],['SQL','db sec']],SYSTEMS:[['Linux','sys sec cloud net'],['Bash','sys sec cloud'],['Networking','net sec sys']],SECURITY:[['Kali Linux','sec net sys'],['Nmap','sec net',1],['Wireshark','sec net',1],['CTF / Labs','sec sys net']],'DEVOPS / CLOUD':[['Git','cloud api'],['Docker','cloud sys',1],['Cloud-Init','cloud sys'],['Butane','cloud sys'],['YAML','cloud']]};
const LAB=[['Linux security automation','Exploring'],['Network scanning','Active · Nmap, Wireshark'],['SOC laboratory','Exploring'],['Cloud-init / Butane','Exploring'],['Operating systems in C · Database systems','Exploring']];
const TL=[['Now','Computer Science','4th semester at COMSATS Lahore.'],['Certified','CCNA','Networking foundation for everything that follows.'],['Ongoing','Backend development','Python, JavaScript, Node.js and Express services with secure database access.'],['Module 4 / 21','Cybersecurity','Self-directed 24-week bootcamp, target March 2027. Bandit 12/34 cleared.'],['Lab','Linux and systems','Kali and Ubuntu environment on VMware.'],['Next','Cloud-native learning','Cloud-Init, Butane and declarative configuration.'],['Public','Open source and community','AI+compassion and IOY ambassador; bootcamp documented openly on GitHub.']];
const CR=[['CCNA','Cisco Networking Academy · 2026 · 71%'],['BS Computer Science','COMSATS University Islamabad, Lahore Campus · 2024 — 2028'],['Inclusive Open Source Community Orientation (LFC102)','The Linux Foundation · 2026'],['Google Crash Course on Python','Coursera · 2024']];
const EXP=[
 {k:'Hackathon · 2026',t:'Bano Qabil Hackathon (Alibaba)',d:'Built CareerOS AI, a multi-agent career intelligence platform, and was selected for the regional level.',pts:['Five specialised agents: Resume Analyzer, GitHub Analyzer, Job Matcher, Skill Gap Detector and a Master Agent','Career readiness score, skill-gap analysis and a personalised roadmap','FastAPI REST backend with resume upload, the GitHub API as a data source and Google Gemini'],big:1},
 {k:'Ambassador',t:'AI+compassion',d:'Serving as a community ambassador.'},
 {k:'Ambassador',t:'IOY',d:'Serving as a community ambassador.'},
 {k:'Open source · 2026',t:'Linux Foundation — LFC102',d:'Completed the Inclusive Open Source Community Orientation, covering community norms and how to contribute to CNCF projects. Open to part-time open-source contribution.'}];
const LINKS=[['Email · ahmerijaz639@gmail.com','mailto:ahmerijaz639@gmail.com'],['LinkedIn','https://www.linkedin.com/in/ahmer-ijaz-08a60237b/'],['GitHub','https://github.com/AhmerIjaz639'],['TryHackMe','https://tryhackme.com/p/ahmerijaz639']];

/* ---------- RENDER ---------- */
$('#nav').innerHTML=NAV.map(n=>`<a href="#${n[0]}">${n[1]}</a>`).join('');
$('#menu').innerHTML=NAV.map((n,i)=>`<a href="#${n[0]}" style="--i:${i}">${n[1]}</a>`).join('');
$('#now').textContent='TCP/IP, DNS and HTTP · Wireshark and Nmap · Cloud-Init and Butane';
$('#skills-grid').innerHTML=SKILLS.map(s=>`<div class="skill rv"><div><span>${s[0]}</span><b>${s[1]}%</b></div><span class="bar"><i style="width:${s[1]}%"></i></span></div>`).join('');
$('#idx').innerHTML=PROJECTS.map((p,i)=>`<li class="rv"><button class="pr" data-i="${i}"><span class="n">0${i+1}</span><span><h4>${p.t}</h4><p>${p.d}</p></span><span class="t">${p.cat}</span><span class="s">${p.st}</span></button></li>`).join('');
$('#map').innerHTML=Object.entries(MAP).map(([c,a])=>`<div class="cat"><h4>${c}</h4>${a.map(t=>`<span class="tk ${t[2]?'l':''}" data-t="${t[1]}">${t[0]}</span>`).join('')}</div>`).join('');
$('#labg').innerHTML=LAB.map((l,i)=>`<article class="ex rv"><span class="lbl">Exp 0${i+1}</span><h4>${l[0]}</h4><span class="lbl">${l[1].replace('Active','<b>Active</b>')}</span></article>`).join('');
$('#tl').innerHTML=TL.map(t=>`<li class="rv"><span class="lbl">${t[0]}</span><div><h4>${t[1]}</h4><p>${t[2]}</p></div></li>`).join('');
$('#cr').innerHTML=CR.map(c=>`<li><h4>${c[0]}</h4><p>${c[1]}</p></li>`).join('');
$('#ex').innerHTML=EXP.map(e=>`<li class="rv ${e.big?'big4':''}"><span class="lbl">${e.k}</span><div><h4>${e.t}</h4><p>${e.d}</p>${e.pts?`<ul>${e.pts.map(x=>`<li>${x}</li>`).join('')}</ul><a class="lk" href="${REPO}" target="_blank" rel="noopener">View CareerOS AI on GitHub ↗</a>`:''}</div></li>`).join('');
$('#links').innerHTML=LINKS.map(l=>`<li><a href="${l[1]}" ${l[1][0]==='h'?'target="_blank" rel="noopener"':''}><span>${l[0]}</span><span>↗</span></a></li>`).join('');

/* hero architecture diagram */
(()=>{const N={c:[200,28,'Client'],a:[200,98,'API · FastAPI'],m:[88,178,'MySQL'],s:[312,178,'Auth · Secrets'],l:[88,270,'Linux host'],n:[312,270,'Network · Audit']},E=['ca','am','as','ml','sn'];
 const pt=k=>N[k];let s=E.map(e=>`<path class="e" d="M${pt(e[0])[0]} ${pt(e[0])[1]+14}L${pt(e[1])[0]} ${pt(e[1])[1]-14}"/>`).join('');
 s+=Object.entries(N).map(([k,n])=>`<g class="${k==='a'?'hot':''}"><rect x="${n[0]-52}" y="${n[1]-14}" width="104" height="28"/><text x="${n[0]}" y="${n[1]+3.5}">${n[2]}</text></g>`).join('');
 $('#hv').innerHTML=s})();

/* ---------- INTERACTION ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.style.transitionDelay=Math.min([...t.parentNode.children].indexOf(t),5)*60+'ms';t.classList.add('in');io.unobserve(t)}),{threshold:.12});
$$('.rv,.m').forEach(el=>io.observe(el));

const links=$$('#nav a'),alias={lab:'stack',journey:'experience',hero:'',about:'about'};
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const id=alias[e.target.id]??e.target.id;links.forEach(a=>a.classList.toggle('on',a.hash==='#'+id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('main>section').forEach(s=>spy.observe(s));

let tick=false;
addEventListener('scroll',()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{const y=scrollY;$('#top').classList.toggle('sc',y>40);$('#prog').style.transform=`scaleX(${y/(document.documentElement.scrollHeight-innerHeight||1)})`;tick=false})},{passive:true});

const mo=b=>{document.body.classList.toggle('mo',b);$('#burger').setAttribute('aria-expanded',b)};
$('#burger').onclick=()=>mo(!document.body.classList.contains('mo'));$('#menu').onclick=e=>e.target.closest('a')&&mo(false);

/* technical map: hover a domain or a tool */
const map=$('#map');
map.addEventListener('mouseover',e=>{const tk=e.target.closest('.tk'),cat=e.target.closest('.cat');if(!cat)return;
 $$('.cat',map).forEach(c=>c.classList.toggle('on',c===cat));
 if(!tk){map.classList.add('hc');map.classList.remove('h');return}
 const tg=tk.dataset.t.split(' ');map.classList.remove('hc');map.classList.add('h');
 $$('.tk',map).forEach(k=>{k.classList.toggle('me',k===tk);k.classList.toggle('rel',k===tk||k.dataset.t.split(' ').some(t=>tg.includes(t)))})});
map.addEventListener('mouseleave',()=>{map.classList.remove('h','hc');$$('.tk',map).forEach(k=>k.classList.remove('me','rel'))});

/* project preview follows the cursor over the index */
const pv=$('#pv'),idx=$('#idx');let px=0,py=0,tx=0,ty=0,raf=0;
const loop=()=>{px+=(tx-px)*.15;py+=(ty-py)*.15;pv.style.transform=`translate(${px}px,${py}px)`;raf=pv.classList.contains('on')?requestAnimationFrame(loop):0};
idx.addEventListener('mousemove',e=>{tx=Math.min(e.clientX+28,innerWidth-pv.offsetWidth-20);ty=e.clientY-50});
idx.addEventListener('mouseover',e=>{const b=e.target.closest('.pr');if(!b)return;const p=PROJECTS[b.dataset.i];
 pv.innerHTML=`<div class="k"><span>${p.cat}</span></div>`+(p.arch.length?p.arch:[p.d]).map(a=>`<span class="bl2">${a}</span>`).join('');
 if(!pv.classList.contains('on')){px=tx;py=ty;pv.classList.add('on');if(!raf)raf=requestAnimationFrame(loop)}});
idx.addEventListener('mouseleave',()=>pv.classList.remove('on'));

/* case study */
const dlg=$('#cs');
idx.addEventListener('click',e=>{const b=e.target.closest('.pr');if(!b)return;pv.classList.remove('on');const p=PROJECTS[b.dataset.i],c=p.cs;let n=0;
 const row=(k,h)=>`<div class="cs"><h5><b>0${++n}</b>${k}</h5><div>${h}</div></div>`;
 let h=`<p class="lbl">Case study</p><h2>${p.t}</h2><p class="mu">${p.d}</p>`;
 ['Overview','Problem','Approach'].forEach(k=>c[k]&&(h+=row(k,`<p>${c[k]}</p>`)));
 if(p.arch.length)h+=row('Architecture',`<div class="arch">${p.arch.map(a=>`<span>${a}</span>`).join('<i></i>')}</div>`);
 if(p.stack.length)h+=row('Technology',`<p>${p.stack.join(' · ')}</p>`);
 ['Implementation','Challenges','Result'].forEach(k=>c[k]&&(h+=row(k,`<p>${c[k]}</p>`)));
 if(!p.arch.length)h+=`<p class="note">The full write-up for this project is still being documented.</p>`;
 $('#csb').innerHTML=h+`<a class="src" href="${p.link}" target="_blank" rel="noopener">${p.arch.length?'View source on GitHub':'View GitHub profile'} ↗</a>`;
 dlg.showModal();dlg.scrollTo(0,0);document.body.style.overflow='hidden'});
const close=()=>dlg.close();$('#x').onclick=close;dlg.addEventListener('click',e=>{if(e.target===dlg)close()});dlg.addEventListener('close',()=>document.body.style.overflow='');
