const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['RahvaRaamat'],
  before(browser) {
    browser.resizeWindow(1280, 720);
  },
  'Rahvaraamat Assert Title': function (browser) {
    browser
      .url('https://www.rahvaraamat.ee/et')
      .pause(1000)
      .waitForElementVisible('body')
      .saveScreenshot(`${config.imgpath(browser)}rahva1.png`)
      .pause(1000)
      .assert.title('Raamatud, E-raamatud, E-lugerid, Filmid, Muusika | Rahva Raamat')
      .pause(1000)
      .click('a[href="/user/login/et?redirect=https%3A%2F%2Fwww.rahvaraamat.ee%2Fsite%2Fmessage%2Fet&layout=popup#TB_iframe?width=415&height=665"]')
      .waitForElementVisible('div[class="tb_frame"]', 3000)
      .saveScreenshot(`${config.imgpath(browser)}rahva2.png`);
  },
  'Login Page Loads': function (browser) {
    browser
      .url('https://www.rahvaraamat.ee/user/login/et?redirect=https%3A%2F%2Fwww.rahvaraamat.ee%2Fsite%2Fmessage%2Fet&layout=popup')
      .waitForElementVisible('body')
      .assert.title('RahvaRaamat - Login User')
      .setValue('input[type=text]', 'YeetMeez@gmail.com')
      .pause(1000)
      .setValue('input[type=password]', 'Yeet6Meez')
      .pause(3000)
      .click('input[type=submit]')
      .pause(5000)
      .saveScreenshot(`${config.imgpath(browser)}rahva3.png`)
      .assert.containsText('li[class=msg-ok]', 'Oled sisse loginud!')
      .end();
  },
};
