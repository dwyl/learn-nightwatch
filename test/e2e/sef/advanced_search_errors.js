//This test check the advanced search form errors and test combination of different fields in any request with the errors we expect to see///
// Done!
//
// var constants = require('./constants');
// var utils = require('./utils');
//
// module.exports = {
//
//     beforeAll: function (browser, done) {
//         browser.resizeWindow(1280, 800, done);
//         browser
//             .url(constants.sef_url)
//             .setCookie({
//                 name: 'automation_tests',
//                 value: '1'
//             })
//         browser.useXpath();
//         utils.login(browser);
//         browser.useCss();
//         browser.click(constants.user_name_in_user_menu_css);
//         browser.useXpath();
//         browser.click(constants.advanced_search_in_user_menu, function () {
//             browser.expect.element(constants.advanced_search_page_title_please_enter_all_names_adress).text.to.contain('Please enter all current and past Names, Address, Phones, Emails, Usernames')
//         });
//     },
//
//     'Empty form Errors' : function (browser) {
//         browser.click(constants.advanced_search_page_search_button);
//         browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//         browser.pause(3000);
//         browser.end();
//     },
//
//     'Names Errors' : function (browser) {
//         ///no last name
//         browser.setValue(constants.input_fn_1_advanced_search_form, 'Shelly');
//         browser.setValue(constants.input_mn_1_advanced_search_form, 'shirkolker');
//         browser.click(constants.advanced_search_page_search_button, function () {
//             browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//             ///last name less than 2 characters
//             browser.setValue(constants.input_ln_1_advanced_search_form, 'l');
//             browser.click(constants.input_emails_1_advanced_search_form);
//             browser.expect.element(constants.advanced_search_form_errors).text.to.equal('Last name must be at least 2 characters long');
//             browser.setValue(constants.input_ln_1_advanced_search_form, 'hir');
//             ///no first name
//             browser.clearValue(constants.input_fn_1_advanced_search_form);
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_form_errors_in_top_of_page).text.to.contain('Error! Sorry, lastname and firstname must be filled');
//             ///first name less than 2 characters
//             browser.setValue(constants.input_fn_1_advanced_search_form, 'f',function () {
//                 browser.click(constants.advanced_search_page_search_button);
//                 browser.expect.element(constants.advanced_search_form_errors).text.to.contain('First name must be at least 2 characters long');
//                 browser.pause(3000);
//                 browser.end();
//             });
//         });
//     },
//
//     'Email Errors' : function (browser) {
//         ///no domain
//         browser.setValue(constants.input_emails_1_advanced_search_form, constants.email_without_domain);
//         browser.expect.element(constants.advanced_search_form_errors).text.to.contain('Invalid Email address');
//         browser.clearValue(constants.input_emails_1_advanced_search_form);
//         ///invalid email
//         browser.setValue(constants.input_emails_1_advanced_search_form, constants.invalid_email);
//         browser.click(constants.advanced_search_page_search_button, function () {
//             browser.expect.element(constants.advanced_search_form_errors_in_top_of_page).text.to.contain('Error! Sorry, the provided email is not valid');
//             browser.pause(2000);
//             ///email without @
//             browser.clearValue(constants.input_emails_1_advanced_search_form);
//             browser.setValue(constants.input_emails_1_advanced_search_form, 'shelly.shircom');
//             browser.click(constants.advanced_search_page_search_button, function () {
//                 browser.expect.element(constants.advanced_search_form_errors).text.to.contain('Invalid Email address');
//                 browser.pause(3000);
//             });
//         });
//         browser.end();
//     },
//
//     'Phone Errors': function (browser) {
//         ///no phone
//         browser.setValue(constants.input_phones_1_country_code_advanced_search_form, '972', function () {
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//             ///no country /incode
//             browser.refresh();
//             browser.setValue(constants.input_phones_1_phone_advanced_search_form, '336-436-0452')
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//             ///invalid phone number
//             browser.refresh();
//             browser.setValue(constants.input_phones_1_country_code_advanced_search_form, '972');
//             browser.setValue(constants.input_phones_1_phone_advanced_search_form, '33643604521221');
//             browser.click(constants.advanced_search_page_search_button)
//             browser.expect.element(constants.advanced_search_form_errors_in_top_of_page).text.to.contain('Sorry, the provided phone is not valid');
//             browser.end();
//         });
//     },
//
//     'Phone Errors - invalid country code': function (browser) {
//         ///invalid country code
//         browser.setValue(constants.input_phones_1_country_code_advanced_search_form, '424322');
//         browser.setValue(constants.input_phones_1_phone_advanced_search_form, '336-436-0452');
//         browser.click(constants.advanced_search_page_search_button);
//         browser.expect.element(constants.advanced_search_form_errors_in_top_of_page).text.to.contain('Sorry, the provided phone is not valid');
//         browser.pause(3000);
//         browser.end();
//     },
//
//     'Username Errors' : function (browser) {
//         ///spaces in username
//         browser.setValue(constants.input_usernames_advanced_search_form, 'shelly shir', function () {
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_form_errors_in_top_of_page).text.to.contain('Sorry, username should be at least 3 chars long and not contain any spaces');
//             ///email as username
//             browser.clearValue(constants.input_usernames_advanced_search_form);
//             browser.setValue(constants.input_usernames_advanced_search_form, 'shelly@pipl.com');
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_form_errors_in_top_of_page).text.to.contain('Sorry, username should be at least 3 chars long and not contain any spaces');
//             ///username less than 3 chars
//             browser.clearValue(constants.input_usernames_advanced_search_form);
//             browser.setValue(constants.input_usernames_advanced_search_form, 'sh');
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_form_errors).text.to.contain('Username must be at least 3 characters long');
//             browser.pause(3000);
//             browser.end();
//         });
//     },
//
//     'Address Errors' : function (browser) {
//         ///no house number
//         browser.setValue(constants.input_address_street_advanced_search_form, 'Whitehall Way', function () {
//             browser.click(constants.input_address_city_advanced_search_form);
//             browser.keys("Cary, North Carolina");
//             browser.waitForElementVisible('//*[@id="react-select-2--option-0"]', 5000);
//             browser.keys(browser.Keys.ENTER);
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//             browser.pause(3000);
//             browser.end();
//         });
//     },
//
//     'Address Errors- no street' : function (browser) {
//         ///no street
//         browser.setValue(constants.input_address_house_advanced_search_form, '305');
//         browser.click(constants.input_address_city_advanced_search_form);
//         browser.keys("Cary, North Carolina");
//         browser.waitForElementVisible('//*[@id="react-select-2--option-0"]', 5000);
//         browser.keys(browser.Keys.ENTER);
//         browser.click(constants.advanced_search_page_search_button);
//         browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//         browser.pause(3000);
//         browser.end();
//     },
//
//     'Address Errors- no city,state and country' : function (browser) {
//         ///no city,state and country
//         browser.setValue(constants.input_address_house_advanced_search_form, '305');
//         browser.setValue(constants.input_address_street_advanced_search_form, 'Whitehall Way');
//         browser.click(constants.advanced_search_page_search_button);
//         browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//         browser.pause(3000);
//         browser.end();
//     },
//
//     'Address Errors- invalid address' : function (browser) {
//         ///Invalid address - with real city,state and country
//         browser.setValue(constants.input_address_house_advanced_search_form, 'abcd305', function () {
//             browser.setValue(constants.input_address_street_advanced_search_form, 'Whitere 32i dska');
//             browser.click(constants.input_address_city_advanced_search_form);
//             browser.keys("Vdovichevo, Russia");
//             browser.waitForElementVisible('//*[@id="react-select-2--option-0"]', 5000);
//             browser.keys(browser.Keys.ENTER);
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_form_errors_in_top_of_page).text.to.contain('Sorry, search is not available with the give information. please make sure to fill in, at least, one of the following fields: Name, Email, a valid Phone number AND Country code, Username or a full US address');
//             browser.pause(3000);
//             browser.end();
//         });
//     },
//
//     'Associate Errors' : function (browser) {
//         ///no associate first name - need to fix
//         browser.setValue(constants.input_fn_1_advanced_search_form, 'Dedrick')
//         browser.setValue(constants.input_ln_1_advanced_search_form, 'Beasley');
//         browser.setValue(constants.input_associates_1_ln_advanced_search_form, 'Jasmine', function () {
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_form_errors, 'Last name must be at least 2 characters long');
//             browser.end();
//         });
//
//         //no associate last name
//         //invalid associate first name
//         //invalid associate last name
//     },
//
//     'Education Errors - school without degree' : function (browser) {
//         ///school without degree
//         browser.setValue(constants.input_education_1_school_advanced_search_form, 'New York University', function () {
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//             browser.expect.element(constants.advanced_search_form_errors, 'Educational degree must be at least 2 characters long');
//             browser.pause(3000);
//             browser.end();
//         });
//      },
//
//     'Education Errors - degree without school' : function (browser) {
//         ///degree without school
//         browser.setValue(constants.input_education_1_academic_degree_advanced_search_form, 'Psychiatric Mental Health Nurse Practitioner', function () {
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//             browser.expect.element(constants.advanced_search_form_errors, 'School name must be at least 2 characters long');
//             browser.pause(3000);
//             browser.end();
//         });
//     },
//
//     'Education Errors - Invalid school and degree' : function (browser) {
//         ///Invalid school and degree
//         browser.setValue(constants.input_education_1_academic_degree_advanced_search_form, 'PsychiatricMentalHealthNursePractitioner', function () {
//             browser.setValue(constants.input_education_1_school_advanced_search_form, 'NewYorkUniversity');
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//             browser.pause(3000);
//             browser.end();
//         });
//     },
//
//     'Jobs Errors - Job without organization' : function (browser) {
//         ///Job without organization
//         browser.setValue(constants.input_jobs_1_job_title_advanced_search_form, 'QA', function () {
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//             browser.pause(3000);
//             browser.end();
//         });
//     },
//
//     'Jobs Errors - Job without job title' : function (browser) {
//         ///Job without job title
//         browser.setValue(constants.input_jobs_1_organization_advanced_search_form, 'PIPL');
//         browser.click(constants.advanced_search_page_search_button);
//         browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//         browser.pause(3000);
//         browser.end();
//     },
//
//     'Age Errors - age over 99' : function (browser) {
//         ///age over 99
//         browser.setValue(constants.input_age_advanced_search_form, '100', function () {
//             browser.click(constants.advanced_search_page_search_button);
//             browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//             browser.expect.element(constants.advanced_search_form_errors).text.to.contain('Please provide a valid age,range or date birth. (Only one of them)');
//             browser.pause(3000);
//             browser.end();
//         });
//     },
//
//     'Age Errors-invalid format (1)' : function (browser) {
//         ///invalid format
//         browser.setValue(constants.input_age_advanced_search_form, '20-21-22-23');
//         browser.click(constants.advanced_search_page_search_button);
//         browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//         browser.expect.element(constants.advanced_search_form_errors).text.to.contain('Please provide a valid age,range or date birth. (Only one of them)');
//         browser.pause(3000);
//         browser.end();
//     },
//
//     'Age Errors-invalid format (2)' : function (browser) {
//         ///invalid format
//         browser.setValue(constants.input_age_advanced_search_form, '20-');
//         browser.click(constants.advanced_search_page_search_button);
//         browser.expect.element(constants.advanced_search_error_mandatory_fields).to.be.visible;
//         browser.expect.element(constants.advanced_search_form_errors).text.to.contain('Please provide a valid age,range or date birth. (Only one of them)');
//         browser.pause(3000);
//         browser.end();
//     },
//     };