var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'Use Subscription': function (browser) {
        browser
            .url(constants.sef_url)
            .setCookie({
                name: 'automation_tests',
                value: '1'
            })

        //First' we log into our admin.

        browser.useXpath();
        browser.click(constants.login_button, function () {
            console.log('Click Login')
        });
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
            console.log('Enter subscriptions page')
        });

        //after entering the subscription page' we now need to add a new sub.

        browser.expect.element(constants.add_subscription_button_sub_page).to.be.present;
        browser.pause(2000);
        //browser.expect.element(constants.users_email_sub_page2).text.to.contain('shelly.shir+subusetest@pipl.com');
        //browser.expect.element(constants.users_email_sub_page2).text.to.contain('shelly.shir+usesub1@pipl.com');
        browser.click(constants.add_subscription_button_sub_page_when_assign_exist, function() {
            console.log('Open add subscription modal')
        });
        browser.waitForElementPresent(constants.subscription_page_add_sub_title_text, 500);
        browser.pause(2000);
        browser.click(constants.subscription_page_add_sub_modal_200);
        browser.click(constants.subscription_page_add_sub_modal_yearly, function () {
            console.log('Choose 200 yearly subscription')
        });
        browser.click(constants.click_add_subscription_in_sub_page);
        browser.waitForElementPresent(constants.no_assignment_subs_page, 7000);
        browser.click(constants.no_assignment_subs_page);
        browser.click(constants.assign_button_assign_subscription_modal, function() {
            console.log('assign to no one')
        });
        // now we need to assign the subscription to a new and existing users.
        browser.pause(7000);
        browser.moveToElement(constants.subscription_page_first_subscription, 100, 100, function() {
            browser.waitForElementVisible(constants.subscription_page_first_sub_menu, 500, function () {
                browser.click(constants.subscription_page_first_sub_menu, function()  {
                    console.log('Click on first sub menu')
                });
            });
        });
        browser.click(constants.subscription_page_sub_menu_assign_to_another);
        browser.waitForElementVisible(constants.subscription_page_assign_subscription_title, 1000);
        browser.expect.element(constants.subscription_page_assign_subscription_title).text.to.contain('Assign Subscription');
        browser.click(constants.subscription_page_assign_menu_assign_to_a_new_user, function() {
               console.log('Assign to another user')
        });
        browser.pause(5000)
        browser.setValue(constants.input_assign_a_new_user_name, 'Tom Raz', function() {
            console.log('Input name')
        });
        browser.setValue(constants.input_assign_a_new_user_email, 'aaaaa+'+Math.floor((Math.random() * 1000000 ) + 1)+'@pipl.com', function() {
            console.log('Input Email')
        });
        browser.setValue(constants.input_assign_a_new_user_password, '123456', function() {
            console.log('Input password')
        });
        browser.click(constants.assign_button_assign_subscription_modal, function() {
            console.log('Click assign')
        });
        browser.pause(3000);
        browser.click(constants.assign_button_assign_subscription_modal, function() {
            console.log('Click assign')
        });
        browser.pause(14000);
        browser.waitForElementVisible(constants.subscription_page_title_text,500)
        browser.expect.element(constants.subscription_page_first_subscription_assignment).text.to.contain('Tom Raz')
        browser.moveToElement(constants.subscription_page_first_subscription, 100, 100, function() {
            browser.waitForElementVisible(constants.subscription_page_first_sub_menu, 500, function () {
                browser.click(constants.subscription_page_first_sub_menu, function()  {
                    console.log('Click on first sub menu')
                });
            });
        });
        browser.click(constants.subscription_page_sub_menu_assign_to_another);
        browser.waitForElementVisible(constants.subscription_page_assign_subscription_title, 1000);
        browser.expect.element(constants.subscription_page_assign_subscription_title).text.to.contain('Assign Subscription');
        browser.click(constants.subscription_page_assign_menu_assign_to_existing, function() {
            console.log('Assign to an existing user')
        });
        browser.click(constants.subscription_page_assign_menu_assign_to_existing_input);
        browser.click(constants.assign_subscription_modal_exist_user_menu_random_user);
        browser.click(constants.assign_button_assign_subscription_modal, function() {
            console.log('Click assign')
        });
        browser.pause(14000);
        browser.expect.element(constants.subscription_page_second_user_assignment_name).text.to.contain('tom Raz');
//now we revert the assignment so it wont interfere with future tests.
        browser.moveToElement(constants.subscription_page_first_subscription, 100, 100, function() {
            browser.waitForElementVisible(constants.subscription_page_first_sub_menu, 500, function () {
                browser.click(constants.subscription_page_first_sub_menu, function()  {
                    console.log('Click on first sub menu')
                });
            });
        });
        browser.click(constants.subscription_page_sub_menu_assign_to_another);
        browser.waitForElementVisible(constants.subscription_page_assign_subscription_title, 1000);
        browser.expect.element(constants.subscription_page_assign_subscription_title).text.to.contain('Assign Subscription');
        browser.click(constants.subscription_page_assign_menu_assign_to_no_one, function() {
            console.log('Assign to no one')
        });
        browser.click(constants.assign_button_assign_subscription_modal, function() {
            console.log('Click assign')
        });
        browser.pause(10000);
        //now we're checking that we can use the assign subscription buttons without problems.
        browser.click(constants.subscription_page_assign_multiple_subscriptions_top_button, function() {
            console.log('Click assign subscriptions button')
        });
        browser.pause(3000);
        browser.expect.element(constants.assign_multiple_subscriptions_modal_title_text).text.to.contain('Assign multiple subscriptions in one easy step');
        browser.click(constants.assign_multiple_subscriptions_modal_close_button, function() {
            console.log('Close multiple subscription modal')
        });
        browser.click(constants.subscription_page_random_user_assignment, function() {
            console.log('Click on a user assignment button')
        });
        browser.pause(10000);
        browser.expect.element(constants.subscription_page_assign_subscription_title).text.to.contain('Assign Subscription');
        browser.click(constants.assign_subscription_modal_close_button, function() {
            console.log('Close assign subscription modal')
        });

        //so far, everything is working! things checked: add subscription form subscription page, assignments in all forms.
        //next we will test changing and canceling/reactivating a subscription and finally the filter and pagination features. first, upgrade / downgrade.

        browser.moveToElement(constants.subscription_page_first_subscription, 100, 100, function() {
            browser.waitForElementVisible(constants.subscription_page_first_sub_menu, 500, function () {
                browser.click(constants.subscription_page_first_sub_menu, function()  {
                    console.log('Click on first sub menu')
                });
            });
        });
        browser.click(constants.subscription_page_sub_menu_first_change_sub, function() {
            console.log('Click change subscription')
        });
        browser.pause(3000)
            browser.expect.element(constants.text_registration_modal).text.to.contain('Change Subscription');
        browser.pause(1000);
        browser.click(constants.change_subscription_modal_500_searches, function() {
            console.log('Choose 500 searches - upgrade')
        });
        browser.pause(3000)
            browser.expect.element(constants.change_subscription_modal_credit_for_exist_sub).text.to.contain('Credit');
        browser.pause(1000);
        browser.click(constants.change_subscription_modal_unlimited, function() {
            console.log('Choose unlimited upgrade')
        });
            browser.expect.element(constants.change_subscription_modal_credit_for_exist_sub).text.to.contain('Credit');
        browser.pause(1000);
        browser.click(constants.change_subscription_modal_monthly, function() {
            console.log('Choose monthly downgrade')
        });
            browser.expect.element(constants.change_subscription_modal_credit_for_exist_sub).to.not.be.present;
        //YAY! its working!!! now let's check cancelling and reactivating subscriptions.




    }
}




