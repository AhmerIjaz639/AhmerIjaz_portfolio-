/* ============ DATA — edit here to update the site ============ */
const skills=[
 ['fab fa-python','Python','Beginner → Intermediate',70],['fas fa-server','FastAPI','REST APIs',60],
 ['fas fa-database','SQL / MySQL','Views, triggers, procedures',75],['fab fa-java','Java','OOP + DSA',75],
 ['fas fa-terminal','Bash','Intermediate',60],['fab fa-node-js','JS / Node / Express','Learning',20],
 ['fas fa-network-wired','Networking','CCNA',60]];
const cyber=[['linux_fundamentals',65],['linux_permissions_security',50],['virtualization_lab_setup',65],['process_log_analysis',45],['networking_ccna',60],['attack_defense_concepts',40],['bash_security_scripting',40]];
const tools=[['fab fa-linux','Kali Linux'],['fab fa-ubuntu','Ubuntu'],['fas fa-server','VMware'],['fab fa-git-alt','Git/GitHub'],['fas fa-shield-alt','Wireshark'],['fas fa-crosshairs','Nmap'],['fas fa-flag','TryHackMe'],['fas fa-file-code','YAML/Butane']];
const chips=[['fas fa-code','Backend Dev'],['fas fa-shield-alt','Cybersecurity'],['fab fa-linux','Linux'],['fas fa-network-wired','Networking'],['fab fa-python','Python'],['fas fa-database','MySQL'],['fab fa-github','Open Source']];
const projects=[
 {c:'backend',i:'fas fa-robot',t:'CareerOS AI',s:'Python · FastAPI · Gemini',star:'🏆 Regional Selected',d:'Multi-agent career intelligence platform with 5 AI agents (Resume, GitHub, Job Matcher, Skill Gap, Master). Built at the Bano Qabil Hackathon (Alibaba).',tags:['FastAPI','Gemini','Multi-Agent'],l:'https://github.com/AhmerIjaz639/CareerOS-AI'},
 {c:'security',i:'fas fa-flag-checkered',t:'Cyber Labs & CTF Writeups',s:'Linux · Bash · Kali',d:'Public writeups for OverTheWire Bandit (12/34 levels) plus a VMware Kali/Ubuntu lab. TryHackMe Pre-Security in progress.',tags:['CTF','Linux','SSH'],l:'https://github.com/AhmerIjaz639/CyberSecurity/tree/main/overthewire-bandit-levels'},
 {c:'security',i:'fas fa-book-open',t:'6-Month Cyber Bootcamp',s:'Self-directed · 21 modules',d:'24-week roadmap through Linux, networking, web security, SIEM and ethical hacking. Tracked publicly. Target: March 2027.',tags:['Roadmap','Docs'],l:'https://github.com/AhmerIjaz639/CyberSecurity'},
 {c:'backend',i:'fas fa-building',t:'Police Station Management',s:'Python · MySQL · Streamlit',d:'Full-stack MIS for FIRs, staff, funds and cases. Parameterized queries, env-based secrets, views, procedures and triggers. Deployed live.',tags:['SQLi-safe','MySQL','Streamlit'],l:'https://github.com/AhmerIjaz639/PoliceStationDBMS'},
 {c:'infra',i:'fas fa-cloud',t:'Cloud-Init / Butane Writeups',s:'YAML · Cloud-Init · Ignition',d:'Notes and examples on core directives, with a partial Cloud-Init → Butane mapping reference. Next: conversion logic in Go.',tags:['YAML','Butane','Go'],l:'https://github.com/AhmerIjaz639?tab=repositories'},
 {c:'backend',i:'fas fa-trophy',t:'Sports Tournament Organizer',s:'Java · DSA · OOP',d:'Bracket and scheduling system using queues, stacks and linked lists with automated registration and score tracking.',tags:['Java','DSA','OOP'],l:'https://github.com/AhmerIjaz639/sport-tournament-organizer-football'},
 {c:'backend',i:'fab fa-python',t:'Python Projects & Portfolio',s:'Python · HTML',d:'Collection of Python practice projects and the source of this portfolio.',tags:['Python','HTML/CSS'],l:'https://github.com/AhmerIjaz639/Python_projects'}];
/* image paths: put your files in /images/certs and /images/volunteering (any missing image shows a styled fallback) */
const certs=[
 {img:'images/certs/ccna.jpg',t:'CCNA',m:'Cisco Networking Academy · 2026',d:'Score 71%. IP addressing, subnetting, TCP/IP, OSI, routing, switching, VLANs and basic network security.',tags:['Networking','VLANs'],l:'https://www.credly.com/badges/c2ff5ef7-6cf5-4d9f-b247-ddbd86e4e65b/public_url'},
 {img:'images/certs/lfc102.jpg',t:'Inclusive Open Source Community Orientation (LFC102)',m:'The Linux Foundation · 2026',d:'Open-source community norms, inclusive collaboration and how to contribute to CNCF projects.',tags:['Open Source','CNCF'],l:'#'},
 {img:'images/certs/google-python.jpg',t:'Google Crash Course on Python',m:'Coursera · 2024',d:'Python fundamentals, functions, OOP, file I/O and automation basics.',tags:['Python','Automation'],l:'#'}];
const vols=[
 {img:'images/volunteering/ai-compassion-1.jpg',t:'Ambassador — AI+compassion',m:'Community · Post 1',d:'Representing AI+compassion as a campus ambassador: spreading awareness and growing the community around responsible, human-centred AI.',tags:['Ambassador','AI']},
 {img:'images/volunteering/ioy-1.jpg',t:'Ambassador — IOY',m:'Community · Post 1',d:'Ambassador for IOY, promoting events and opportunities to students and young developers.',tags:['Ambassador','Community']},
 {img:'images/volunteering/bano-qabil-1.jpg',t:'Bano Qabil Hackathon (Alibaba)',m:'Hackathon · Regional Selected',d:'Built CareerOS AI, a multi-agent career platform, and was selected for the regional level.',tags:['Hackathon','FastAPI'],l:'https://github.com/AhmerIjaz639/CareerOS-AI'}];
const timeline=[
 ['fas fa-trophy','2026','Bano Qabil Hackathon — Regional Selected','Alibaba · Bano Qabil','Built CareerOS AI, a multi-agent career intelligence platform (FastAPI + Gemini).',['Hackathon','AI']],
 ['fas fa-handshake','2026 — Present','Community Ambassador','AI+compassion · IOY','Promoting events and communities, connecting students with tech opportunities.',['Ambassador','Community']],
 ['fas fa-network-wired','2026','CCNA Certification','Cisco Networking Academy · 71%','IP addressing, subnetting, TCP/IP, OSI, routing, switching, VLANs.',['CCNA','Networking']],
 ['fas fa-graduation-cap','2024 — 2028','BS Computer Science','COMSATS University Islamabad, Lahore','Networks, OS, Databases, OOP, DSA, Software Engineering. Currently 4th semester.',['CS','DSA','Databases']],
 ['fas fa-school','2022 — 2024','FSc Pre-Engineering · 84%','Punjab Group of Colleges, Lahore','Strong foundation in mathematics, physics and problem solving.',['Pre-Engineering']],
 ['fas fa-book','2020 — 2022','Matriculation (Science) · 96%','Unique Group of Institutes, Lahore','Science and mathematics foundation.',['Science']]];
const road=[['done','Module 1: Computer & OS Fundamentals','Complete'],['done','Module 2: Linux Mastery','Complete'],['skip','Module 3: Windows & PowerShell','Skipped (revisit)'],['now','Module 4: Networking & Protocols','In Progress'],['','Module 5: Python for Cybersecurity','Upcoming'],['','Modules 6-8: Git, Crypto, Web Security/OWASP','Upcoming'],['','Modules 9-10: Active Directory, SOC & SIEM','Upcoming'],['','Modules 11-15: Pentesting → Threat Hunting','Upcoming'],['','Modules 16-21: Cloud, K8s, CTF, Capstone, Interview','Upcoming']];
const contacts=[['fas fa-envelope','EMAIL','ahmerijaz639@gmail.com','mailto:ahmerijaz639@gmail.com'],['fab fa-github','GITHUB','github.com/AhmerIjaz639','https://github.com/AhmerIjaz639'],['fab fa-linkedin-in','LINKEDIN','Ahmer Ijaz','https://www.linkedin.com/in/ahmer-ijaz-08a60237b/'],['fas fa-user-secret','TRYHACKME','tryhackme.com/p/ahmerijaz639','https://tryhackme.com/p/ahmerijaz639'],['fas fa-globe','LIVE PORTFOLIO','ahmer-ijaz-portfolio.vercel.app','https://ahmer-ijaz-portfolio.vercel.app/'],['fas fa-map-marker-alt','LOCATION','Lahore, Pakistan']];
const navLinks=[['hero','Home'],['about','About'],['skills','Skills'],['projects','Projects'],['certs','Certs'],['experience','Experience'],['volunteering','Volunteering'],['roadmap','Roadmap'],['contact','Contact']];

/* ============ RENDER ============ */
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const bar=(n,p,x='')=>`<div class="bar"><div class="bt"><span>${n}${x?`<small>${x}</small>`:''}</span><em>${p}%</em></div><div class="bl"><div class="bf" data-w="${p}"></div></div></div>`;
$('#skillBars').innerHTML=skills.map(s=>bar(`<i class="${s[0]}" style="color:#00ff9f"></i> ${s[1]}`,s[3],s[2])).join('');
$('#cyberBars').innerHTML=cyber.map(s=>bar(s[0],s[1])).join('');
$('#tools').innerHTML=tools.map(t=>`<div class="tool"><i class="${t[0]}"></i>${t[1]}</div>`).join('');
$('#chips').innerHTML=chips.map(c=>`<span class="chip"><i class="${c[0]}"></i>${c[1]}</span>`).join('');
$('#mnav').innerHTML=navLinks.map(l=>`<a href="#${l[0]}">${l[1]}</a>`).join('');
$('#aboutTerm').innerHTML=[['whoami','ahmer_ijaz'],['cat /etc/mission.conf','role=backend_developer\nsecurity_track=module_4/21'],['cat ~/certs','CCNA_Cisco  LFC102  Google_Python'],['echo $STATUS','open_to_internships']].map(([c,o])=>`<div><b class="pr">$</b> <span class="info">${c}</span></div>${o.split('\n').map(x=>`<span class="out">${x}</span>`).join('')}`).join('')+'<div><b class="pr">$</b> <span class="cur"></span></div>';
$('#projects-grid').innerHTML=projects.map((p,i)=>`<div class="pc reveal ${p.star?'star':''}" data-c="${p.c}"><div class="pn"><span>// 0${i+1}</span>${p.star?`<b>${p.star}</b>`:''}</div><div class="pi"><i class="${p.i}"></i></div><div class="pt">${p.t}</div><div class="ps">${p.s}</div><div class="pd">${p.d}</div><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><a class="plink" href="${p.l}" target="_blank" rel="noopener"><i class="fab fa-github"></i> View Code</a></div>`).join('');
$('#filters').innerHTML=['all','security','backend','infra'].map((f,i)=>`<button class="fb ${i?'':'on'}" data-f="${f}">${f}</button>`).join('');
const flip=a=>a.map((x,i)=>`<div class="flip reveal d${i%4+1}" tabindex="0"><div class="fi"><div class="ff"><img src="${x.img}" alt="${x.t}" loading="lazy"><span class="hint"><i class="fas fa-sync-alt"></i> flip</span><div class="cap"><h3>${x.t}</h3><p>${x.m}</p></div></div><div class="fbk"><h3>${x.t}</h3><div class="meta">${x.m}</div><p>${x.d}</p><div class="tags">${x.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>${x.l&&x.l!=='#'?`<a class="plink" href="${x.l}" target="_blank" rel="noopener">View <i class="fas fa-arrow-right"></i></a>`:''}</div></div></div>`).join('');
$('#certGrid').innerHTML=flip(certs);$('#volGrid').innerHTML=flip(vols);
$$('.ff img').forEach(im=>{const f=()=>im.parentElement.classList.add('noimg');im.addEventListener('error',f);if(im.complete&&!im.naturalWidth)f()});
$$('.flip').forEach(f=>{f.addEventListener('click',e=>{if(!e.target.closest('a'))f.classList.toggle('on')});f.addEventListener('keydown',e=>{if(e.key==='Enter')f.classList.toggle('on')})});
$('#timeline').innerHTML=timeline.map((t,i)=>`<div class="ti reveal d${i%3+1}"><div class="tm"><i class="${t[0]}"></i></div><div class="tc"><div class="tp">${t[1]}</div><div class="tr">${t[2]}</div><div class="to">${t[3]}</div><div class="td2">${t[4]}</div><div class="tags">${t[5].map(x=>`<span class="tag">${x}</span>`).join('')}</div></div></div>`).join('');
$('#road').innerHTML=road.map(r=>`<div class="rm ${r[0]}"><span>${r[0]==='done'?'🟢':r[0]==='now'?'🟡':r[0]==='skip'?'⏭️':'⚪'}</span>${r[1]}<b>${r[2]}</b></div>`).join('');
$('#contactLinks').innerHTML=contacts.map(c=>{const h=`<div class="cli"><i class="${c[0]}"></i></div><div><b>${c[1]}</b>${c[2]}</div>`;return c[3]?`<a class="cl" href="${c[3]}" target="_blank" rel="noopener">${h}</a>`:`<div class="cl">${h}</div>`}).join('');

/* ============ BEHAVIOUR ============ */
addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('hide'),1900));
const co=$('#cOut'),ci=$('#cIn');let mx=0,my=0,ox=0,oy=0;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;ci.style.left=mx+'px';ci.style.top=my+'px'});
(function a(){ox+=(mx-ox)*.15;oy+=(my-oy)*.15;co.style.left=ox+'px';co.style.top=oy+'px';requestAnimationFrame(a)})();
document.addEventListener('mouseover',e=>document.body.classList.toggle('hov',!!e.target.closest('a,button,.flip,.pc,.chip,.tc,.bar')));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');e.target.querySelectorAll('[data-w]').forEach(b=>setTimeout(()=>b.style.width=b.dataset.w+'%',150));io.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));

const nav=$('#nav'),secs=[...$$('section')];
addEventListener('scroll',()=>{const y=scrollY;$('#progress').style.width=y/(document.documentElement.scrollHeight-innerHeight)*100+'%';nav.classList.toggle('sc',y>50);$('#btt').classList.toggle('show',y>350);
 let cur='';secs.forEach(s=>{if(y>=s.offsetTop-180)cur=s.id});$$('.nav-items a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur))});
$('#btt').onclick=()=>scrollTo({top:0,behavior:'smooth'});
const bg=$('#burger'),mn=$('#mnav');
bg.onclick=()=>{bg.classList.toggle('open');mn.classList.toggle('open')};
mn.onclick=e=>{if(e.target.tagName==='A'){bg.classList.remove('open');mn.classList.remove('open')}};

$('#filters').onclick=e=>{const b=e.target.closest('.fb');if(!b)return;$$('.fb').forEach(x=>x.classList.remove('on'));b.classList.add('on');
 $$('.pc').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f))};

const roles=['Backend Developer','Aspiring Pentester','CCNA Certified','Hackathon Builder','Open Source Enthusiast','CS Student @ COMSATS'];
let ri=0,chI=0,del=false;const te=$('#typed');
(function type(){const r=roles[ri];te.textContent=r.slice(0,del?chI--:chI++);
 if(!del&&chI>r.length){del=true;return setTimeout(type,1400)}
 if(del&&chI<0){del=false;ri=(ri+1)%roles.length;chI=0}
 setTimeout(type,del?40:80)})();
