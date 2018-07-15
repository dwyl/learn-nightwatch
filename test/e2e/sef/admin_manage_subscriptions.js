//Need Help!
/*var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    ' Admin of organization manage subscriptions ' : function (browser) {
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
        browser.setValue(constants.input_email_login, 'shelly.shir+subuse@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.expect.element(constants.forgot_password_login_page).to.be.present;
        browser.click(constants.login_button_login_form, function () {
            console.log('Submit login - Login as the admin of organization with active users and subscriptions')
        });
        browser.expect.element(constants.name_email_username_or_phone_field).to.be.present;
        browser.useCss();
        browser.click(constants.user_name_in_user_menu_css);
        browser.useXpath();
        browser.click(constants.subscription_in_user_menu, function () {
            browser.expect.element(constants.add_subscription_button_sub_page).to.be.present;
            browser.expect.element(constants.users_email_sub_page).text.to.contain('shelly.shir+subuse@pipl.com');
            browser.expect.element(constants.users_email_sub_page).text.to.contain('shelly.shir+subuse1@pipl.com');
            browser.click(constants.add_subscription_button_sub_page);
            browser.click(constants.select_200_searches_pro);
            browser.click(constants.select_yearly_subscription, function () {
                console.log('Choose 200 yearly subscription')
            });
        });
            browser.click(constants.click_add_subscription_in_sub_page);
            /*browser.click(constants.assign_subscription_to_new_user);
            browser.setValue(constants.input_full_name_assign_subscription_to_new_user, 'Shelly Shir', function () {
                console.log('Input the name of the new user you want to assign the new subscription')
            });
            browser.setValue(constants.input_email_assign_subscription_to_new_user, 'shelly.shir+\'+Math.floor((Math.random() * 1000000 ) + 1)+\'@pipl.com', function () {
                console.log('Input the email of the new user you want to assign the new subscription')
            });
            browser.setValue(constants.input_password_assign_subscription_to_new_user,'123456', function () {
                console.log()
            })*/
       /*});
        /*browser.click(constants.add_subscription_button_sub_page);
        browser.click(constants.select_200_searches_pro);
        browser.click(constants.select_yearly_subscription), function () {
            console.log('Choose 200 yearly subscription')
        };
        browser.click(constants.click_add_subscription_in_sub_page);
        browser.click(constants.assign_subscription_to_new_user);
        browser.setValue(constants.input_full_name_assign_subscription_to_new_user, 'Shelly Shir', function () {
            console.log('Input the name of the new user you want to assign the new subscription')
        });
        browser.setValue(constants.input_email_assign_subscription_to_new_user, 'shelly.shir+\'+Math.floor((Math.random() * 1000000 ) + 1)+\'@pipl.com', function () {
            console.log('Input the email of the new user you want to assign the new subscription')
        });
        browser.setValue(constants.input_password_assign_subscription_to_new_user,'123456', function () {
            console.log()
        });*/
        //browser.click(constants.click_add_subscription_in_sub_page);
        /*browser.end();
    }
};
*/