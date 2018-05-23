// tests.js
var utils = require('./utils');

module.exports = {
  '@tags': ['sampletest'],
  'Open the website': function (browser) {
    utils(browser).goToSite();
  },

  'Go to site and add user and logout': function (browser) {
    utils(browser).joinNow();
    utils(browser).newTestUser();
    utils(browser).mainLogo();
    browser.pause(5000);
    utils(browser).logout();
    browser.end();
  }
};
