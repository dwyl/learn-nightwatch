var utils = require('../../nightwatch.conf.js');

module.exports = {
  before : function (browser) {
    browser.resizeWindow(1136, 640);
  },
  'Demo test GitHub': function (browser) {
    browser
      .url('http://www.github.com/dwyl')   // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
          browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
        }
      });
    // part two:
    browser
      .assert.containsText('body', 'do what you love') // assert contains
      .saveScreenshot(utils.imgpath() + 'github_dwyl.png')
      // .click('.org-module-link')
      // .setValue('input[name=query]', 'Ines')
      // .pause(500)
      //
      // .click('.member-username')
      // .pause(500)
      // .saveScreenshot(utils.imgpath() + 'github_iteles_profile.png')
      // .assert.containsText('.join-date', 'Apr 17, 2013')
      .end();
  }
};
