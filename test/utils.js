var pkg = require('../package.json');
var config = require('../nightwatch.js');
var fs = require('fs');

process.env.FILECOUNT = 0;
// process.env.SCREENSHOT_PATH = config.test_settings.local.screenshots.path + '/' + pkg.version + '/';
process.env.SCREENSHOT_PATH = 'reports/screenshots' + '/' + pkg.version + '/';

function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  if(count < 10) {
    count = '0' + count;
  }
  return count;
}
function imgpath () {
  var FILECOUNT = parseInt(process.env.FILECOUNT, 10) + 1;
  process.env.FILECOUNT = FILECOUNT.toString(); // update the evironment var.
  return process.env.SCREENSHOT_PATH + padLeft(FILECOUNT) + '_';
}
module.exports.imgpath = imgpath;
