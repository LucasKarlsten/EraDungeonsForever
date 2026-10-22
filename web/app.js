const svgNS='http://www.w3.org/2000/svg';
function node(tag,attrs,parent){const n=document.createElementNS(svgNS,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);parent.append(n);return n;}
const markers=document.querySelector('#markers'),steps=document.querySelector('#steps');let selected=0, stops=[], activeMap;

function select(i){selected=i;document.querySelectorAll('.marker').forEach((m,j)=>{m.classList.toggle('active',i===j);m.setAttribute('aria-pressed',String(i===j))});document.querySelectorAll('#steps button').forEach((b,j)=>{b.classList.toggle('active',i===j);b.setAttribute('aria-pressed',String(i===j))});document.querySelector('#position').textContent=`${i+1} / ${stops.length}`;document.querySelector('#previous').disabled=i===0;document.querySelector('#next').disabled=i===stops.length-1;}
document.querySelector('#previous').onclick=()=>select(Math.max(0,selected-1));document.querySelector('#next').onclick=()=>select(Math.min(stops.length-1,selected+1));document.querySelector('#notes').onchange=e=>document.querySelector('#route-overlay').style.display=e.target.checked?'':'none';
const map=document.querySelector('#map');let box=[0,0,1000,660],drag=null;
function render(){closeBossCard();map.setAttribute('viewBox',box.join(' '))}function zoom(f){const w=Math.max(activeMap.width*.3,Math.min(activeMap.width*1.4,box[2]*f)),h=w*activeMap.height/activeMap.width;box=[box[0]+(box[2]-w)/2,box[1]+(box[3]-h)/2,w,h];render()}
document.querySelector('#zoom-in').onclick=()=>zoom(.8);document.querySelector('#zoom-out').onclick=()=>zoom(1.25);document.querySelector('#reset').onclick=resetView;map.addEventListener('wheel',e=>{e.preventDefault();zoom(e.deltaY>0?1.1:.9)},{passive:false});map.addEventListener('pointerdown',e=>{if(e.target.closest('.marker, .boss-marker'))return;drag={x:e.clientX,y:e.clientY,box:[...box]};map.setPointerCapture(e.pointerId)});map.addEventListener('pointermove',e=>{if(!drag)return;const scale=Math.max(drag.box[2]/map.clientWidth,drag.box[3]/map.clientHeight);box=[drag.box[0]-(e.clientX-drag.x)*scale,drag.box[1]-(e.clientY-drag.y)*scale,...drag.box.slice(2)];render()});map.addEventListener('pointerup',()=>drag=null);map.addEventListener('pointercancel',()=>drag=null);
function resetView(){drag=null;box=[0,0,activeMap.width,activeMap.height];render()}
function loadMap(id){
  activeMap=dungeons.find(entry=>entry.id===id)||dungeons[0];
  stops=activeMap.stops;
  markers.replaceChildren();steps.replaceChildren();
  const picker=document.querySelector('#dungeon-select');
  picker.value=activeMap.id;
  document.querySelector('#dungeon-name').textContent=activeMap.name;
  document.querySelector('#dungeon-detail').textContent=`${activeMap.wing} · ${activeMap.region}`;
  document.querySelector('#breadcrumb-region').textContent=activeMap.continent.toUpperCase();
  document.querySelector('#breadcrumb-dungeon').textContent=`${activeMap.name} · ${activeMap.wing}`.toUpperCase();
  document.querySelector('#stop-count').textContent=`${stops.length} route stops`;
  document.querySelector('#map-title').textContent=`${activeMap.name} — ${activeMap.wing}`;
  document.title=`${activeMap.name} — ${activeMap.wing} | Lantern`;
  map.setAttribute('aria-label',`${activeMap.name} ${activeMap.wing} map with ${stops.length} selectable route stops`);
  map.style.aspectRatio=`${activeMap.width} / ${activeMap.height}`;
  const artwork=document.querySelector('#map-artwork');
  artwork.setAttribute('href',activeMap.image);
  artwork.setAttribute('width',activeMap.width);artwork.setAttribute('height',activeMap.height);
  const source=document.querySelector('#map-source');source.href=activeMap.source;source.textContent=`Map source: ${activeMap.sourceName}`;
  document.querySelectorAll('.route, .route-shadow').forEach(path=>path.setAttribute('d',activeMap.route));
  stops.forEach(([x,y,title,note],i)=>{const g=node('g',{class:'marker',role:'button',tabindex:0,'aria-label':`Stop ${i+1}: ${title}`,transform:`translate(${x} ${y})`},markers);node('circle',{r:12},g);node('text',{},g).textContent=i+1;g.addEventListener('click',()=>select(i));g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(i)}});const li=document.createElement('li'),b=document.createElement('button');b.innerHTML=`<span class="number">${i+1}</span><span><strong>${title}</strong><small>${note}</small></span>`;b.onclick=()=>select(i);li.append(b);steps.append(li)});
  resetView();select(0);renderBosses();
}

const bossLayer = document.querySelector('#boss-markers');
const bossCard = document.querySelector('#boss-card');
let bossAnchor = null, bossPinned = false, bossCloseTimer = null, restoringBossFocus = false;

function closeBossCard(restoreFocus = false) {
  clearTimeout(bossCloseTimer);
  const previous = bossAnchor;
  if (previous) previous.setAttribute('aria-expanded', 'false');
  bossCard.hidden = true;
  bossAnchor = null;
  bossPinned = false;
  if (restoreFocus && previous?.isConnected) {
    restoringBossFocus = true;
    previous.focus();
    restoringBossFocus = false;
  }
}

function positionBossCard() {
  if (!bossAnchor) return;
  const anchor = bossAnchor.getBoundingClientRect();
  const card = bossCard.getBoundingClientRect();
  const gap = 10, edge = 12;
  let left = anchor.right + gap;
  if (left + card.width > window.innerWidth - edge) left = anchor.left - card.width - gap;
  bossCard.style.left = `${Math.max(edge, Math.min(left, window.innerWidth - card.width - edge))}px`;
  bossCard.style.top = `${Math.max(edge, Math.min(anchor.top, window.innerHeight - card.height - edge))}px`;
}

function showBossCard(boss, anchor, pin = false) {
  if (restoringBossFocus || (bossPinned && !pin)) return;
  clearTimeout(bossCloseTimer);
  if (bossAnchor) bossAnchor.setAttribute('aria-expanded', 'false');
  bossAnchor = anchor;
  bossPinned = pin;
  anchor.setAttribute('aria-expanded', 'true');
  document.querySelector('#boss-name').textContent = boss.name;
  document.querySelector('#boss-kind').textContent = `CLASSIC ERA · ${boss.kind}`;
  document.querySelector('#boss-mindset').textContent = boss.mindset;
  const abilities = document.querySelector('#boss-abilities');
  abilities.replaceChildren();
  for (const ability of boss.abilities) {
    const item = document.createElement('li');
    item.textContent = ability;
    abilities.append(item);
  }
  document.querySelector('#boss-source').href = activeMap.bossSource;
  document.querySelector('.boss-hint').textContent = pin ? 'Pinned · Tap outside or press Esc to close' : 'Click to keep open · Esc to close';
  bossCard.hidden = false;
  positionBossCard();
}

function scheduleBossClose() {
  clearTimeout(bossCloseTimer);
  if (bossPinned) return;
  bossCloseTimer = setTimeout(() => {
    if (!bossCard.matches(':hover') && !bossCard.contains(document.activeElement)
      && document.activeElement !== bossAnchor) closeBossCard();
  }, 220);
}

function renderBosses() {
  closeBossCard();
  bossLayer.replaceChildren();
  for (const boss of activeMap.bosses || []) {
    const marker = node('g', {
      class: 'boss-marker', role: 'button', tabindex: 0,
      'aria-label': `${boss.name}: show abilities and mindset`,
      'aria-controls': 'boss-card', 'aria-haspopup': 'dialog', 'aria-expanded': 'false',
      transform: `translate(${boss.x} ${boss.y})`
    }, bossLayer);
    node('circle', {r: boss.mainBoss ? 20 : 16, class: 'boss-hit-area'}, marker);
    if (boss.mainBoss) {
      // Header-style four-point sparkle, rotated behind the upright skull.
      const lantern = node('g', {class: 'boss-lantern', transform: 'rotate(45)', 'aria-hidden': 'true'}, marker);
      const frame = 'M0 -25 Q4 -4 25 0 Q4 4 0 25 Q-4 4 -25 0 Q-4 -4 0 -25Z';
      node('path', {d: frame, class: 'boss-lantern-shadow'}, lantern);
      node('path', {d: frame, class: 'boss-lantern-frame'}, lantern);
    }
    node('path', {d: 'M0 -13 L13 0 L0 13 L-13 0Z', class: 'boss-gem'}, marker);
    // A small vector skull stays legible without an external font or icon asset.
    node('path', {d: 'M-6 1 V-4 Q-6 -9 0 -9 Q6 -9 6 -4 V1 L3 3 V7 H-3 V3Z', class: 'boss-skull'}, marker);
    node('circle', {cx: -2.5, cy: -2, r: 1.4, class: 'boss-eye'}, marker);
    node('circle', {cx: 2.5, cy: -2, r: 1.4, class: 'boss-eye'}, marker);
    marker.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch') showBossCard(boss, marker);
    });
    marker.addEventListener('pointerleave', scheduleBossClose);
    marker.addEventListener('focus', () => showBossCard(boss, marker));
    marker.addEventListener('blur', scheduleBossClose);
    const toggle = () => {
      if (bossPinned && bossAnchor === marker) closeBossCard();
      else showBossCard(boss, marker, true);
    };
    marker.addEventListener('click', toggle);
    marker.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showBossCard(boss, marker, true);
        document.querySelector('#boss-close').focus();
      }
    });
  }
}

bossCard.addEventListener('pointerenter', () => clearTimeout(bossCloseTimer));
bossCard.addEventListener('pointerleave', scheduleBossClose);
bossCard.addEventListener('focusin', () => clearTimeout(bossCloseTimer));
bossCard.addEventListener('focusout', scheduleBossClose);
document.querySelector('#boss-close').addEventListener('click', () => closeBossCard(true));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !bossCard.hidden) { event.preventDefault(); closeBossCard(true); }
});
document.addEventListener('pointerdown', event => {
  if (!bossCard.contains(event.target) && !event.target.closest('.boss-marker')) closeBossCard();
});
document.querySelector('#show-bosses').addEventListener('change', event => {
  closeBossCard();
  bossLayer.style.display = event.target.checked ? '' : 'none';
});
window.addEventListener('resize', positionBossCard);
window.addEventListener('scroll', event => {
  if (!bossCard.contains(event.target)) positionBossCard();
}, true);

const picker=document.querySelector('#dungeon-select');
for(const dungeon of dungeons){const option=document.createElement('option');option.value=dungeon.id;option.textContent=`${dungeon.name} — ${dungeon.wing}`;picker.append(option)}
picker.addEventListener('change',()=>{loadMap(picker.value);const url=new URL(location.href);url.searchParams.set('map',activeMap.id);history.pushState(null,'',url)});
window.addEventListener('popstate',()=>loadMap(new URLSearchParams(location.search).get('map')));
loadMap(new URLSearchParams(location.search).get('map'));
