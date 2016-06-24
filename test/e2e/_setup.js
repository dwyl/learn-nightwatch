var pkg = require('../../package.json');
var config = require('../../nightwatch.js');
var fs = require('fs');

function padLeft (count) {
  if(count < 10) {
    count = '0' + count;
  }
  return count;
}

module.exports = {
  'Setup' : function (browser) {
    GLOBAL.FILECOUNT = 0;
    GLOBAL.SCREENSHOT_PATH = config.test_settings.local.screenshots.path + '/' + pkg.version + '/';
    // copy the index.html (template) file to the output folder
    fs.createReadStream('./lib/index.html').pipe(fs.createWriteStream(GLOBAL.SCREENSHOT_PATH + 'index.html'));
    console.log('config.test_settings.default.screenshots.path', GLOBAL.SCREENSHOT_PATH);
    GLOBAL.IMGPATH = function () { return GLOBAL.SCREENSHOT_PATH + padLeft(GLOBAL.FILECOUNT++) + '_'; }
    browser.end(); // no tests
  }
};
