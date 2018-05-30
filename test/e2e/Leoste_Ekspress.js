const config = require('../../nightwatch.conf.js');

module.exports = {
 '@tags': ['Leoste_Ekspress'],
 'Leoste Ekspress 1': function (browser) {
   browser
    .url('http://ekspress.delfi.ee')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress01-01.png`)
    .click('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover-start-reading"]')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress01-02.png`)
    .click('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover-start-reading"]')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress01-03.png`);
 },
 'Leoste Ekspress 2': function (browser) {   
  browser
    .url('http://ekspress.delfi.ee')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress02-01.png`)
    .click('a[class="button menu-button js-toggle-left-menu"]')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress02-02.png`)
    .click('a[href="/arhiiv/"][class="menu-link"]')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress02-03.png`)
    .click('div.archive-item-container:nth-child(3) a')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress02-04.png`)
    .click('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover-start-reading"]')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress02-05.png`)
    .click('a[class="button sidebar-button js-toggle-sidebar"]')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress02-06.png`)
    .click('div[class="sidebar-item sidebar-item-0 active"] a')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress02-07.png`);
 },
 'Leoste Ekspress 3': function (browser) {
  browser
    .url('http://ekspress.delfi.ee')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress03-01.png`)
    .click('a[class="button menu-button js-toggle-left-menu"]')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress03-02.png`)
    .click('a[href="/otsing/"][class="menu-link"]')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress03-03.png`)
    .setValue('input[type="text"]', ['Tallinna Polütehnikum', browser.Keys.ENTER])
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress03-04.png`)
    .click('div[class="item cfx"]:nth-child(2) div[class="item-content"] h2 a')
    .pause(1000)
    .saveScreenshot(`${config.imgpath(browser)}leosteEkspress03-05.png`);
  }
};