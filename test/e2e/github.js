var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('http://www.github.com/dwyl')   // visit the url
      .pause(1000)
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
          browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
        }
      })
      .pause(1000);

    // part two:
    browser
      .assert.containsText('body', 'dwyl.com') // assert body contains text
      .pause(1000)
      .saveScreenshot(conf.imgpath(browser) + 'dwyl.png')
      .pause(1000)
      .end();
    }
  };
