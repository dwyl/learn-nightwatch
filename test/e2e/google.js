const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open google': function (browser) {
    // load google
    browser
      .url('https://www.google.ee/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}google1.png`);

    // search kassid
    browser
      .setValue('#lst-ib', ['cat', browser.Keys.ENTER])
      .saveScreenshot(`${config.imgpath(browser)}google2.png`)
      .pause(10000)
      .saveScreenshot(`${config.imgpath(browser)}google3.png`)
      .assert.containsText('body', 'cat')
      .end();
  },
};
