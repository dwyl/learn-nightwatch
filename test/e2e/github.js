var utils = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub' : function (browser) {
    browser
      .url('http://www.github.com/dwyl')   // visit the url
      .waitForElementVisible('body') // wait for the body to be rendered
      .assert.containsText('.main-content', 'do what you love') // assert contains
      .click('.org-module-link')
      .setValue('input[name=query]', 'Ines')
      .pause(500)
      .saveScreenshot(utils.imgpath() + 'github_find_ines.png')
      .click('.member-username')
      .pause(500)
      .saveScreenshot(utils.imgpath() + 'github_iteles_profile.png')
      .assert.containsText('.join-date', 'Apr 17, 2013')
      .end();
  }
};
