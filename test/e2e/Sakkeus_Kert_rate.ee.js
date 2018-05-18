var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['Rate'],
  'Rate.ee 2008 flashbacks': function(browser) {
    browser
      .resizeWindow(1920, 1080)
      .url('http://www.rate.ee/') // Open rate.ee url
      .waitForElementVisible('body') // wait until url body is visible
      .setValue('input[class="in2 clr6 login_username"]', 'PussySlayer2008') // Enter Username 
      .saveScreenshot(config.imgpath(browser) + 'before_click_event.png') // Save screenshot before login in 
      .setValue('input[class="in2 clr6 login_password"]', ['FuckBoy69', browser.Keys.ENTER]) // Enter Password
      .pause(500) // Wait 0.5 seconds
      .saveScreenshot(config.imgpath(browser) + 'after_click_event.png') // Save screenshot after login in
      .url('http://www.rate.ee/control.php') // Open 'my account' tab
      .pause(500) // Wait 0.5 seconds
      .saveScreenshot(config.imgpath(browser) + 'my_account.png') // Save screenshot after 'my account' loaded
      .pause(500) // Wait 0.5 seconds
      .end(); // End Process
  }
};