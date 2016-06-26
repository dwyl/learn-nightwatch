var pkg = require('../package.json');
var config = require('../nightwatch.conf.js');
var fs = require('fs');

process.env.FILECOUNT = 0;
process.env.SCREENSHOT_PATH = 'nightwatch/screenshots' + '/' + pkg.version + '/';

function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count;
}
function imgpath () {
  var FILECOUNT = parseInt(process.env.FILECOUNT, 10) + 1;
  process.env.FILECOUNT = FILECOUNT.toString(); // update the evironment var.
  return process.env.SCREENSHOT_PATH + padLeft(FILECOUNT) + '_';
}
module.exports.imgpath = imgpath;
