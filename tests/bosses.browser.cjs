// Run against a running Lantern server; requires Playwright and Chromium.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true});
 try{
 const page=await browser.newPage({viewport:{width:1440,height:1100}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto((process.env.LANTERN_TEST_URL || 'http://127.0.0.1:8080'));
 assert.equal(await page.locator('.boss-marker').count(),6);
 const boss=page.getByRole('button',{name:'Baroness Anastari: show abilities and mindset'});
 await boss.hover();await page.waitForSelector('#boss-card:visible');
 assert.equal(await page.locator('#boss-name').textContent(),'Baroness Anastari');
 assert.match(await page.locator('#boss-abilities').textContent(),/Silence/);
 await page.locator('#boss-card').hover();await page.waitForTimeout(300);
 assert.equal(await page.locator('#boss-card').isVisible(),true);
 await page.mouse.move(10,10);await page.waitForTimeout(350);assert.equal(await page.locator('#boss-card').isVisible(),false);
 await boss.click();await page.mouse.move(10,10);await page.waitForTimeout(350);assert.equal(await page.locator('#boss-card').isVisible(),true);
 await page.keyboard.press('Escape');assert.equal(await page.locator('#boss-card').isVisible(),false);
 await page.keyboard.press('Enter');assert.equal(await page.locator('#boss-close').evaluate(e=>e===document.activeElement),true);
 await page.keyboard.press('Escape');
 await page.uncheck('#notes');assert.equal(await boss.isVisible(),true);
 await page.uncheck('#show-bosses');assert.equal(await boss.isVisible(),false);
 await page.check('#show-bosses');await page.check('#notes');
 await boss.click();await page.click('#zoom-in');assert.equal(await page.locator('#boss-card').isVisible(),false);
 await page.locator('#dungeon-select-trigger').click();
 await page.getByRole('option',{name:'Stratholme Main Gate',exact:true}).click();
 assert.equal(await page.locator('.boss-marker').count(),6);
 const willey=page.getByRole('button',{name:'Cannon Master Willey: show abilities and mindset'});
 await willey.hover();assert.match(await page.locator('#boss-mindset').textContent(),/cannons/);
 await page.setViewportSize({width:390,height:844});
 await page.locator('#map').scrollIntoViewIfNeeded();await willey.click();
 let rect=await page.locator('#boss-card').boundingBox();assert.ok(rect.x>=0&&rect.x+rect.width<=390);assert.ok(rect.y>=0&&rect.y+rect.height<=844);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 assert.deepEqual(errors,[]);
 const touch=await browser.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});
 const phone=await touch.newPage();await phone.goto((process.env.LANTERN_TEST_URL || 'http://127.0.0.1:8080'));
 await phone.locator('.boss-marker').first().tap();assert.equal(await phone.locator('#boss-card').isVisible(),true);
 await phone.locator('#boss-close').tap();assert.equal(await phone.locator('#boss-card').isVisible(),false);
 await touch.close();console.log('PASS: hover, card hover retention, dismissal, pin, keyboard, independent toggles, zoom cleanup, map switch, desktop/mobile bounds, touch, no JS errors');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
