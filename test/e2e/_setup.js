var pkg = require('../../package.json');
var config = require('../../nightwatch.json');
module.exports = {
  'Setup' : function (browser) {
    GLOBAL.FILECOUNT = 0;
    GLOBAL.SCREENSHOT_PATH = config.test_settings.default.screenshots.path + '/' + pkg.version + '/';
    console.log('config.test_settings.default.screenshots.path', GLOBAL.SCREENSHOT_PATH);
    GLOBAL.IMGPATH = function () { return GLOBAL.SCREENSHOT_PATH + GLOBAL.FILECOUNT++ + '_'; }
    browser.end(); // no tests
  }
};
