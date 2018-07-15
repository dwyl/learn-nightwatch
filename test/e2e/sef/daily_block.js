// var constants = require('./constants');
//
// module.exports = {
//
//     beforeEach: function (browser, done) {
//         browser.resizeWindow(1280, 800, done);
//     },
//
//
//     'daily_block' : function (browser) {
//         browser
//             .url(constants.sef_url)
//             .setCookie({
//                 name    : 'automation_tests',
//                 value   : '1'
//             })
//         browser.useXpath();
//         browser
//             .execute(function (sef_url, window1) {
//                 open(constants.sef_url, 'window1', "height=1280,width=800");
//             }, [constants.sef_url, 'window1']);
//         browser.click(constants.login_button, function() {
//             console.log('Click Login')
//         });
//         browser.setValue(constants.input_email_login, 'shelly.shir+withsub@pipl.com');
//         browser.setValue(constants.input_password_login, '123456');
//         browser.click(constants.remember_me_checkbox);
//         browser.keys(browser.Keys.ENTER, function () {
//             console.log('Submit login - login to user with active subscription')
//         });
//         browser.setValue(constants.name_email_username_or_phone_field, 'Shelly Shir');
//         browser.setValue(constants.Location_field, 'Israel', function () {
//             console.log('Search for Shelly Shir, Israel')
//         });
//         browser.keys(browser.Keys.ENTER);
//         browser.pause(5000);
//         browser.expect.element(constants.search_by_field_fn).value.to.equal('Shelly');
//         browser.expect.element(constants.search_by_field_ln).value.to.equal('Shir');
//         browser.expect.element(constants.results_for_multi_person_pro).text.to.contain('Shelly Shir, Israel'), function () {
//             console.log('Result for shelly shir, israel')
//         };
//         //now we open a second window
//
//         browser
//             .execute(function (sef_url, window2) {
//                 open(constants.sef_url, 'window2', "height=1280,width=800");
//             }, [constants.sef_url, 'window2']);
//         browser.switchWindow('post','window2',function() {
//             console.log('switch to new window')
//         });
//             browser.click(constants.login_button, function() {
//                 console.log('Click Login')
//         });
//             browser.setValue(constants.input_email_login, 'shelly.shir+withsub@pipl.com');
//             browser.setValue(constants.input_password_login, '123456');
//             browser.click(constants.remember_me_checkbox);
//             browser.keys(browser.Keys.ENTER, function () {
//             console.log('Submit login - login to user with active subscription')
//         });
//             browser.setValue(constants.name_email_username_or_phone_field, 'Tom Raz');
//             browser.setValue(constants.Location_field, 'Israel', function () {
//                 console.log('Search for Tom Raz, Israel')
//         });
//             browser.keys(browser.Keys.ENTER);
//         browser.pause(5000);
//         browser.expect.element(constants.search_by_field_fn).value.to.equal('Shelly');
//         browser.expect.element(constants.search_by_field_ln).value.to.equal('Shir');
//         browser.expect.element(constants.results_for_multi_person_free_search).text.to.contain('Shelly Shir, Israel'), function () {
//             console.log('Result for shelly shir, israel')
//         };
//         //now we need to go back to the first window again
//         browser.switchWindow('window2')
//         browser.setValue(constants.name_email_username_or_phone_field, 'Tom Raz');
//         browser.setValue(constants.Location_field, 'Israel', function () {
//             console.log('Search for Tom Raz, Israel')
//         });
//         browser.expect.element(constants.account_is_used_somewhere_else_message).text.to.contain('Oh oh, this account is used somewhere else');
//         browser.end
//
//     }
// };
