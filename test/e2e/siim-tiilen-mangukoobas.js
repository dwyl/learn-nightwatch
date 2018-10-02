const config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['mangukoobas'],
  'mangukoobas': function (browser) {
    browser
      .url('http://mangukoobas.delfi.ee/')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}mangukoobas.png`)
      .click('a[href="/id/5/action/themes/channel/1/"]')
      .pause(3000)
      .saveScreenshot(`${config.imgpath(browser)}mangukoobas.png`)
      .pause(1000)
      .end();
  },
};