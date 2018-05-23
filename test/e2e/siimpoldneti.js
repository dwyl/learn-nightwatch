const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['siimpoldneti'],
  before(browser) {
    browser.resizeWindow(1000, 1000);
  },
  'Siim Poldmaaa Neti': function (browser) {
    browser
      .url('https://www.neti.ee/ssoauth/')
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}neti-ee.png`)
      .waitForElementVisible('li[panel-id="email"]', 10000)
      .pause(500)
      .click('li[panel-id="email"]')
      .pause(500)
      .saveScreenshot(`${config.imgpath(browser)}neti-login.png`)
      .setValue('#emailAddress', ['YeetMeez@gmail.com'])
      .pause(500)
      .setValue('input[type="password"]', ['Yeet6Meez', browser.Keys.ENTER])
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}neti-logged-in.png`)
      .pause(1000)
      .assert.containsText('a[href="javascript:void(0)"]', 'Välju')
      .end();
  },
};

