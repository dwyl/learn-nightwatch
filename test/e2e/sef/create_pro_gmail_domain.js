//Done!
/*var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'Get started - Create PRO account with Gmail domain (2)' : function (browser) {
        browser
            .url(constants.sef_url)
            .setCookie({
                name    : 'automation_tests',
                value   : '1'
            })
        browser.useXpath();
        browser.waitForElementVisible(constants.login_button,500);
        browser.click(constants.search_button, function() {
            console.log('Click on Search');
        });
        browser.click(constants.click_second_search_button, function() {
            console.log('Click on Search #2')
        });
        browser.waitForElementVisible(constants.validation_request_a_demo_button, 500, function() {
            console.log('Validation - REQUEST A DEMO')
        });
        browser.waitForElementVisible(constants.validation_get_started_button,500, function() {
            console.log('Validation - GET STARTED button')
        });
        browser.click(constants.click_get_started_button, function() {
            console.log('Click - GET STARTED button')
        });
        browser.click(constants.click_create_my_account_button, function() {
            console.log('Click CREATE MY ACCOUNT button')
        });
        browser.expect.element(constants.text_valid_sign_up_pro_title).text.to.equal('Sign up for an account, it takes less than a minute.');
        browser.expect.element(constants.text_valid_already_have_account_sign_up_modal).text.to.contain('I already have an account').after(1000);
        browser.setValue(constants.input_full_name_sign_up_pro, 'Shelly Shir aaapip2', function() {
            console.log('Input full name')
        });
        browser.setValue(constants.input_email_pipl_domain_sign_up_pro, 'aaapip2+'+Math.floor((Math.random() * 1000000 ) + 1)+'@gmail.com', function() {
            console.log('Input Email- Gmail domain')
        });
        browser.setValue(constants.input_password, '123456', function () {
            console.log('Input password')
        });
        browser.click(constants.click_accept_terms, function () {
            console.log('Accept terms')
        });
        browser.pause(3000);
        browser.click(constants.click_create_my_account_button, function () {
            console.log('Click CREATE MY ACCOUNT button')
        });
        browser.pause(5000);
        browser.expect.element(constants.text_Just_one_last_thing_Well_need_your_card_details).text.to.contain('Just one last thing... We\'ll need your card details').after(5000);
        browser.waitForElementPresent('/html/body/div[5]/div/div[2]/div/div/div[1]/h4', 2000);
        browser.pause(3000);
        browser.setValue(constants.input_name_on_card, 'Shelly Shirkolker', function() {
            console.log('Input Name On Card')
        });
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[0]).setValue(constants.input_card_number, '4242424242424242', function () {
                    console.log('Input CC #');
                });
                browser.frame(null);
                browser.frame(frames.value[2]).setValue(constants.input_cvv, '999', function () {
                    console.log('Input CVV');
                });
                browser.frame(null);
                browser.frame(frames.value[1]).setValue(constants.input_exp_date, '0125', function () {
                    console.log('Input exp date');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.expect.element(constants.text_make_sure_billing_address_associated_with_your_card).text.to.equal('Make sure to enter the billing address associated with your card');
        browser.click(constants.click_select_country, function () {
            console.log('click select country')
        });
        browser.click(constants.select_country_with_state, function () {
            console.log('select country with state')
        });
        browser.click(constants.select_state, function () {
            console.log('select country')
        });
        browser.setValue(constants.input_city, 'abc', function () {
            console.log('Input city')
        });
        browser.setValue(constants.input_address, 'abcd efg', function () {
            console.log('Input address')
        });
        browser.setValue(constants.input_postal_code,Math.floor(Math.random() * 1000000), function () {
            console.log('Input postal code')
        });
        browser.expect.element(constants.validation_enter_promo_code_button).to.be.present;
        browser.click(constants.submit_PRO_subscription, function () {
            console.log('Click activate my subscription')
        });
        browser.waitForElementVisible(constants.text_youre_a_pro,30000);
        browser.expect.element(constants.text_youre_a_pro).to.be.present;
        browser.click(constants.click_close_button);
        browser.end();

    }
};*/