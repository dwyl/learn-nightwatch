
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
  "test_settings": {
    "default": {
      "launch_url": "www.github.com",
      "selenium_port": 80,
      "selenium_host": "ondemand.saucelabs.com",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
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
    }
  }
}
