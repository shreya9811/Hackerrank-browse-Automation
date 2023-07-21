const puppeteer = require('puppeteer');
console.log("Before");
let pages;
const browserOpenpromise = puppeteer.launch({headless: false, slowMo: true, defaultViewport: null, args: ['--start-maximized']});
browserOpenpromise
    .then(function (browser) {
        console.log('browser opened');
        //currently opened tabs
        let pageOpenPromise = browser.pages();
        return pageOpenPromise;
    }).then(function (broswerPages) {
        pages = broswerPages[0]
        let gotoPromise = pages.goto('https://www.google.com/')
        return gotoPromise;
    })
    .then(function () {
        // console.log('Reached google homepage');
        //wait for element to appear on page
        let elementWaitPromise = pages.waitForSelector('#APjFqb', {visible: true});
        return elementWaitPromise;
    })
    .then(function () {
        //type anything on page using selector
        const keysWillBeSentPromise =  pages.type('#APjFqb', 'Pepcoding');
       return keysWillBeSentPromise
    })
    .then(function () {
        //use keyboard to enter something
        let enterPressed = pages.keyboard.press("Enter")
        return enterPressed
    }).then(function () {
       const elementWaitPromise =  pages.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {visible: true});
       return elementWaitPromise;
    }).then(function () {
        const keysWillBeSentPromise =  pages.click('h3.LC20lb.MBeuO.DKV0Md');
       return keysWillBeSentPromise
    })
    .catch(err => {
        console.log(err);
    })
    
console.log('After');