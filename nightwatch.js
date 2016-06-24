
module.exports = {
  "src_folders": [
    "test/e2e"
  ],
  "output_folder": "reports",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "page_objects_path": "",
  "globals_path": "",
  "selenium": {
    "start_process": false,
    "server_path": "bin/selenium.jar",
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "",
      "webdriver.ie.driver": ""
    }
  },
  // "test_workers" : {"enabled" : true, "workers" : "auto"},
  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 80,
      "selenium_host": "ondemand.saucelabs.com",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "username" : "${SAUCE_USERNAME}",
      "access_key" : "${SAUCE_ACCESS_KEY}",
      "globals": {
        "waitForConditionTimeout": 10000
      }
    },
    "local": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "screenshots": {
        "enabled": true,
        "path": "reports/screenshots"
      },
      "globals": {
        "waitForConditionTimeout": 15000
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
