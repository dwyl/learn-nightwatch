const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['hVharassment'],
  'Hinnavaatlus harassment start': function (browser) {
    // load HV
    browser
      .url('https://www.hinnavaatlus.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}hvLoad.png`)
      .pause(1000)
    // use login link "log in"
      .click('a[class="icon-log-in"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}hvLOGINform.png`)
    // fill username
      .setValue('#loginform-username', 'nightwatch')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}hvLoad_putlogin.png`)
      .pause(1000)
    // fill password and press enter
      .setValue('#loginform-password', ['123456As', browser.Keys.ENTER])
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}hvLoad_loginsuxcess.png`)
      .pause(1000)
    // click 'sullearvutid'
      .click('a[class="dropdown-toggle icon-laptop"]')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}hvsaList.png`)
      .pause(1000)
    // click 'sullearvutid' in drop menu
      .click('a[title="Sülearvutid"]')
      .pause(1000)
    // click on first item in list
      .click('h3[class="product-list-title text-16 roboto regular"]')
    // get input "lisa kommentaar"  logation
      .getLocationInView('input[value="Lisa kommentaar"]')
      .pause(1000)
    // write coment
      .setValue('#productcomment-text', 'HV harassment test done!!!!!!!!!!')
      .pause(1000)
      .saveScreenshot(`${config.imgpath(browser)}hvcomenttext.png`)
    // use input 'lisa kommentaar'
      .click('input[value="Lisa kommentaar"]');


    browser
      .pause(10000)
      .end();
  },
};
