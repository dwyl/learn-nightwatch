var utils = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .saveScreenshot(utils.imgpath() + 'google_home.png')
      .setValue('input[type=text]', 'nights watch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night\'s Watch')
      .saveScreenshot(utils.imgpath() + 'google_result.png')
      .end();
  }
};
