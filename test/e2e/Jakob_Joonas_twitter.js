var config = require('../../nightwatch.conf.js');
var d = new Date();
var time = d.toLocaleDateString() + " kell: " + d.toLocaleTimeString();
module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['twitter'],
  'Login to twitter': function(browser) {
    browser
      .url('https://twitter.com/login?lang=en')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'twitter1LoggingIn.png')
      .setValue('.js-username-field', "midaiganes5")
      .setValue('.js-password-field', "Midaiganes123")
      .click('button[type="submit"]')
      .waitForElementVisible('body')
      .assert.containsText('a[class="u-textInheritColor js-nav"]', 'midaiganes')
      .pause(2000)
      .setValue('div[name="tweet"]', 'lol keegi testis mind kuupaeval: ' + time)
      .click('span[class="button-text tweeting-text"]')
      .pause(5000)
      .saveScreenshot(config.imgpath(browser) + 'twitter2LoggedIn.png')
      .end();
  }
}