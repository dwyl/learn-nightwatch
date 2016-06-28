var binpath = './node_modules/nightwatch/bin/';

var config = {     // we use a nightwatch.conf.js file so we can include comments and helper functions
  "src_folders": [
    "test/e2e"     // we use /test as the name of our test directory by default. so test/e2e for e2e
  ],
  "output_folder": "./node_modules/nightwatch/reports", // reports (test outcome) output by nightwatch
  "selenium": {
    "start_process": true,
    "server_path": binpath + "selenium.jar",
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : binpath + "chromedriver"
    }
  },
  "test_workers" : {"enabled" : true, "workers" : "auto"}, // perform tests in parallel where possible
  "test_settings": {
    "default": {
      "launch_url": "http://localhost", // we're testing a Public or "staging" site on Saucelabs
      "selenium_port": 80,
      "selenium_host": "ondemand.saucelabs.com",
      "silent": true,
      "screenshots": {
        "enabled": false,
      },
      "username" : "${SAUCE_USERNAME}",     // if you want to use Saucelabs remember to
      "access_key" : "${SAUCE_ACCESS_KEY}", // export your environment variables (see readme)
      "globals": {
        "waitForConditionTimeout": 10000    // wait for content on the page bsauefore continuing
      }
    },
    "local": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "screenshots": {
        "enabled": true,
        "path": "./node_modules/nightwatch/screenshots" // save screenshots taken here
      },
      "globals": {
        "waitForConditionTimeout": 15000 // on localhost sometimes internet is slow so wait...
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            `Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46
            (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3`,
            "--window-size=640,1136" // iphone 5
          ]
        },
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "chromemac": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "platform": "OS X 10.11",
        "version": "47"
      }
    },
    "ie11": {
      "desiredCapabilities": {
        "browserName": "internet explorer",
        "platform": "Windows 10",
        "version": "11.0"
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "platform": "XP",
        "browserName": "firefox",
        "version": "33"
      }
    },
    "internet_explorer_10" : {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "internet explorer",
        "version": "10"
      }
    },
    "android_s4_emulator": {
      "desiredCapabilities": {
        "browserName": "android",
        "deviceOrientation": "portrait",
        "deviceName": "Samsung Galaxy S4 Emulator"
      }
    },
    "iphone_6_simulator": {
      "desiredCapabilities": {
        "browserName": "iPhone",
        "deviceOrientation": "portrait",
        "deviceName": "iPhone 6",
        "platform": "OSX 10.10",
        "version": "8.4"
      }
    }
  }
}
module.exports = config;

var fs = require('fs');
/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 */
fs.stat(binpath + 'selenium.jar', function (err, stat) { // alread downloaded?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(binpath, function(error) {
      if (error) throw new Error(error); // no point continueing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', binpath);
    });
  }
});

var pkg = require('./package.json'); // so we can get the version of the project
GLOBAL.FILECOUNT = GLOBAL.FILECOUNT || '0'; // "global" screenshot file count
var SCREENSHOT_PATH = config.test_settings.local.screenshots.path + '/' + pkg.version + '/';

function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count;
}
// ensure that we increment the number for each screenshot saved
function imgpath () {
  // console.log(GLOBAL.FILECOUNT)
  var FILECOUNT = parseInt(GLOBAL.FILECOUNT, 10) + 1;
  GLOBAL.FILECOUNT = FILECOUNT.toString(); // update the evironment var (must be string)
  try {
  var files = fs.readdirSync(SCREENSHOT_PATH);
  // console.log('files.length:', files.length);
    FILECOUNT = files.length;
  } catch (e) {
    FILECOUNT = 0;
  }
  return SCREENSHOT_PATH + padLeft(FILECOUNT++) + '_';
}
module.exports.imgpath = imgpath;
