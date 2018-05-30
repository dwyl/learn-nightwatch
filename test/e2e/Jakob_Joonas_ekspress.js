const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['ekspress'],
  'Ekspress, case 1': function (browser) {
    browser
      .url('http://ekspress.delfi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .click('div[class="start-reading-label"]')
      .pause(1000)
      .waitForElementVisible('body')
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]', 1, 1)
      .pause(1000)
      .mouseButtonClick(0)
      .saveScreenshot(`${config.imgpath(browser)}EkspressCase1.png`)
      .end();
  },
  'Ekspress, case 2': function (browser) {
    browser
      .url('http://ekspress.delfi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .click('a[class="button menu-button js-toggle-left-menu"]')
      .pause(1000)
      .click('a[href="/arhiiv/"][class="menu-link"]')
      .pause(1000)
      .waitForElementVisible('body')
      .click('div.archive-item-container:nth-child(3) a')
      .pause(1000)
      .waitForElementVisible('body')
      .click('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]')
      .pause(1000)
      .click('a[class="button sidebar-button js-toggle-sidebar"]')
      .pause(1000)
      .click('div[class="sidebar-item sidebar-item-1"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}EkspressCase2.png`)
      .end();
  },
  'Ekspress, case 3': function (browser) {
    browser
      .url('http://ekspress.delfi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .click('a[class="button menu-button js-toggle-left-menu"]')
      .pause(1000)
      .click('a[href="/otsing/"][class="menu-link"]')
      .pause(1000)
      .waitForElementVisible('body')
      .setValue('input[type="text"]', 'tallinna polütehnikum')
      .pause(1000)
      .click('input[type="submit"]')
      .pause(2000)
      .click('div.item.cfx:nth-child(2) h2')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}EkspressCase3.png`)
      .end();
  },
};

