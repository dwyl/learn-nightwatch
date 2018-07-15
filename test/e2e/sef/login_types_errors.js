//Need help - need to add automation test = won't show captcha in login.
//This will test all type of login errors - to run this test we need new cookie to cancel the captcha of multiple login (SEF-2671)
// var constants = require('./constants');
//
// module.exports = {
//
//     beforeEach: function (browser, done) {
//         browser.resizeWindow(1280, 800, done);
//     },
//
//     ' Login  - Errors ' : function (browser) {
//         browser
//             .url(constants.sef_url)
//             .setCookie({
//                 name    : 'automation_tests',
//                 value   : '1'
//             })
//         browser.useXpath();
//         browser.waitForElementVisible(constants.login_button,500);
//         browser.expect.element(constants.search_button).to.be.present;
//         browser.expect.element(constants.login_button).to.be.present;
//         browser.click(constants.login_button);
//         browser.waitForElementPresent(constants.pipl_icon_in_login_page, 1000, true);
//         browser.setValue(constants.input_email_login, 'shelly.shir+nosubx@pipl.com', function () {
//             console.log('input not existing email')
//         });
//         browser.setValue(constants.input_password_login, '123456');
//         browser.click(constants.remember_me_checkbox);
//         browser.expect.element(constants.forgot_password_login_page).to.be.present;
//         browser.click(constants.login_button_login_form, function () {
//             console.log('Submit login - Not existing email with password');
//             browser.expect.element(constants.login_email_or_password_not_correct).text.to.equal('The email address and/or password you specified are not correct.');
//         });
//         browser.setValue(constants.input_email_login, 'shelly.shir+nosub@pipl.com', function () {
//             console.log('input correct email')
//         });
//         browser.setValue(constants.input_password_login, '12345');
//         browser.click(constants.remember_me_checkbox);
//         browser.expect.element(constants.forgot_password_login_page).to.be.present;
//         browser.click(constants.login_button_login_form, function () {
//             console.log('Submit login - Correct email with the wrong password')
//         });
//         browser.expect.element(constants.login_email_or_password_not_correct).text.to.equal('The email address and/or password you specified are not correct.');
//         browser.setValue(constants.input_email_login, 'shelly.shir+nosubx@pipl.com', function () {
//             console.log('input correct email')
//         });
//         browser.setValue(constants.input_password_login, '12345');
//         browser.click(constants.remember_me_checkbox);
//         browser.expect.element(constants.forgot_password_login_page).to.be.present;
//         browser.click(constants.login_button_login_form, function () {
//             console.log('Submit login - wrong email and password')
//         });
//         browser.expect.element(constants.login_email_or_password_not_correct).text.to.equal('The email address and/or password you specified are not correct.');
//         browser.setValue(constants.input_email_login, 'shelly.shir+nosub@pipl.com', function () {
//             console.log('input correct email')
//         });
//         browser.setValue(constants.input_password_login, '123456');
//         browser.click(constants.remember_me_checkbox);
//         browser.expect.element(constants.forgot_password_login_page).to.be.present;
//         browser.click(constants.login_button_login_form, function () {
//             console.log('Submit login - correct email and password')
//         });
//         browser.expect.element(constants.text_with_the_worlds_largest_people_search_phone_number).to.be.present;
//         browser.expect.element(constants.name_email_username_or_phone_field).to.be.present;
//         browser.setValue(constants.name_email_username_or_phone_field, 'Shelly Shir');
//         browser.keys(browser.Keys.ENTER);
//         browser.expect.element(constants.professional_tools).to.not.be.present;
//         browser.useCss();
//         browser.click(constants.user_name_in_user_menu_css);
//         browser.useXpath();
//         browser.click(constants.click_sign_out_user_menu);
//         browser.click(constants.login_button);
//         browser.waitForElementPresent(constants.pipl_icon_in_login_page, 1000, true);
//         browser.setValue(constants.input_email_login, '', function () {
//             console.log('input empty email field')
//         });
//         browser.setValue(constants.input_password_login, '', function () {
//             console.log('input empty password field')
//         });
//         browser.click(constants.remember_me_checkbox);
//         browser.click(constants.login_button_login_form, function () {
//             console.log('Submit login - empty fields')
//         });
//         browser.setValue(constants.input_email_login, 'shelly.shir+nosubpipl.com', function () {
//             console.log('input invalid email- no @')
//         });
//         browser.setValue(constants.input_password_login, '123456');
//         browser.click(constants.login_button_login_form, function () {
//             console.log('Submit login - invalid email and correct password')
//         });
//         browser.clearValue(constants.input_email_login);
//         browser.clearValue(constants.input_password_login);
//         browser.setValue(constants.input_email_login, 'shelly.shir+nosubpipl@com', function () {
//             console.log('input invalid email- no domain')
//         });
//         browser.setValue(constants.input_password_login, '123456');
//         browser.click(constants.login_button_login_form, function () {
//             console.log('Submit login - invalid email and correct password')
//         });
//         browser.expect.element(constants.input_email_login).to.have.value.that.equals('');
//         browser.expect.element(constants.input_password_login).to.have.value.that.equals('');
//         browser.end();
//     }
// };
