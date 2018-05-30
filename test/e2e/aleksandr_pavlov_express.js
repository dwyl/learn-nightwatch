const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['express'],
  'case 1': function (browser) {
    browser
      .url('http://ekspress.delfi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .resizeWindow(1280, 800)
      .saveScreenshot(`${config.imgpath(browser)}express1_1.png`)
      .pause(1000)

      .click('div[class="start-reading-label"]')
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]', 1, 1)
      .pause(1000)
      .mouseButtonClick(0)
      .saveScreenshot(`${config.imgpath(browser)}express1_2.png`)
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}express1_3.png`);

    browser
      .pause(10000)
      .end();
  },

  'case 2': function (browser) {
    browser
      .url('http://ekspress.delfi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .resizeWindow(1280, 800)
      .saveScreenshot(`${config.imgpath(browser)}express2_1.png`)
      .pause(1000)
      .click('a[class="button menu-button js-toggle-left-menu"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}express2_2.png`)
      .pause(1000)
      .useXpath()
      .click("//*[contains(text(),'ARHIIV')]")
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}express2_3.png`)
      .click('(//a[@class="archive-item issue-downloaded-link lazyload-added"])[3]')
      .pause(1000)
      .useCss()
      .saveScreenshot(`${config.imgpath(browser)}express2_4.png`)
      .moveToElement('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]', 1, 1)
      .pause(1000)
      .mouseButtonClick(0);

    browser
      .pause(10000)
      .end();
  },

  'case 3': function (browser) {
    browser
      .url('http://ekspress.delfi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .resizeWindow(1280, 800)
      .saveScreenshot(`${config.imgpath(browser)}express3_1.png`)
      .pause(1000)
      .click('a[class="button menu-button js-toggle-left-menu"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}express3_2.png`)
      .pause(1000)
      .useXpath()
      .click("//*[contains(text(),'OTSING')]")
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}express3_3.png`)
      .pause(1000)
      .useCss()
      .setValue('input[type="text"]', ['tallinna polütehnikum', browser.Keys.ENTER])
      .pause(1000);


    browser
      .pause(10000)
      .end();
  },
};
