var utils = require('../../nightwatch.conf.js');

module.exports = {
  'Search Engine Test' : function (browser) {
    browser
      .url('https://duckduckgo.com/')
      .waitForElementVisible('body')
      .saveScreenshot(utils.imgpath() + 'duckduckgo_home.png')
      .setValue('input[type=text]', 'nights watch')
      .waitForElementVisible('input[type=submit]')
      .click('input[type=submit]')
      .pause(1000)
      .assert.containsText('body', 'Night\'s Watch')
      .saveScreenshot(utils.imgpath() + 'duckduckgo_result.png')
      .moveToElement('#links', 200, 800)
      .pause(100)
      .saveScreenshot(utils.imgpath() + 'duckduckgo_result_links.png')
      .end();
  }
};
