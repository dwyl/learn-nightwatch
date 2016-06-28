var config = require('../../nightwatch.conf.js');

module.exports = {
  before : function (browser) {
    browser.resizeWindow(1136, 640);
  },
  'Demo test GitHub': function (browser) {
    console.log(process.env);
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
      .saveScreenshot(config.imgpath() + 'github_dwyl.png')
      .end();
  }
};
