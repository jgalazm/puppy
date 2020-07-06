const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('http://example.com');
  await page.screenshot({ path: 'screenshots/example.png' });
  debugger;
  await browser.close();
})();