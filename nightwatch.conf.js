
module.exports = { // we use a nightwatch.conf.js file so we can include comments and helper functions
  "src_folders": [
    "test/e2e"     // we use /test as the name of our test directory by default. so test/e2e for e2e
  ],
  "output_folder": "./node_modules/nightwatch/reports", // reports (test outcome) output by nightwatch
  "selenium": {
    "start_process": true,
    "server_path": "nightwatch/selenium.jar",
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : "./node_modules/nightwatch/bin/chromedriver"
    }
  },
  "test_workers" : {"enabled" : true, "workers" : "auto"},
  "test_settings": {
    "sauce": {
      "launch_url": "http://localhost", // we are testing a Public or "staging" site on Saucelabs
      "selenium_port": 80,
      "selenium_host": "ondemand.saucelabs.com",
      "silent": true,
      "screenshots": {
        "enabled": false,
      },
      "username" : "${SAUCE_USERNAME}",     // if you want to use Saucelabs remember to 
      "access_key" : "${SAUCE_ACCESS_KEY}", // export your environment variables (see readme)
      "globals": {
        "waitForConditionTimeout": 10000    // wait for content on the page before continuing
      }
    },
    "default": {
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
            "--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A",
            "--window-size=1200,800"
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

/**
 * selenium-download does exactly what it's name suggests; 
 * downloads (or updates) the version of Selenium (& chromedriver) to your
 * localhost where it will be used by Nightwatch. 
 */
var fs = require('fs');
var binpath = './node_modules/nightwatch/bin';
fs.stat(binpath + '/selenium.jar', function (err, stat) { // alread downloaded?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(binpath, function(error) {
      if (error) throw new Error(error); // no point continueing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', binpath);
    });
  }
});

