//This test will check all links and buttons
var utils = require('./utils');
var constants = require('./constants');

module.exports = {

    beforeAll: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
        browser
            .url(constants.sef_url)
            .setCookie({
                name: 'automation_tests',
                value: '1'
            })
        browser.useXpath();
        browser.waitForElementVisible(constants.login_button, 500);
    },
    //
    // 'SEF links and buttons - homepage' : function (browser) {
    //     utils.navigate_search_homepage(browser);
    //     browser.click(constants.click_request_a_demo_button, function () {
    //         console.log('Click Request A demo')
    //     });
    //     browser.expect.element(constants.validation_request_a_demo_button).to.be.visible;
    //     browser.click(constants.click_close_button);
    //     browser.click(constants.select_200_searches_pro_in_search_page);
    //     // browser.click(constants.select_500_searches_pro_in_search_page);
    //     browser.click(constants.select_unlimited_searches_pro_in_search_page);
    //     browser.click(constants.click_get_started_button, function () {
    //         browser.expect.element(constants.text_valid_sign_up_pro_title).text.to.contain('Sign up for an account, it takes less than a minute.');
    //         browser.click(constants.click_close_button);
    //     });
    //     browser.click(constants.continue_with_the_free_version_button, function () {
    //         console.log('Continue with the free version button')
    //     });
    //     browser.expect.element(constants.text_with_the_worlds_largest_people_search_phone_number).to.be.present;
    //     browser.end();
    // },
    //
    // 'SEF links and buttons- Demo from demo tab' : function (browser) {
    //     utils.navigate_search_homepage(browser);
    //     browser.click(constants.sef_demo_title_in_menu, function () {
    //         browser.expect.element(constants.title_of_request_a_demo_form).text.to.equal('Please fill your details and a member of our team will be in touch');
    //         browser.pause(3000);
    //         browser.end();
    //     });
    // },
    //contact from sef homepage take to production
    'SEF links and buttons- Contact page' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.sef_contact_title_in_menu, function () {
            browser.setValue(constants.sef_contact_page_name_field, 'Shell Shir');
            browser.setValue(constants.sef_contact_page_email_field, 'shelly.shir@pipl.com');
            browser.setValue(constants.sef_contact_page_subject_field, 'This is a test');
            browser.click(constants.sef_contact_page_issue_list);
            browser.click(constants.sef_contact_page_issue_technical_support);
            browser.setValue(constants.sef_contact_page_message_field, 'Test from SEF - fom contact tab:)')
            browser.click(constants.sef_contact_page_contact_us_button);
            browser.waitForElementVisible(constants.text_contact_thank_you_contacting_pipl, 3000);
            browser.pause(3000);
            browser.end();
        });
    },

    'API links and buttons - Developers - get started' : function (browser) {
        utils.navigate_api_homepage(browser);
        browser.click(constants.api_developers_title_in_menu, function () {
            browser.click(constants.api_get_started_under_developer_title);
            browser.assert.urlEquals('https://docs.pipl.com/docs/getting-started');
            browser.end();
        });
    },

    'API links and buttons - Developers - Documentation' : function (browser) {
        utils.navigate_api_homepage(browser);
        browser.click(constants.api_developers_title_in_menu, function () {
            browser.click(constants.api_documentation_under_developer_title);
            browser.assert.urlEquals('https://docs.pipl.com/docs/');
            browser.end();
        });
    },

    'API links and buttons - Developers - API Reference' : function (browser) {
        utils.navigate_api_homepage(browser);
        browser.click(constants.api_developers_title_in_menu, function () {
            browser.click(constants.api_api_reference_under_developer_title);
            browser.assert.urlEquals('https://docs.pipl.com/reference/');
            browser.end();
        });
    },
    'API links and buttons - API homepage Demo page and pricing page' : function (browser) {
        utils.navigate_api_homepage(browser, function () {
            browser.click(constants.api_start_for_free_button, function () {
                browser.waitForElementVisible(constants.text_api_create_your_account, 3000);
                browser.expect.element(constants.text_api_create_your_account).text.to.contain('Create Your Account');
                browser.click(constants.click_close_button);
            });
        });
        browser.click(constants.api_start_for_free_green_button, function () {
            browser.waitForElementVisible(constants.text_api_create_your_account, 3000);
            browser.expect.element(constants.text_api_create_your_account).text.to.contain('Create Your Account');
            browser.click(constants.click_close_button);
        });
        browser.click(constants.api_try_our_live_demo__button);
        browser.expect.element(constants.api_demo_page_title).text.to.equal('Demo');
        browser.setValue(constants.api_email_field_in_demo_page, 'shelly.shir@pipl.com');
        browser.expect.element(constants.api_try_it_button_demo_page).to.not.be.selected;
        browser.click(constants.api_clear_button_demo_page);
        browser.expect.element(constants.api_email_field_in_demo_page).text.to.equal('');
        browser.end();
    },

    'API links and buttons - contact us from Pricing page' : function (browser) {
        utils.navigate_api_homepage(browser);
        browser.click(constants.api_pricing_title_in_menu);
        browser.expect.element(constants.api_price_per_match_contact).text.to.contain('0.05');
        browser.click(constants.api_premium_data_coverage_switch_button);
        browser.expect.element(constants.api_price_per_match_contact).text.to.contain('0.10');
        browser.click(constants.api_start_my_free_trail_pricing_page, function () {
            browser.waitForElementVisible(constants.text_api_create_your_account, 3000);
            browser.expect.element(constants.text_api_create_your_account).text.to.contain('Create Your Account');
            browser.click(constants.click_close_button);
        });
        browser.click(constants.api_contact_us_pricing_page, function () {
            browser.setValue(constants.contact_page_name_field, 'Shell Shir');
            browser.setValue(constants.contact_page_email_field, 'shelly.shir@pipl.com');
            browser.setValue(constants.contact_page_subject_field, 'This is a test');
            browser.click(constants.contact_page_issue_list);
            browser.click(constants.contact_page_issue_technical_support);
            browser.setValue(constants.contact_page_message_field, 'Test from API - from pricing page:)')
            browser.click(constants.contact_page_contact_us_button);
            browser.waitForElementVisible(constants.text_contact_thank_you_contacting_pipl, 3000);
            browser.end();
        });
    },

    // Error element is required???
    'API links and buttons - nonprofit organization - community key (from pricing page)' : function (browser) {
        utils.navigate_api_homepage(browser);
        browser.click(constants.api_pricing_title_in_menu);
        browser.click(constants.api_apply_not_profit_organization, function () {
            browser.expect.element(constants.text_apply_for_free_access_to_people_data_api).text.to.equal('Apply now for free access to the People Data API!');
            browser.setValue(constants.name_field_nonprofits_api_form, 'Shelly Shir');
            browser.setValue(constants.email_field_nonprofits_api_form, 'shelly.shir@pipl.com');
            browser.setValue(constants.organization_field_nonprofits_api_form, 'PIPL');
            browser.click(constants.yes_for_tax_exempt_status_nonprofits_api_form);
            browser.setValue(constants.how_you_plan_use_pipls_data_box, 'api test');
            browser.click(constants.apply_for_community_key_button);
            browser.waitForElementVisible(constants.success_community_api_key_form, 3000);
            browser.expect.element(constants.success_community_api_key_form).to.be.visible;
            browser.end();
        });
    },

    'API links and buttons - contact page' : function (browser) {
        utils.navigate_api_homepage(browser);
        browser.click(constants.api_contact_title_in_menu, function () {
            browser.setValue(constants.contact_page_name_field, 'Shell Shir');
            browser.setValue(constants.contact_page_email_field, 'shelly.shir@pipl.com');
            browser.setValue(constants.contact_page_subject_field, 'This is a test');
            browser.click(constants.contact_page_issue_list);
            browser.click(constants.contact_page_issue_technical_support);
            browser.setValue(constants.contact_page_message_field, 'Test from API - from contact page :)')
            browser.click(constants.contact_page_contact_us_button);
            browser.waitForElementVisible(constants.text_contact_thank_you_contacting_pipl, 3000);
            browser.end();
        });
    },

    'FILES links and buttons - Get started' : function (browser) {
        utils.navigate_files_homepage(browser);
        browser.expect.element(constants.text_files_fill_blanks_in_your_customer_list).text.to.contain('FILL IN THE BLANKS');
        browser.click(constants.files_get_started_button), function () {
            browser.expect.element(constants.files_drop_your_files_here).text.to.equal('DROP YOUR FILES HERE');
            browser.end();
        };
    },

    'FILES links and buttons - Get The Walk Through' : function (browser) {
        utils.navigate_files_homepage(browser);
        browser.expect.element(constants.text_files_fill_blanks_in_your_customer_list).text.to.contain('FILL IN THE BLANKS');
        browser.click(constants.files_get_the_walk_through_button, function () {
            browser.expect.element(constants.files_the_walk_through_video).to.be.present;
            browser.pause(3000);
            browser.end();
        });
    },

    'FILES links and buttons - Get Started in the end of the page' : function (browser) {
        utils.navigate_files_homepage(browser);
        browser.expect.element(constants.text_files_fill_blanks_in_your_customer_list).text.to.contain('FILL IN THE BLANKS');
        browser.click(constants.files_get_started_button_end_of_page, function () {
            browser.expect.element(constants.files_drop_your_files_here).text.to.equal('DROP YOUR FILES HERE');
            browser.pause(3000);
            browser.end();
        });
    },

    'FILES links and buttons - Uploads tab' : function (browser) {
        utils.navigate_files_homepage(browser);
        browser.expect.element(constants.text_files_fill_blanks_in_your_customer_list).text.to.contain('FILL IN THE BLANKS');
        browser.click(constants.files_uploads_title_in_menu, function () {
            browser.expect.element(constants.files_drop_your_files_here).text.to.equal('DROP YOUR FILES HERE');
            browser.pause(3000);
            browser.end();
        });
    },

    'FILES links and buttons - Pricing tab' : function (browser) {
        utils.navigate_files_homepage(browser);
        browser.expect.element(constants.text_files_fill_blanks_in_your_customer_list).text.to.contain('FILL IN THE BLANKS');
        browser.click(constants.files_pricing_title_in_menu, function () {
            browser.expect.element(constants.files_text_getting_people_data_is_easy_and_affordable).text.to.equal('Getting People Data is Easy ...and Affordable.');
            browser.expect.element(constants.files_data_type_and_price_table).to.be.visible;
            browser.pause(3000);
            browser.end();
        });
    },

    'FILES links and buttons - Contact tab' : function (browser) {
        utils.navigate_files_homepage(browser);
        browser.expect.element(constants.text_files_fill_blanks_in_your_customer_list).text.to.contain('FILL IN THE BLANKS');
        browser.click(constants.files_contact_title_in_menu, function () {
            browser.setValue(constants.contact_page_name_field, 'Shell Shir');
            browser.setValue(constants.contact_page_email_field, 'shelly.shir@pipl.com');
            browser.setValue(constants.contact_page_subject_field, 'This is a test');
            browser.click(constants.contact_page_issue_list);
            browser.click(constants.contact_page_issue_technical_support);
            browser.setValue(constants.contact_page_message_field, 'Test from API - from pricing page:)')
            browser.click(constants.contact_page_contact_us_button);
            browser.waitForElementVisible(constants.text_contact_thank_you_contacting_pipl, 3000);
            browser.pause(3000);
            browser.end();
        });
    },

    'Footer - Connect - Terms' : function (browser) {
            utils.navigate_search_homepage(browser);
            browser.click(constants.footer_terms, function () {
                browser.expect.element(constants.text_terms_and_privacy_pages_title).text.to.contain('Terms of Service');
            })
        },

    'Footer - Connect - Privacy' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_privacy, function () {
            browser.expect.element(constants.text_terms_and_privacy_pages_title).text.to.contain('Privacy Policy');
        })
    },

    'Footer - Connect - Facebook icon' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_facebook_icon, function () {
            browser.pause(5000);
            browser.assert.urlContains('https://www.facebook.com/piplsearch');
        })
    },

    'Footer - Connect - Twitter icon' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_twitter_icon, function () {
            browser.assert.urlContains('https://twitter.com/pipl_com');
        })
    },

    'Footer - Connect - Linkedin icon' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_linkedin_icon, function () {
            browser.assert.urlContains('https://www.linkedin.com');
        })
    },

    'Footer - Connect - Google plus icon' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_google_plus_icon, function () {
            browser.assert.urlContains('https://plus.google.com/+Pipldata');
        })
    },

    'Footer - Products - People Search Engine' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_people_search_engine, function () {
            browser.expect.element(constants.validation_request_a_demo_button).to.be.visible;
            browser.pause(3000);
            browser.end();
        })
    },

    'Footer - Products - People Data API' : function (browser) {
            utils.navigate_search_homepage(browser);
            browser.click(constants.footer_people_data_api, function () {
                browser.expect.element(constants.api_start_for_free_button).to.be.visible;
                browser.pause(3000);
                browser.end();
            })
        },

    'Footer - Products - Customer List Enhancement' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_customer_list_enhancement, function () {
            browser.waitForElementPresent(constants.files_get_started_button, 4000);
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - Solutions - Identity Verification' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_identity_verification, function () {
            browser.expect.element(constants.text_title_of_solutions_pages).text.to.contain('Identity data that helps you prevent fraud and sell more');
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - Solutions - Investigations' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_investigations, function () {
            browser.expect.element(constants.text_title_of_solutions_pages).text.to.contain('Cut hours off of your investigations with PIPL');
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - Solutions - Data Enrichment' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_data_enrichment, function () {
            browser.expect.element(constants.text_title_of_solutions_pages).text.to.contain('Turn a single piece of data into an information-packed profile');
            browser.pause(5000);
            browser.end();
        })
    },


    'Footer - Company - About Us' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_about_us, function () {
            browser.expect.element(constants.text_about_us_page_title).text.to.contain('Behind the Scenes');
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - Company - Contact Us' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_contact_us, function () {
            browser.expect.element(constants.sef_contact_page_email_field).to.be.present;
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - Company - Contact Us' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_contact_us, function () {
            browser.expect.element(constants.sef_contact_page_email_field).to.be.present;
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - Company - Careers' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_careers, function () {
            browser.expect.element(constants.text_careers_and_partner_page_title).text.to.contain('Challenging work, great co-workers');
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - Company - Partners' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_partners, function () {
            browser.expect.element(constants.text_careers_and_partner_page_title).text.to.contain('Partner with Pipl');
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - Company - Blog' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_blog, function () {
            browser.expect.element(constants.text_blog_page_title).text.to.contain('Understanding How Personal Data Is Shared');
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - Company - Press' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants.footer_press, function () {
            browser.expect.element(constants.text_press_page_title).text.to.contain('Press Room');
            browser.pause(5000);
            browser.end();
        })
    },

    'Footer - privacy shield certified' : function (browser) {
        utils.navigate_search_homepage(browser);
        browser.click(constants. footer_privacy_shield_certified, function () {
            browser.expect.element(constants.text_terms_and_privacy_pages_title).text.to.contain('Privacy Shield Notice');
            browser.pause(5000);
            browser.end();
        })
    }
};
