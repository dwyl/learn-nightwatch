/*var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'Search Kevin Kelber' : function (browser) {
        browser
            .url(constants.url_qa_sef1)
            .setCookie({
                name    : 'automation_tests',
                value   : '1'
            });
        browser.useXpath();
        browser.waitForElementPresent(constants.validation_Name_Email_Username_Or_Phone_field, 1000);
        browser.waitForElementPresent(constants.validation_Location_field, 1000);
        browser.setValue(constants.validation_Name_Email_Username_Or_Phone_field, 'Kevin Kelber');
        browser.keys(browser.Keys.ENTER);
        browser.waitForElementPresent(constants.text_valid_Search_By, 1000);
        browser.expect.element(constants.validation_search_by_field_ln).value.to.equal('Kelber');
        browser.expect.element(constants.validation_search_by_field_fn).value.to.equal('Kevin');
        browser.expect.element('/html/body[@class=\' en\']/div[@class=\'o-main\']/div[@id=\'sidebar\']/form[@id=\'advanced_search_form\']').to.be.visible;

        browser.expect.element('/html/body[@class=\' en\']/div/div/div/div[@class=\'title-header\']').to.equal('Results for Kevin Kelber');
        browser.click('//*[@id="match_results"]/div[2]/div[1]/div[2]/div[1]/a/span[2]');
        console.log("ok")
        browser.end();

  }
};
*/