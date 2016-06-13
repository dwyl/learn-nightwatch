module.exports = {
  'Demo test GitHub' : function (browser) {
    browser
      .url('http://www.github.com/dwyl')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.main-content', 'do what you love')
      // .waitForElementVisible('button[name=btnG]', 1000)
      .click('.org-module-link')
      // .pause(1000)
      .setValue('input[name=query]', 'Ines')
      .saveScreenshot('github.png')
      .end();
  }
};
