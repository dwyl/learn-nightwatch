const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['RahvaRaamat'],
  before(browser) {
    browser.resizeWindow(1280, 720);
  },
  'Express test case 1 Open first article': function (browser) {
    browser
      .url('http://ekspress.delfi.ee/')
      .waitForElementVisible('body')
      .pause(1000)
      .moveToElement('div[class="navigation-arrow navigation-arrow-right"]', 1, 1)
      .pause(1000)
      .mouseButtonClick(0)
      .pause(3000)
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]', 1, 1)
      .pause(1000)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}express1.png`);
  },
  'Express sidebar first article': function (browser) {
    browser
      .url('http://ekspress.delfi.ee/')
      .waitForElementVisible('body')
      .click('a[class="button menu-button js-toggle-left-menu"]')
      .pause(1000)
      .click('a[href="/arhiiv/"][class="menu-link"]')
      .pause(3000)
      .click('div.archive-item-container:nth-child(3) a')
      .pause(1000)
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]', 1, 1)
      .pause(1000)
      .mouseButtonClick(0)
      .pause(1000)
      .click('a[class="button sidebar-button js-toggle-sidebar"]')
      .pause(1000)
      .moveToElement('div[class="sidebar-item sidebar-item-1"]', 10, 50)
      .pause(1000)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}express2Raudsepp.png`);
  },
  'Express search tallinna polütehnikum': function (browser) {
    browser
      .url('http://ekspress.delfi.ee/')
      .waitForElementVisible('body')
      .click('a[class="button menu-button js-toggle-left-menu"]')
      .pause(1000)
      .click('a[href="/otsing/"][class="menu-link"]')
      .pause(3000)
      .setValue('input[type=text]', ['tallinna polütehnikum', browser.Keys.ENTER])
      .pause(1000)
      .click('div.item.cfx:nth-child(2) a')
      .pause(2000)
      .saveScreenshot(`${config.imgpath(browser)}express3Raudsepp.png`)
      .pause(1000)
      .end();
  },
};
