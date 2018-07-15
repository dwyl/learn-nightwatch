var constants = require('./constants');

module.exports = {
    login: function (browser) {
        browser.waitForElementVisible(constants.login_button, 2000);
        browser.click(constants.login_button);
        browser.setValue(constants.input_email_login, 'shelly.shir+withsub@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.keys(browser.Keys.ENTER, function () {
            console.log('Submit login - login to user with active subscription')
        });
    },

    login_and_navigate_advanced_search: function (browser) {
        browser.waitForElementVisible(constants.login_button, 500);
        browser.click(constants.login_button);
        browser.setValue(constants.input_email_login, 'shelly.shir+withsub@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.keys(browser.Keys.ENTER);
        browser.useCss();
        browser.click(constants.user_name_in_user_menu_css);
        browser.useXpath();
        browser.click(constants.advanced_search_in_user_menu, function () {
            browser.expect.element(constants.advanced_search_page_title_please_enter_all_names_adress).text.to.contain('Please enter all current and past Names, Address, Phones, Emails, Usernames')
        });
    },

    navigate_search_homepage: function (browser) {
        browser.click(constants.search_button, function() {
            console.log('Click on Search button');
        });
        browser.click(constants.click_second_search_button, function() {
            console.log('Click on Search button #2')
        });
    },

    navigate_api_homepage: function (browser) {
        browser.click(constants.search_button);
        browser.click(constants.click_api_in_search_menu);
    },

    navigate_files_homepage: function (browser) {
        browser.click(constants.search_button);
        browser.click(constants.click_files_in_search_menu);
    }

    // test: function (browser) {
    //     browser.click(constants.search_button);
    //     browser.click(constants.click_api_in_search_menu);
    // }
};