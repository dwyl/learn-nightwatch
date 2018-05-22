var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['amazon'],
  'Open amazon': function(browser) {
    // test account
    // ta838303@gmail.com
    // pass6534
    browser
      .url('https://www.amazon.com/ap/signin?_encoding=UTF8&ignoreAuthState=1&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&switch_account=')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'amazonBeforeLogin.png');
    
    browser
        .setValue('#ap_email', 'ta838303@gmail.com')
        .setValue('#ap_password', 'pass6534')
        .click("#signInSubmit")
        .pause(5000)
        .saveScreenshot(config.imgpath(browser) + 'amazonAfterLogin.png')
        .assert.urlContains('?ref_=nav_ya_signin&')
        .end();

  }
}