// utils.js

module.exports = function (browser) {
  this.goToSite = function () {
    browser
.windowMaximize()
.url('http://testing.site.com')
.waitForElementVisible('body', 1000);
    return browser;
  };
  this.mainLogo = function () {
    browser
.click('body > nav > a');
    browser.assert.containsText('.style1>strong', 'Testing');
    return browser;
  };
  this.joinNow = function () {
    browser
.click('#join-now-button');
  };
  this.newTestUser = function () {
    browser
.click('#first-name')
.setValue('#first-name', 'test')
.setValue('#last-name', 'automation')
.setValue('#email', 'testautomation@example.com')
.setValue('#password', 'testing1');
  };
  this.logout = function () {
    browser
.click('#customer_logout_link');
  };
  return this;
};
