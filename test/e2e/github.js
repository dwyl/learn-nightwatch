module.exports = {
  'Demo test GitHub' : function (browser) {
    browser
      .url('http://www.github.com/dwyl')   // visit the url
      .waitForElementVisible('body', 1000) // wait for the body to be rendered
      .assert.containsText('.main-content', 'do what you love') // assert contains
      // .waitForElementVisible('button[name=btnG]', 1000)
      .click('.org-module-link')
      // .pause(1000)
      .setValue('input[name=query]', 'Ines')
      .saveScreenshot('reports/github.png')
      .end();
  }
};
