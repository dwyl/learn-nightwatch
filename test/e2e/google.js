module.exports = {
  // before : function (browser) {
  //   browser.resizeWindow(640, 960);
  // },
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .saveScreenshot(GLOBAL.IMGPATH() + 'google_home.png')
      .setValue('input[type=text]', 'nights watch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night\'s Watch')
      .saveScreenshot(GLOBAL.IMGPATH() + 'google_result.png')
      .end();
  }
};
