/*var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'Links and Buttons' : function (browser) {
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
        browser.click(constants.click_request_a_demo_button, function () {
            console.log('Click Request A demo')
        });
        browser.expect.element(constants.validation_request_a_demo_button).to.be.visible;
        browser.click(constants.click_close_button);
        browser.click(constants.select_200_searches_pro_in_search_page);
        //browser.click(constants.select_500_searches_pro_in_search_page);
        browser.click(constants.select_unlimited_searches_pro_in_search_page);
        browser.click(constants.click_get_started_button, function () {
            browser.expect.element(constants.text_valid_sign_up_pro_title).text.to.contain('Sign up for an account, it takes less than a minute.');
            browser.click(constants.click_close_button);
        });
        browser.click(constants.continue_with_the_free_version_button, function () {
            console.log('Continue with the free version button')
        });
        browser.expect.element(constants.text_with_the_worlds_largest_people_search_phone_number).to.be.present;
        browser.click(constants.search_button);
        browser.click(constants.click_api_in_search_menu);
        browser.click(constants.api_start_for_free_button);
        //fail from time to time
        // browser.expect.element(constants.text_api_create_your_account).text.to.contain('Create Your Account');
        browser.click(constants.click_close_button);
        browser.click(constants.api_start_for_free_green_button);
        browser.waitForElementVisible(constants.text_api_create_your_account, 3000)
        browser.expect.element(constants.text_api_create_your_account).text.to.contain('Create Your Account');
        browser.click(constants.click_close_button);
        browser.click(constants.api_try_our_live_demo__button);
        browser.expect.element(constants.api_demo_page_title).text.to.equal('Demo');
        browser.setValue(constants.api_email_field_in_demo_page, 'shelly.shir@pipl.com');
        browser.expect.element(constants.api_try_it_button_demo_page).to.not.be.enabled;
        browser.click(constants.api_clear_button_demo_page);
        browser.expect.element(constants.api_email_field_in_demo_page).text.to.equal('');
        browser.click(constants.api_pricing_title_in_menu);
        browser.click(constants.api_premium_data_coverage_switch_button);
        browser.click(constants.api_start_my_free_trail_pricing_page);
        browser.click(constants.click_close_button);
        //contact form from api is not working
        /*browser.click(constants.api_contact_title_in_menu, function () {
            browser.setValue(constants.contact_page_name_field, 'Shell Shir');
            browser.setValue(constants.contact_page_email_field, 'shelly.shir@pipl.com');
            browser.setValue(constants.contact_page_subject_field, 'This is a test');
            browser.click(constants.contact_page_issue_list);
            browser.click(constants.contact_page_issue_technical_support);
            browser.setValue(constants.contact_page_message_field, 'Test from API :)')
            browser.click(constants.contact_page_contact_us_button);
            browser.waitForElementVisible(constants.text_contact_thank_you_contacting_pipl, 3000);
        });*/
        //Not working!
       /* browser.click(constants.search_button);
        //    console.log('Click on API on the top menu');
        browser.click(constants.click_files_in_search_menu, function () {
            browser.expect.element(constants.text_files_fill_blanks_in_your_customer_list).text.to.contain('FILL IN THE BLANKS');
            browser.click(constants.files_get_started_button);
            browser.expect.element(constants.files_drop_your_files_here).text.to.equal('DROP YOUR FILES HERE');
            browser.click(constants.files_upload_file_button);
        });*/
        /*browser.expect.element(constants.text_files_fill_blanks_in_your_customer_list).text.to.contain('FILL IN THE BLANKS');
        browser.click(constants.files_get_started_button);
        browser.expect.element(constants.files_drop_your_files_here).text.to.equal('DROP YOUR FILES HERE');
        browser.click(constants.files_upload_file_button);*/
        //How to check this button?
   /*     browser.click(constants.pipl_icon_files_homepage);
        browser.click(constants.files_get_the_walk_through_button);
        browser.expect.element(constants.files_the_walk_through_video).to.be.present;
        browser.click('/html/body/div[2]/div/div[1]/div/button');
        browser.click(constants.files_get_started_button_end_of_page);
        //browser.expect.element(constants.files_drop_your_files_here).text.to.equal('DROP YOUR FILES HERE');
        //browser.click(constants.files_upload_file_button);
        browser.click(constants.pipl_icon_files_homepage);
        browser.click(constants.files_uploads_title_in_menu);
        //browser.expect.element(constants.files_drop_your_files_here).text.to.equal('DROP YOUR FILES HERE');
        browser.click(constants.files_pricing_title_in_menu);
        browser.expect.element(constants.text_files_getting_people_data_is_easy).to.be.present;
        browser.click(constants.pipl_icon_files_homepage);
        browser.click(constants.files_contact_title_in_menu);
        browser.setValue(constants.contact_page_name_field, 'Shell Shir');
        browser.setValue(constants.contact_page_email_field, 'shelly.shir@pipl.com');
        browser.setValue(constants.contact_page_subject_field, 'This is a test');
        browser.click(constants.contact_page_issue_list);
        browser.click(constants.contact_page_issue_technical_support);
        browser.setValue(constants.contact_page_message_field, 'Test from Files:)')
        browser.click(constants.contact_page_contact_us_button);
        browser.waitForElementVisible(constants.text_contact_thank_you_contacting_pipl, 3000);
        browser.click(constants.search_button);
        browser.click(constants.click_api_in_search_menu);




        browser.end();

    }
};

*/