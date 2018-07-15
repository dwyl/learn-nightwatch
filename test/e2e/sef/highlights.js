// This test check the highlights of searched parameters
//
//
// var constants = require('./constants');
//
// module.exports = {
//
//     beforeEach: function (browser, done) {
//         browser.resizeWindow(1280, 800, done);
//     },
//
//     'Username search' : function (browser) {
//         browser
//             .url(constants.sef_url)
//             .setCookie({
//                 name    : 'automation_tests',
//                 value   : '1'
//             })
//         browser.useXpath();
//         browser.waitForElementVisible(constants.pipl_icon_search_page, 200, function () {
//             console.log('Validation of pipl icon')
//         }),
//         browser.expect.element(constants.text_with_the_worlds_largest_people_search_phone_number).text.to.contain('largest people search engine, Pipl is the place to find the person');
//         browser.setValue(constants.name_email_username_or_phone_field, 'hhovenier');
//         browser.keys(browser.Keys.ENTER);
//         browser.expect.element(constants.results_for_multi_person_free_search).text.to.contain('hhovenier');
//         browser.expect.element(constants.results_for_multi_person_free_search).to.have.css('#highlight');
//         browser.pause(3000);
//         browser.end();
//
//     }
// };
