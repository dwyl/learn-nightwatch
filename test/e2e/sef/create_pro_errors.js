//Done!
/*
var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'Get started - Create PRO account with pipl domain - errors(2)': function (browser) {
        browser
            .url(constants.sef_url)
            .setCookie({
                name: 'automation_tests',
                value: '1'
            })
        browser.useXpath();
        browser.waitForElementVisible(constants.login_button, 500);
        browser.click(constants.search_button, function () {
            console.log('Click on Search')
        });
        browser.click(constants.click_second_search_button, function () {
            console.log('Click on Search #2')
        });
        browser.click(constants.click_get_started_button, function () {
            console.log('Click - GET STARTED button')
        });
        browser.setValue(constants.input_full_name_sign_up_pro, 'shelly', function () {
            console.log('Input NOT a full name')
        });
        browser.click(constants.input_email_pipl_domain_sign_up_pro);
        browser.pause(5000);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Hey, what’s your name?'), function () {
            console.log('Check for not a full name error')
        };
        browser.clearValue(constants.input_full_name_sign_up_pro, function () {
            console.log('Delete full name field')
        });
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Hey, what’s your name?'), function () {
            console.log('Check for empty full name error')
        };
        browser.setValue(constants.input_full_name_sign_up_pro, 'Shelly Shir', function () {
            console.log('Input Full Name')
        });
        browser.click(constants.input_email_pipl_domain_sign_up_pro);
        // browser.expect.element(constants.sign_up_form_errors).to.have.value.not.equals('Hey, what’s your name?');
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('We’ll need a valid email to activate this account'), function () {
            console.log('Check for empty Email error')
        };
        browser.click(constants.input_full_name_sign_up_pro);
        browser.setValue(constants.input_email_pipl_domain_sign_up_pro, 'shelly.shir.com', function () {
            console.log('Input email with no domain')
        });
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('We’ll need a valid email to activate this account'), function () {
            console.log('Check for no domain Email error')
        };
        browser.clearValue(constants.input_email_pipl_domain_sign_up_pro, function () {
            console.log('Delete email field')
        });
        browser.setValue(constants.input_email_pipl_domain_sign_up_pro, 'shelly.shir@sd.fds', function () {
            console.log('Input email with not real domain')
        });
        browser.click(constants.input_full_name_sign_up_pro);
        browser.pause(5000);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Invalid email address, please use a valid service provider.'), function () {
            console.log('Check for not a real domain error')
        };
        browser.clearValue(constants.input_email_pipl_domain_sign_up_pro, function () {
            console.log('Delete email field')
        });
        browser.setValue(constants.input_email_pipl_domain_sign_up_pro, 'shelly.shir@pipl.com', function () {
            console.log('Input exist email')
        });
        browser.click(constants.input_full_name_sign_up_pro);
        browser.pause(5000);
        browser.expect.element(constants.sign_up_form_errors).text.to.contain('Email already exists'), function () {
            console.log('Check for exist Email error')
        };
        //When we use 'Excuse me, but I feel like we\'ve met (your email) before. Try to login into your account.'
        // browser.pause(5000);
        // browser.expect.element(constants.text_valid_sign_up_pro_title).text.to.contain('Sign up for an account, it takes less than a minute.');
        browser.clearValue(constants.input_email_pipl_domain_sign_up_pro, function () {
            console.log('Delete email field')
        });
        browser.setValue(constants.input_email_pipl_domain_sign_up_pro, 'shelly.shir+' + Math.floor((Math.random() * 1000000) + 1) + '@pipl.com', function () {
            console.log('Input valid Email')
        });
        browser.setValue(constants.input_password, 'a123', function () {
            console.log('Input password- shorter than 6')
        });
        browser.click(constants.input_full_name_sign_up_pro);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Sometimes size really does matter. Password should be at least 6 characters'), function () {
            console.log('Check for short password error')
        };
        browser.clearValue(constants.input_password, function () {
            console.log('Delete password field')
        });
        browser.click(constants.input_full_name_sign_up_pro);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Sometimes size really does matter. Password should be at least 6 characters'), function () {
            console.log('Check for short password error')
        };
        browser.setValue(constants.input_password, 'a123456', function () {
            console.log('Input password- grater than 6')
        });
        browser.click(constants.input_full_name_sign_up_pro);
        browser.expect.element(constants.sign_up_form_errors).to.not.be.present;
        browser.clearValue(constants.input_password, function () {
            console.log('Delete password field')
        });
        browser.setValue(constants.input_password, '123456', function () {
            console.log('Input password- equal to 6')
        });
        browser.click(constants.click_create_my_account_button, function () {
            console.log('Click CREATE MY ACCOUNT button')
        });
        browser.useCss;
        browser.expect.element(constants.text_Please_read_and_agree_to_the_terms_Css).text.to.contain('Please read and agree to the terms'), function () {
            console.log('please agree terms error')
        };
        browser.useXpath;
        browser.click(constants.click_accept_terms, function () {
            console.log('Click Accept terms')
        });
        browser.click(constants.click_create_my_account_button, function () {
            console.log('Click CREATE MY ACCOUNT button')
        });
        browser.expect.element(constants.text_Just_one_last_thing_Well_need_your_card_details).text.to.contain('Just one last thing... We\'ll need your card details').after(7000);
        browser.click(constants.input_name_on_card, function () {
            console.log('click name_on_card field')
        });
        browser.click(constants.input_address);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Hey, we’ll need that'), function () {
            console.log('Check empty "name on card" error')
        };
        browser.setValue(constants.input_name_on_card, 'S', function () {
            console.log('Input name on card - 1 letter')
        });
        browser.click(constants.input_address);
        browser.expect.element(constants.sign_up_form_errors).text.not.to.equal('Hey, we’ll need that'), function () {
            console.log('No error for name on card field')
        };
        browser.setValue(constants.input_name_on_card, 'helly Shir', function () {
            console.log('Input full name')
        });
        browser.click(constants.input_address);
        browser.expect.element(constants.sign_up_form_errors).text.not.to.equal('Hey, we’ll need that'), function () {
            console.log('No error for name on card field')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[0]).setValue(constants.input_card_number, '12341234', function () {
                    console.log('Input incomplete credit card');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Your card number is incomplete.'), function () {
            console.log('Check incomplete credit card error')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[0]).clearValue(constants.input_card_number , function () {
                    console.log('Empty credit card');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Your card number is incomplete.'), function () {
            console.log('Check empty credit card error')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[0]).setValue(constants.input_card_number, '1234123412341234', function () {
                    console.log('Wrong credit card');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Your card number is invalid.'), function () {
            console.log('Check wrong credit card error')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[0]).clearValue(constants.input_card_number , function () {
                    console.log('Clear credit card field');
                });
            });
        });
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[0]).setValue(constants.input_card_number, '4242424242424242', function () {
                    console.log('Valid credit card');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.not.to.equal('Your card number is invalid.'), function () {
            console.log('No error for credit card field')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[1]).setValue(constants.input_exp_date, '0611', function () {
                    console.log('Input old exp date');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Your card\'s expiration year is in the past.'), function () {
            console.log('error for old exp date')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[1]).clearValue(constants.input_exp_date , function () {
                    console.log('Clear exp date');
                });
            });
        });
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[1]).setValue(constants.input_exp_date, '05', function () {
                console.log('Input part exp date');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Your card\'s expiration date is incomplete.'), function () {
            console.log('error for part exp date')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[1]).clearValue(constants.input_exp_date , function () {
                    console.log('Clear part exp date');
                });
            });
        });
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[1]).setValue(constants.input_exp_date, '9898', function () {
                    console.log('Input invalid exp date');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Your card\'s expiration year is invalid.'), function () {
            console.log('error for invalid exp date')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[1]).clearValue(constants.input_exp_date , function () {
                    console.log('Clear part exp date');
                });
            });
        });
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[1]).setValue(constants.input_exp_date, '0535', function () {
                    console.log('Input valid exp date');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.not.to.equal('Your card\'s expiration year is invalid.'), function () {
            console.log('Input valid exp date - no error')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[2]).setValue(constants.input_cvv, '12', function () {
                    console.log('Input cvv less than 3 digits');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Your card\'s security code is incomplete.'), function () {
            console.log('error for incomplete cvv')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[2]).clearValue(constants.input_cvv , function () {
                    console.log('Clear incomplete cvv');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.equal('Your card\'s security code is incomplete.'), function () {
            console.log('error for empty cvv')
        };
        browser.perform(function() {
            browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
                browser.useCss();
                browser.frame(frames.value[2]).setValue(constants.input_cvv, '458', function () {
                    console.log('Input cvv of 3 digits');
                });
            });
        });
        browser.frameParent();
        browser.useXpath();
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.not.to.equal('Your card\'s security code is incomplete.'), function () {
            console.log('error for incomplete cvv')
        };
        browser.expect.element(constants.text_make_sure_billing_address_associated_with_your_card).text.to.equal('Make sure to enter the billing address associated with your card');
        browser.click(constants.click_select_country, function () {
            console.log('click select country')
        });
        browser.click(constants.submit_PRO_subscription);
        browser.expect.element(constants.sign_up_form_errors).text.to.contain('Country is required');
        browser.click(constants.click_select_country, function () {
            console.log('click select country')
        });
        browser.click(constants.select_country_with_state, function () {
            console.log('select country with state - US')
        });
        browser.expect.element(constants.sign_up_form_errors).text.to.not.contain('Country is required');
        browser.expect.element(constants.sign_up_form_errors).text.to.contain('State is required');
        browser.click(constants.select_state, function () {
            console.log('select state')
        });
        browser.expect.element(constants.sign_up_form_errors).text.not.to.contain('State is required');
        browser.expect.element(constants.sign_up_form_errors).text.to.contain('We’ll need the billing address');
        browser.setValue(constants.input_city, 'abcity', function () {
            console.log('Input city')
        });
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.contain('We’ll need the billing address');
        browser.setValue(constants.input_address, 'abcd efg', function () {
            console.log('Input address')
        });
        browser.click(constants.input_name_on_card);
        browser.expect.element(constants.sign_up_form_errors).text.to.contain('We’ll need the billing address');
        browser.setValue(constants.input_postal_code, 'abcd', function () {
            console.log('Input letters as postal code - no error')
        });
        browser.click(constants.input_name_on_card);
        browser.pause(5000);
        browser.expect.element(constants.sign_up_form_errors).to.not.be.present;
        browser.clearValue(constants.input_postal_code);
        browser.setValue(constants.input_postal_code, '123452', function () {
            console.log('Input postal code')
        });
        browser.expect.element(constants.validation_enter_promo_code_button).to.be.present;
        browser.click(constants.submit_PRO_subscription, function () {
            console.log('Click activate my subscription')
        });
        browser.expect.element(constants.validation_youre_a_pro_icon).to.be.visibale;
        browser.expect.element(constants.text_youre_a_pro).text.to.contain('You\'re a PRO');
        browser.expect.element(constants.validation_start_searching_like_pro_button).to.be.visibale;
        browser.expect.element(constants.validation_invoice_button).to.be.visibale;
        browser.click(constants.click_close_button);
        browser.end();

    }
};
*/