//Done!
/*
var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'Request a demo' : function (browser) {
        browser
            .url(constants.sef_url)
            .setCookie({
                name    : 'automation_tests',
                value   : '1'
            })
        browser.useXpath();
        browser.waitForElementVisible(constants.login_button,500);
        browser.click(constants.search_button, function() {
            console.log('Click on Search button');
        });
        browser.click(constants.click_second_search_button, function() {
            console.log('Click on Search button #2')
        });
        browser.waitForElementVisible(constants.validation_request_a_demo_button, 500, function() {
            console.log('Validation - REQUEST A DEMO')
        });
        browser.waitForElementVisible(constants.validation_get_started_button,500, function() {
            console.log('Validation - GET STARTED button')
        });
        browser.click(constants.click_request_a_demo_button, function() {
            console.log('Click - REQUEST A DEMO')
        });
        browser.pause(5000);
        browser.setValue(constants.input_full_name_req_demo, 'Shelly Shir', function() {
            console.log('Input full Name')
        });
        browser.setValue(constants.input_email_pipl_domain_req_demo, 'shelly.shir+'+Math.floor((Math.random() * 1000000 ) + 1)+'@pipl.com', function() {
            console.log('Input Email')
        });
        browser.click(constants.input_job_title)
        browser.waitForElementPresent((constants.present_company_name), 500, function() {
            console.log('present Company Name')
        });
        browser.setValue(constants.input_job_title, 'QA', function() {
            console.log('Input Job Title')
        });
        browser.setValue(constants.input_phone_number, '1 5877 854 856', function() {
            console.log('Input Phone Number')
        });
        browser.setValue(constants.input_company_name, 'PIPL', function () {
            console.log('Input Company Name')
        });
        browser.click(constants.click_yes_choose_teams_tool, function() {
            console.log('Click Yes - chooce teams tool')
        });
        browser.click(constants.submit_request_a_demo, function() {
            console.log('Submit - REQUEST A DEMO')
        });
        browser.pause(5000);
        browser.expect.element(constants.text_someone_will_be_in_touch).text.to.equal('Someone will be in touch with you soon.');
        browser.expect.element(constants.text_demo_request_sent).text.to.equal('Demo Request Sent');
        browser.expect.element(constants.validation_finished_icon).to.be.visible;
        browser.end();

    }
};
*/
