const {chromium}=require('playwright');const assert=require('node:assert/strict');const path=require('node:path');
(async()=>{const b=await chromium.launch();try{const p=await b.newPage({viewport:{width:1440,height:1100},hasTouch:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.route('**/*',r=>{const u=new URL(r.request().url());return u.origin==='http://lantern.test'?r.fulfill({path:path.join(__dirname,'..','web',u.pathname==='/'?'index.html':u.pathname)}):r.abort()});await p.goto('http://lantern.test/?map=dire-maul-west');
await p.getByRole('button',{name:'Up to Upper Walkways',exact:true}).click();assert.equal(await p.locator('#floor-select').inputValue(),'balcony');assert.equal(await p.locator('#position').textContent(),'5 / 11');
assert.equal(await p.getByRole('button',{name:'Down to Capital Gardens',exact:true}).evaluate(e=>e===document.activeElement),true);
await p.keyboard.press('Enter');assert.equal(await p.locator('#floor-select').inputValue(),'gardens');assert.equal(await p.locator('#position').textContent(),'7 / 11');
await p.locator('#next').click();assert.equal(await p.locator('#floor-select').inputValue(),'prison');assert.equal(await p.locator('.floor-transition').count(),0);
await p.goBack();assert.equal(await p.locator('#floor-select').inputValue(),'balcony');
await p.uncheck('#notes');assert.equal(await p.locator('.floor-transition').isVisible(),false);await p.check('#notes');
await p.setViewportSize({width:390,height:844});await p.getByRole('button',{name:'Down to Capital Gardens',exact:true}).tap();assert.equal(await p.locator('#floor-select').inputValue(),'gardens');
await p.goto('http://lantern.test/?map=stratholme-main-gate');assert.equal(await p.locator('.floor-transition').count(),0);
const maps=require('./map-data.cjs')(path.join(__dirname,'..','web'));
await p.setViewportSize({width:1440,height:1100});
for(const map of maps.filter(m=>m.transitions))for(const t of map.transitions){
 await p.goto(`http://lantern.test/?map=${map.id}&floor=${t.floor}`);
 await p.locator(`[data-transition="${t.id}"]`).click();
 assert.equal(await p.locator('#floor-select').inputValue(),t.toFloor,t.id);
 assert.equal(await p.locator('#position').textContent(),`${t.toStep+1} / ${map.stops.length}`,t.id);
 if(t.pairId)assert.equal(await p.locator(`[data-transition="${t.pairId}"]`).evaluate(e=>e===document.activeElement),true,t.id);
}
assert.deepEqual(errors,[]);console.log('PASS: stairs click, keyboard, touch, continuation step, history, route toggle and map cleanup');}finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});
