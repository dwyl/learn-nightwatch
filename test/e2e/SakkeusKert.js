var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['Eesti Exspress'],
  'case_1': function(browser) {
    browser
      .resizeWindow(1920, 1080)
      .url('http://ekspress.delfi.ee/') 
      .waitForElementVisible('body') 
      .saveScreenshot(config.imgpath(browser) + '1.png') 
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover-start-reading"]', 1, 1)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '2.png')
      .pause(1000)
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]', 1, 1)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '3.png')
      .end();
  },
  'case_2': function(browser) {
    browser
      .resizeWindow(1920, 1080)
      .url('http://ekspress.delfi.ee/') 
      .waitForElementVisible('body') 
      .saveScreenshot(config.imgpath(browser) + '1.png') 
      .moveToElement('a[class="button menu-button js-toggle-left-menu"]', 1, 1)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '2.png')
      .click('a[href="/arhiiv/"][class="menu-link"]')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '3.png')
      .click('div.archive-item-container:nth-child(3) a')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '4.png')
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]', 1, 1)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '5.png')
      .moveToElement('a[class="button sidebar-button js-toggle-sidebar"]', 1, 1)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '6.png')
      .moveToElement('div[class="sidebar-item sidebar-item-1"]', 10, 50)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '7.png')
      .end();
  },
  'case_3': function(browser) {
    browser
      .resizeWindow(1920, 1080)
      .url('http://ekspress.delfi.ee/') 
      .waitForElementVisible('body') 
      .saveScreenshot(config.imgpath(browser) + '1.png') 
      .moveToElement('a[class="button menu-button js-toggle-left-menu"]', 1, 1)
      .mouseButtonClick(0)
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '2.png')
      .click('a[href="/otsing/"][class="menu-link"]')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '3.png')
      .setValue('input[type="text"]', ['tallinna polütehnikum', browser.Keys.ENTER])
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '4.png')
      .click('div.item.cfx:nth-child(2) a')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + '5.png')
      .end();
  }
};