const CONSTANTS = {};

CONSTANTS.PKG = require('./package.json');// so we can get the version of the project
CONSTANTS.BINPATH = './node_modules/nightwatch/bin/'; // change if required
CONSTANTS.SCREENSHOT_PATH = "./node_modules/nightwatch/screenshots/" + CONSTANTS.PKG.version + "/";

module.exports = CONSTANTS;