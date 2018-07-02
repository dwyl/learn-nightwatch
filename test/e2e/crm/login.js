//still not finished, might be deleted in the future

var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'login' : function (browser) {
        browser.url(constants.crm_url);
        browser.end()

        /*
        browser.useXpath();
        browser.waitForElementVisible(constants.input_email_login,50000);
        browser.setValue(constants.input_email_login, 'idan.pur@pipl.com');
        browser.setValue(constants.input_password_login, 'Idan415263');
        browser.click(constants.login_button_login_form);
        browser.pause(3000);
        browser.setValue(constants.search_bar,'8211');
        browser.waitForElementVisible(constants.link_to_userpage_from_search_bar,50000);
        browser.click(constants.link_to_userpage_from_search_bar);
        browser.waitForElementVisible(constants.pro_usage_tab,50000);

        */
    }
};

