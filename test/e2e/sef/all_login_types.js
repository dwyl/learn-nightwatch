//Done!
//bug SEF-2646 & element -name of the user.
/*var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'All Login types(15,16)' : function (browser) {
        browser
            .url(constants.sef_url)
            .setCookie({
                name    : 'automation_tests',
                value   : '1'
            })
        browser.useXpath();
        browser.waitForElementVisible(constants.login_button,500);
        browser.expect.element(constants.search_button).to.be.present;
        browser.expect.element(constants.login_button).to.be.present;
        browser.click(constants.login_button);
        browser.waitForElementPresent(constants.pipl_icon_in_login_page, 1000, true);
        browser.setValue(constants.input_email_login, 'shelly.shir+nosub@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.expect.element(constants.forgot_password_login_page).to.be.present;
        browser.click(constants.login_button_login_form, function () {
            console.log('Submit login - login to user with no subscription')
        });
        //browser.expect.element(constants.user_name_in_user_menu).value.to.equal('Test'), function () {
        //   console.log('Log in as a test user')
        //};
        browser.expect.element(constants.text_with_the_worlds_largest_people_search_phone_number).to.be.present;
        browser.expect.element(constants.name_email_username_or_phone_field).to.be.present;
        browser.setValue(constants.name_email_username_or_phone_field, 'Shelly Shir');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.professional_tools).to.not.be.present;
        browser.useCss();
        browser.click(constants.user_name_in_user_menu_css);
        browser.useXpath();
        browser.click(constants.click_sign_out_user_menu);
        browser.waitForElementPresent(constants.login_button, 2000);
        browser.click(constants.login_button);
        browser.waitForElementPresent(constants.pipl_icon_in_login_page, 1000, true);
        browser.setValue(constants.input_email_login, 'shelly.shir+withsub@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.keys(browser.Keys.ENTER, function () {
            console.log('Submit login - login to user with active subscription')
        });
        browser.expect.element(constants.professional_tools).to.be.present;
        browser.useCss();
        browser.click(constants.user_name_in_user_menu_css);
        browser.useXpath();
        browser.click(constants.click_sign_out_user_menu);
        browser.waitForElementPresent(constants.login_button, 2000);
        browser.click(constants.login_button);
        browser.waitForElementPresent(constants.pipl_icon_in_login_page, 1000, true);
        browser.setValue(constants.input_email_login, 'shelly.shir+orgnosub@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.keys(browser.Keys.ENTER, function () {
            console.log('Submit login - login as admin of org with no active subscriptions')
        })
        browser.expect.element(constants.professional_tools).to.not.be.present;
        browser.useCss();
        browser.click(constants.user_name_in_user_menu_css);
        browser.useXpath();
        browser.click(constants.click_sign_out_user_menu);
        browser.waitForElementPresent(constants.login_button, 2000);
        browser.click(constants.login_button);
        browser.waitForElementPresent(constants.pipl_icon_in_login_page, 1000, true);
        browser.setValue(constants.input_email_login, 'shelly.shir+user1oforg@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.keys(browser.Keys.ENTER, function () {
            console.log('Submit login - login as user of org with no active subscriptions')
        });
        browser.expect.element(constants.professional_tools).to.not.be.present;
        browser.useCss();
        browser.click(constants.user_name_in_user_menu_css);
        browser.useXpath();
        browser.click(constants.click_sign_out_user_menu);
        browser.waitForElementPresent(constants.login_button, 2000);
        browser.click(constants.login_button);
        browser.waitForElementPresent(constants.pipl_icon_in_login_page, 1000, true);
        browser.setValue(constants.input_email_login, 'shelly.shir+orgwithsub@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.keys(browser.Keys.ENTER, function () {
            console.log('Submit login - login as organization admin with active subscription')
        });
        browser.expect.element(constants.professional_tools).to.be.present;
        browser.useCss();
        browser.click(constants.user_name_in_user_menu_css);
        browser.useXpath();
        browser.click(constants.click_sign_out_user_menu);
        browser.waitForElementPresent(constants.login_button, 2000);
        browser.click(constants.login_button);
        browser.waitForElementPresent(constants.pipl_icon_in_login_page, 1000, true);
        //bug SEF-2646
        /*browser.setValue(constants.input_email_login, 'shelly.shir+userorgwithsub@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.keys(browser.Keys.ENTER, function () {
            console.log('Submit login - login as user of organization with active subscription')
        });
        browser.expect.element(constants.professional_tools).to.be.present;*/
    /*    browser.end();
    }
};*/
