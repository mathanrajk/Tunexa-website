/** @type {Record<string, string>} */
const IMG={
 "L1": "images/screens/profile-light.jpg",
 "L2": "images/screens/playlists-light.jpg",
 "L3": "images/screens/favorites-light.jpg",
 "L4": "images/screens/history-light.jpg",
 "L6": "images/screens/now-playing-light.jpg",
 "L7": "images/screens/queue-light.jpg",
 "L10": "images/screens/home-light.jpg",
 "L11": "images/screens/upload-light.jpg",
 "D2": "images/screens/profile-dark.jpg",
 "D3": "images/screens/playlists-dark.jpg",
 "D4": "images/screens/favorites-dark.jpg",
 "D5": "images/screens/history-dark.jpg",
 "D6": "images/screens/upload-dark.jpg",
 "D7": "images/screens/home-dark.jpg"
};
/** @type {Array<[name: string, lightKey: string, darkKey: string]>} */
const S=[["Home","L10","D7"],["Upload","L11","D6"],["Profile","L1","D2"],["Playlists","L2","D3"],["Favorites","L3","D4"],["History","L4","D5"]];
const tr=document.getElementById('track');
tr.innerHTML=S.map(s=>`<figure><div class="phone"><img data-l="${s[1]}" data-d="${s[2]}" alt="Tunexa ${s[0]} screen" width="270" height="606" loading="lazy"></div><figcaption class="text-center font-bold mt-4">${s[0]}</figcaption></figure>`).join('');
function theme(dark){document.querySelectorAll('#track img').forEach(i=>i.src=IMG[dark?i.dataset.d:i.dataset.l]);tl.setAttribute('aria-pressed',!dark);td.setAttribute('aria-pressed',dark)}
tl.onclick=()=>theme(false);td.onclick=()=>theme(true);theme(false);
const step=()=>Math.min(tr.clientWidth*.8,520);
prev.onclick=()=>tr.scrollBy({left:-step(),behavior:'smooth'});next.onclick=()=>tr.scrollBy({left:step(),behavior:'smooth'});
menu.onclick=()=>{const o=links.classList.toggle('hidden');links.classList.toggle('absolute',!o);links.classList.toggle('flex',!o);links.classList.toggle('flex-col',!o);links.classList.toggle('left-0',!o);links.classList.toggle('right-0',!o);links.classList.toggle('top-16',!o);links.classList.toggle('p-5',!o);links.style.background=o?'':'var(--bg)';menu.setAttribute('aria-expanded',!o)};
links.addEventListener('click',e=>{if(e.target.tagName==='A'&&!menu.offsetParent===false){links.classList.add('hidden');links.classList.remove('absolute','flex','flex-col');menu.setAttribute('aria-expanded',false)}});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
nl.addEventListener('submit',e=>{e.preventDefault();const ok=em.checkValidity()&&em.value;nlmsg.textContent=ok?'You’re on the list. Thanks for joining Tunexa!':'Please enter a valid email address.';nlmsg.style.color=ok?'#16a34a':'#dc2626';if(ok)nl.reset()}); /* TODO: send to your email provider */
yr.textContent=new Date().getFullYear();
