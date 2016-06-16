module.exports = {
  // before : function (browser) {
  //   browser.resizeWindow(640, 960);
  // },
  'Demo test GitHub' : function (browser) {
    browser
      .url('http://www.github.com/dwyl')   // visit the url
      .waitForElementVisible('body', 1000) // wait for the body to be rendered
      .assert.containsText('.main-content', 'do what you love') // assert contains
      // .waitForElementVisible('button[name=btnG]', 1000)
      .click('.org-module-link')
      .setValue('input[name=query]', 'Ines')
      .pause(1000)
      .saveScreenshot(GLOBAL.IMGPATH() + 'github.png')
      .end();
  }
};
