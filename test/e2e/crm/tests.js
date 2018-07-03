// tests.js
var utils = require('../../pom/utils');

module.exports = {
  '@tags': ['sampletest'],
  'Open the website': function (browser) {
    utils(browser).goToSite();
  },

};
