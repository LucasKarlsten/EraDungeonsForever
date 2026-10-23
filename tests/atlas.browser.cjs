// Requires Playwright. Defaults to an already-running local Lantern server.
const {chromium}=require('playwright');const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');const loadMaps=require('./map-data.cjs');
const root=path.join(__dirname,'..','web');
const maps=loadMaps(root);
(async()=>{const browser=await chromium.launch();try{
 const page=await browser.newPage({viewport:{width:1440,height:1100}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const choose=(id,value)=>page.locator(id).selectOption(value,{force:true});
 const base=process.env.LANTERN_TEST_URL||'http://127.0.0.1:8080';
 // Local asset interception also permits repeatable tests without a running server.
 if(process.env.LANTERN_LOCAL_ASSETS)await page.route('**/*',r=>{const u=new URL(r.request().url());if(u.origin!==new URL(base).origin)return r.abort();return r.fulfill({path:path.join(root,u.pathname==='/'?'index.html':u.pathname)});});
 await page.goto(base);assert.equal(await page.locator('#dungeon-select option').count(),9);
 for(const map of maps){
  await choose('#dungeon-select',map.id);
  assert.equal(await page.locator('#steps button').count(),map.stops.length);
  const floors=map.floors||[{id:'main',image:map.image}];
  for(let i=0;i<map.stops.length;i++){
   await page.locator('#steps button').nth(i).click();
   const floorId=map.stops[i][4]||floors[0].id;
   assert.equal(await page.locator('#floor-select').inputValue(),floorId);
   assert.equal(await page.locator('#position').textContent(),`${i+1} / ${map.stops.length}`);
   assert.equal(await page.locator('.marker.active').getAttribute('data-index'),String(i));
   assert.equal(await page.locator('.boss-marker').count(),map.bosses.filter(b=>(b.floor||floors[0].id)===floorId).length);
   assert.equal(await page.locator('#map-artwork').getAttribute('href'),floors.find(f=>f.id===floorId).image);
  }
  for(const floor of floors){
   await choose('#floor-select',floor.id,{force:true});
   for(const boss of map.bosses.filter(b=>(b.floor||floors[0].id)===floor.id)){
    await page.getByRole('button',{name:boss.name+': show abilities and mindset',exact:true}).click();
    assert.equal(await page.locator('#boss-name').textContent(),boss.name);await page.keyboard.press('Escape');
   }
  }
 }
 await page.goto(base+'/?map=scholomance&floor=lower');assert.equal(await page.locator('#floor-select').inputValue(),'lower');
 await choose('#floor-select','upper');await page.goBack();assert.equal(await page.locator('#floor-select').inputValue(),'lower');await page.goForward();assert.equal(await page.locator('#floor-select').inputValue(),'upper');
 await choose('#dungeon-select','dire-maul-west');assert.equal(new URL(page.url()).searchParams.has('floor'),false);
 await page.uncheck('#notes');await page.uncheck('#show-bosses');await choose('#floor-select','prison');assert.equal(await page.locator('#route-overlay').isVisible(),false);assert.equal(await page.locator('#boss-markers').isVisible(),false);
 await page.check('#notes');await page.check('#show-bosses');
 await page.setViewportSize({width:390,height:844});for(const map of maps){await choose('#dungeon-select',map.id);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);}
 assert.deepEqual(errors,[]);console.log('PASS: nine dungeons, every route step, all floor boss cards, floor deep links/history, toggles, mobile overflow, no script errors');
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
