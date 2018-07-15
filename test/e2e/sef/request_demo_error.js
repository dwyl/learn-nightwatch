//This will test the errors of request a demo form.
//Done!
// var constants = require('./constants');
//
// module.exports = {
//
//     beforeEach: function (browser, done) {
//         browser.resizeWindow(1280, 800, done);
//     },
//
//     'Request a demo - Errors' : function (browser) {
//         browser
//             .url(constants.sef_url)
//             .setCookie({
//                 name    : 'automation_tests',
//                 value   : '1'
//             })
//         browser.useXpath();
//         browser.waitForElementVisible(constants.login_button,500);
//         browser.click(constants.search_button, function() {
//             console.log('Click on Search button');
//         });
//         browser.click(constants.click_second_search_button, function() {
//             console.log('Click on Search button #2')
//         });
//         browser.waitForElementVisible(constants.validation_request_a_demo_button, 500, function() {
//             console.log('Validation - REQUEST A DEMO')
//         });
//         browser.waitForElementVisible(constants.validation_get_started_button,500, function() {
//             console.log('Validation - GET STARTED button')
//         });
//         browser.click(constants.click_request_a_demo_button, function() {
//             console.log('Click - REQUEST A DEMO')
//         });
//         browser.pause(5000);
//         browser.setValue(constants.input_full_name_req_demo, 'Shelly', function () {
//             console.log('input just first name')
//         });
//         browser.click(constants.input_job_title);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('Hey, what\'s your name');
//         browser.clearValue(constants.input_full_name_req_demo);
//         browser.setValue(constants.input_full_name_req_demo, '764832', function () {
//             console.log('input numbers as first name')
//         });
//         browser.click(constants.input_job_title);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('Hey, what\'s your name');
//         browser.clearValue(constants.input_full_name_req_demo, function () {
//             console.log('Empty first name field')
//         });
//         browser.click(constants.input_job_title);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('Hey, what\'s your name');
//         browser.setValue(constants.input_full_name_req_demo, 'Shelly Shir', function() {
//             console.log('Input full name')
//         });
//         browser.click(constants.input_job_title);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('If you have no job title, just write "none"');
//         browser.setValue(constants.input_email_pipl_domain_req_demo, 'shelly.shirpipl.com', function () {
//             console.log('invalid email error')
//         });
//         browser.click(constants.input_full_name_req_demo);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('We’ll need a valid email to get in touch with you');
//         browser.clearValue(constants.input_email_pipl_domain_req_demo, function () {
//             console.log('Empty email field')
//         });
//         browser.click(constants.input_job_title);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('We’ll need a valid email to get in touch with you');
//         browser.setValue(constants.input_email_pipl_domain_req_demo, 'shelly.shir@pipl.com', function () {
//             console.log('Exist email - no error')
//         });
//         browser.click(constants.input_job_title);
//         browser.expect.element(constants.request_pro_form_errors).text.to.not.equal('We’ll need a valid email to get in touch with you');
//         browser.setValue(constants.input_job_title, '', function() {
//             console.log('Empty job title')
//         });
//         browser.click(constants.input_full_name_sign_up_pro);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('If you have no job title, just write "none"');
//         browser.setValue(constants.input_job_title, 'none 1', function () {
//             console.log('None 1 as job title')
//         });
//         browser.click(constants.input_full_name_req_demo);
//         browser.expect.element(constants.request_pro_form_errors).to.not.be.present;
//         browser.setValue(constants.input_phone_number, 'abc degs', function() {
//             console.log('Input letters as phone number')
//         });
//         browser.click(constants.input_full_name_req_demo);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('Sorry, this doesn\'t seem like a valid phone number');
//         browser.clearValue(constants.input_phone_number);
//         browser.click(constants.input_full_name_req_demo);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('We’ll need a valid phone to get in touch with you');
//         browser.setValue(constants.input_phone_number, '2047095774', function () {
//             console.log('Input valid phone number')
//         });
//         browser.expect.element(constants.request_pro_form_errors).text.to.not.equal('Sorry, this doesn\'t seem like a valid phone number');
//         browser.setValue(constants.input_company_name, '', function () {
//             console.log('Input empay company name')
//         });
//         browser.click(constants.input_full_name_req_demo);
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('If you work for no one, just write "none"');
//         browser.setValue(constants.input_company_name, 'none 2', function () {
//             console.log('Input none 2 as company name')
//         });
//         browser.click(constants.input_full_name_req_demo)
//         browser.expect.element(constants.request_pro_form_errors).to.not.be.present;
//         browser.click(constants.submit_request_a_demo, function() {
//             console.log('Submit - REQUEST A DEMO - without choosing team\'s tool')
//         });
//         browser.expect.element(constants.request_pro_form_errors).text.to.equal('Do you choosing your team\'s tools ?');
//         browser.click(constants.click_no_choose_teams_tool, function() {
//             console.log('Click no - choose teams tool')
//
//             browser.expect.element(constants.request_pro_form_errors).to.not.be.present;
//             browser.click(constants.submit_request_a_demo, function() {
//                 console.log('Submit - REQUEST A DEMO- without decision maker\'s business email and job title')
//             });
//             browser.expect.element(constants.request_pro_form_errors).text.to.contain('We’ll need a valid email to get in touch with you');
//             //why i can't use placeholder as i used before?
//             //can't find decision maker job title field !
//             browser.setValue(constants.input_decision_maker_business_email, 'shelly.shirpipl.com', function () {
//                 console.log('invalid email error')
//             });
//             browser.click(constants.input_full_name_req_demo);
//             browser.expect.element(constants.request_pro_form_errors).text.to.equal('We’ll need a valid email to get in touch with you');
//             browser.clearValue(constants.input_decision_maker_business_email, function () {
//                 console.log('Empty email field')
//             });
//             browser.click(constants.input_job_title);
//             browser.expect.element(constants.request_pro_form_errors).text.to.equal('We’ll need a valid email to get in touch with you');
//             browser.setValue(constants.input_decision_maker_business_email, 'shelly.shir@pipl.com', function () {
//                 console.log('Exist email - no error')
//             });
//             browser.click(constants.input_job_title);
//             browser.expect.element(constants.request_pro_form_errors).text.to.not.equal('We’ll need a valid email to get in touch with you');
//             browser.expect.element(constants.request_pro_form_errors).text.to.equal('If you have no job title, just write "none"');
//             browser.click(constants.submit_request_a_demo, function() {
//                 console.log('Submit - REQUEST A DEMO- without decision maker\'s job title')
//             });
//             browser.expect.element(constants.request_pro_form_errors).text.to.equal('If you have no job title, just write "none"');
//             browser.setValue(constants.input_decision_maker_job_title, '', function() {
//                 console.log('Empty job title')
//             });
//             browser.click(constants.input_job_title);
//             browser.expect.element(constants.request_pro_form_errors).text.to.equal('If you have no job title, just write "none"');
//             browser.setValue(constants.input_decision_maker_job_title, 'none 2', function () {
//                 console.log('None 2 as decision maker\'s job title')
//             });
//             browser.click(constants.input_full_name_req_demo);
//             browser.expect.element(constants.request_pro_form_errors).to.not.be.present;
//             browser.click(constants.submit_request_a_demo, function() {
//                 console.log('Submit - REQUEST A DEMO')
//             });
//         });
//         browser.pause(5000);
//         browser.expect.element(constants.text_someone_will_be_in_touch).text.to.equal('Someone will be in touch with you soon.');
//         browser.expect.element(constants.text_demo_request_sent).text.to.equal('Demo Request Sent');
//         browser.expect.element(constants.validation_finished_icon).to.be.visible;
//         browser.end();
//
//         }
// };

