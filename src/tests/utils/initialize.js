const puppeteer = require('puppeteer');

export const initializeBrowser = async () => {
    let headless = process.env.HEADLESS
    let browser = await puppeteer.launch({
        headless: headless === 'false' ? false : true,
        args:[
          '--start-fullscreen',
          '--disk-cache-size=0',
          '-no-sandbox',
       ],
       slowMo: headless === 'false' ? 200 : 10
    });

    return browser
}

export const initializePage = async (browser) => {
    let headless = process.env.HEADLESS
    let page = await browser.newPage();
    if(headless === 'false'){
        page.emulate({
        viewport: {
            width: 1450,
            height: 768,
        },
        userAgent: '',
        });
    }
    return page
}