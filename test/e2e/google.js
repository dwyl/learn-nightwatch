var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['google'],
  'Open google': function(browser) {
    browser
      .url('https://www.google.ee/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'google1.png')
      .end();

  }
}