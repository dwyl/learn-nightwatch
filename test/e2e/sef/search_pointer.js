// var constants = require('./constants');
//
// module.exports = {
//
//     beforeEach: function (browser, done) {
//         browser.resizeWindow(1280, 800, done);
//     },
//
//     'Search Pointer': function (browser) {
//         browser
//             .url(constants.url_qa_sef2)
//             .setCookie({
//                 name: 'automation_tests',
//                 value: '1'
//             })
//         //free search - sp of a query
//         //****captcha stops the process*****!!
//         browser.useXpath();
//         browser.url(constants.search_pointer_single_match_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.header_person_page_name).text.to.contain('Johnathan Goodwin');
//         browser.url(constants.search_pointer_multiple_person_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.results_for_multi_person_free_search).text.to.contain('Results for your search');
//         browser.url(constants.search_pointer_no_results_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.results_for_no_results).text.to.contain('No Result Found');
//
//         //free search - sp of a person
//         browser.url(constants.search_pointer_person_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.header_person_page_name).text.to.contain('Johnathan Goodwin');
//         browser.url(constants.search_pointer_and_name_query_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('johnathan goodwin');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.header_person_page_name).text.to.contain('Johnathan Goodwin');
//
//             //same with pro
//         browser.click(constants.login_button, function() {
//             console.log('Click Login')
//         });
//         browser.setValue(constants.input_email_login, 'shelly.shir+withsub@pipl.com');
//         browser.setValue(constants.input_password_login, '123456');
//         browser.click(constants.remember_me_checkbox);
//         browser.keys(browser.Keys.ENTER, function () {
//             console.log('Submit login - login to user with active subscription')
//         });
//         //pro - sp of a query
//         browser.url(constants.search_pointer_single_match_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.header_person_page_name).text.to.contain('Johnathan Goodwin');
//         browser.url(constants.search_pointer_multiple_person_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.results_for_multi_person_free_search).text.to.contain('Results for your search');
//         browser.url(constants.search_pointer_no_results_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.results_for_no_results).text.to.contain('No Result Found');
//
//         //pro - sp of a person
//         browser.url(constants.search_pointer_person_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.header_person_page_name).text.to.contain('Johnathan Goodwin');
//         browser.url(constants.search_pointer_and_name_query_url);
//             browser.expect.element(constants.search_field_in_person_page).value.to.contain('johnathan goodwin');
//             browser.expect.element(constants.results_for_person_search_pointer).text.to.contain('Person Search Pointer');
//             browser.expect.element(constants.header_person_page_name).text.to.contain('Johnathan Goodwin');
//
//
//
//
//     }
// };
//
