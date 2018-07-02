//done!
//Add all errors
/*var constants = require('./constants');

module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'Free Search' : function (browser) {
        browser
            .url(constants.sef_url)
            .setCookie({
                name    : 'automation_tests',
                value   : '1'
            })
        browser.useXpath();
        browser.waitForElementVisible(constants.pipl_icon_search_page, 200, function () {
            console.log('Validation of pipl icon')
        }),
        browser.expect.element(constants.text_with_the_worlds_largest_people_search_phone_number).text.to.contain('largest people search engine, Pipl is the place to find the person');
        browser.setValue(constants.name_email_username_or_phone_field, 'Shelly Shir');
        browser.setValue(constants.Location_field, 'Israel', function () {
            console.log('Search for Shelly Shir, Israel')
        });
        browser.keys(browser.Keys.ENTER);
        browser.pause(5000);
        browser.expect.element(constants.search_by_field_fn).value.to.equal('Shelly');
        browser.expect.element(constants.search_by_field_ln).value.to.equal('Shir');
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.contain('Shelly Shir, Israel'), function () {
            console.log('Result for shelly shir, israel')
        };
        browser.click(constants.more_option_of_search_by);
        browser.expect.element(constants.search_by_field_phone).to.be.visible;
        browser.expect.element(constants.search_by_field_username).to.be.visible;
        browser.expect.element(constants.search_by_field_email).to.be.visible;
        browser.expect.element(constants.search_by_field_location).to.be.visible;
        browser.expect.element(constants.search_by_field_mn).to.be.visible;
        browser.expect.element(constants.text_valid_possibly_related_results).text.to.equal('Possibly Related Results');
        browser.expect.element(constants.all_locations_of_search_by).text.to.equal('All Locations');
        browser.expect.element(constants.all_ages_of_search_by).text.to.equal('All Ages');
        browser.click(constants.first_result_of_search);
        browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.equal('Shelly Shir');
        browser.expect.element(constants.linkedin_icon).to.be.visible;
        browser.expect.element(constants.result_for_the_searched_name).text.to.equal('Shelly Shir');
        browser.clearValue(constants.search_field_in_person_page, function () {
            console.log('Delete full name field')
        });
        browser.clearValue(constants.location_field_in_person_page, function () {
            console.log('Delete location field')
        });
        browser.setValue(constants.search_field_in_person_page, 'Kevin Allen Kelber'), function () {
            console.log('Search for Kevin Allen Kelber')
        };
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.phone_icon_in_summary).to.be.visible;
        browser.expect.element(constants.twitter_icon).to.be.visible;
        browser.expect.element(constants.linkedin_icon).to.be.visible;
        browser.expect.element(constants.white_pages_icon).to.be.visible;
        browser.click(constants.address_in_person_page);
        browser.expect.element(constants.map_of_kevin_kelber_address).to.be.visible;
        browser.click(constants.phone_of_kevin_kelber, function () {
            console.log('Click on the phone number of kevin kelber')
        });
        browser.expect.element(constants.search_by_field_phone).value.to.contain('919-676-6927');
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.contain('919-676-6927'), function () {
            console.log('Result for +1 919-676-6927')
        };
        browser.expect.element(constants.search_field_in_person_page).value.to.contain('919-676-6927');
        browser.expect.element(constants.map_phone_information_in_person_page).to.be.visible;
        browser.click(constants.more_option_of_search_by);
        browser.clearValue(constants.search_by_field_phone);
        browser.setValue(constants.search_by_field_fn, 'Yuri');
        browser.setValue(constants.search_by_field_ln, 'Ritvin');
        browser.click('//*[@id="deepnc"]'), function () {
            console.log('Search for Yuri Ritvin')
        };
        browser.expect.element(constants.search_by_field_ln).value.to.equal('Ritvin');
        browser.click(constants.israel_in_search_by_locations);
        browser.expect.element(constants.location_field_in_person_page).value.to.contain('Israel');
        browser.expect.element(constants.linkedin_icon).to.be.visible, function () {
            console.log('Linkdin icon in yuri profile page')
        };
        browser.expect.element(constants.career_in_person_page).text.to.contain('Full Stack Developer at Pipl, inc. (since 2015)');
        browser.expect.element(constants.results_for_single_person).to.be.visible;
        browser.expect.element('//div[@id=\'profile_summary\']/ul[@class=\'summary-brief group\']/li').text.to.contain('Tel Aviv, Israel');
        browser.clearValue(constants.search_field_in_person_page);
        browser.setValue(constants.search_field_in_person_page, 'Garth Moulton'), function () {
            console.log('Search for Garth Moulton')
        };
        browser.keys(browser.Keys.ENTER);
        browser.click(constants.more_option_of_search_by);
        browser.setValue(constants.search_by_field_mn, 'Burton');
        browser.keys(browser.Keys.ENTER);
        browser.waitForElementVisible(constants.text_valid_the_search_in_profile_summary,200);
        browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.equal('Garth Burton Moulton');
        browser.expect.element(constants.gender_in_summary_in_person_page).text.to.equal('Male');
        browser.expect.element(constants.twitter_icon).to.be.visible;
        browser.expect.element(constants.linkedin_icon).to.be.visible;
        browser.expect.element(constants.facebook_icon).to.be.visible;
        browser.expect.element(constants.google_icon).to.be.visible;
        browser.expect.element(constants.email_icon_in_summary).text.to.not.equal('EMAILS'), function () {
            console.log('Email is not shown in free search')
        };
        browser.expect.element(constants.phone_of_kevin_kelber).text.to.not.contain('+1 415-254-9431\n' +'(Mobile)'), function () {
            console.log('Mobile phone is not shown in the free search')
        };
        //the last two are not console logged?
        browser.clearValue(constants.search_field_in_person_page);
        browser.setValue(constants.search_field_in_person_page, 'Patricia G Davis', function () {
            console.log('Search Patricia G Davis, Virginia')
        });
        browser.setValue(constants.location_field_in_person_page, 'Virginia');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.text_sorry_invalid_or_missing_error_freesearch).text.to.equal('Sorry, the location is invalid');
        browser.clearValue(constants.location_field_in_person_page);
        browser.setValue(constants.location_field_in_person_page, 'Virginia');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.equal('Results for Patricia G Davis, Virginia, United States');
        browser.expect.element(constants.check_box_location_virginia).to.be.visible;
        browser.click(constants.check_box_31_to_40_ages);
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.equal('Results for Patricia Davis, 30-40 years old, Virginia, United States');
        browser.expect.element(constants.check_box_41_to_50_ages).to.not.be.present;
        browser.expect.element(constants.search_by_field_fn).value.to.equal('Patricia');
        browser.expect.element(constants.search_by_field_ln).value.to.equal('Davis');
        browser.click(constants.first_result_of_search);
        browser.expect.element(constants.results_for_icons_in_person_page).text.to.contain('Patricia Davis');
        browser.expect.element(constants.results_for_icons_in_person_page).text.to.contain('38 years old');
        browser.expect.element(constants.results_for_icons_in_person_page).text.to.contain('Laura Dolan');
        browser.expect.element(constants.results_for_icons_in_person_page).text.to.contain('T W Robinette');
        browser.expect.element(constants.results_for_icons_in_person_page).text.to.contain('Trish Davis');
        browser.expect.element(constants.gender_in_summary_in_person_page).text.to.equal('Female');
        browser.clearValue(constants.search_field_in_person_page);
        browser.clearValue(constants.location_field_in_person_page);
        browser.setValue(constants.search_field_in_person_page, 'Tom Raz');
        browser.keys(browser.Keys.ENTER);
        browser.click(constants.brazil_in_search_by_locations);
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.equal('Results for Tom Raz, Brazil');
        browser.expect.element(constants.text_valid_possibly_related_results).to.be.visible;
        browser.clearValue(constants.search_by_field_fn);
        browser.clearValue(constants.search_by_field_ln);
        browser.setValue(constants.search_by_field_fn, 'isno');
        browser.setValue(constants.search_by_field_ln, 'one', function () {
            console.log('search for no result page')
        });
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.text_no_result_found_for).text.to.equal('No Result Found for Isno One, Brazil');
        browser.clearValue(constants.search_field_in_person_page);
        browser.clearValue(constants.location_field_in_person_page);
        browser.clearValue(constants.search_by_field_fn);
        browser.clearValue(constants.search_by_field_ln);
        browser.click(constants.more_option_of_search_by);
        browser.setValue(constants.search_by_field_phone, '14802868447', function () {
            console.log('Search by the phone of Tom Raz')
        });
        browser.click('//*[@id="deepnc"]');
        browser.expect.element(constants.map_phone_information_in_person_page).to.be.visible;
        browser.expect.element(constants.facebook_icon).to.be.visible, function () {
            console.log('Expect element facebook icon')
        };
        browser.expect.element(constants.text_valid_possibly_related_results).to.be.visible;
        browser.expect.element(constants.search_by_field_phone).value.to.contain('480-286-8447', '+1 480-286-8447');
        browser.clearValue(constants.search_field_in_person_page);
        browser.clearValue(constants.location_field_in_person_page);
        browser.setValue(constants.location_field_in_person_page, '19545404548');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.text_sorry_invalid_or_missing_error_freesearch).text.to.be.equal('Sorry, required search parameters are missing');
        browser.clearValue(constants.location_field_in_person_page);
        browser.setValue(constants.search_field_in_person_page, '19545404548');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.contain('Results for 954-540-4548', 'Results for +1 954-540-4548');
        browser.click(constants.second_result_of_search);
        browser.expect.element(constants.phone_icon_in_summary).to.not.be.present;
        browser.expect.element(constants.associated_with_icon_in_summary).to.be.present;
        browser.expect.element('//div[contains(@class,"field_label")]').text.to.contain('LOCATION:');
        browser.click(constants.address_of_maurice_in_person_page);
        browser.expect.element(constants.map_of_maurice_faucher_address).to.be.visible;
        browser.expect.element(constants.results_for_icons_in_person_page).text.to.contain('Maurice Faucher');
        browser.expect.element(constants.results_for_icons_in_person_page).text.to.contain('Pompano Beach, Florida');
        browser.clearValue(constants.search_field_in_person_page);
        browser.setValue(constants.search_field_in_person_page, '13106664379');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.be.equal('Results for 310-666-4379','Results for +1 310-666-4379');
        browser.expect.element(constants.search_by_field_phone).value.to.contain('310-666-4379','+1 310-666-4379');
        browser.clearValue(constants.search_by_field_phone);
        browser.setValue(constants.search_by_field_phone, '19042603677');
        browser.click('//*[@id="deepnc"]');
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.be.equal('Results for 904-260-3677','Results for +1 904-260-3677');
        browser.expect.element(constants.search_by_field_phone).value.to.contain('904-260-3677','+1 904-260-3677');
        browser.expect.element(constants.search_field_in_person_page).value.to.contain('904-260-3677');
        browser.clearValue(constants.search_field_in_person_page);
        browser.setValue(constants.search_field_in_person_page, '15184575342');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.text_valid_possibly_related_results).text.to.contain('No results found for 518-457-5342. Showing possibly related results');
        browser.expect.element(constants.search_by_field_phone).value.to.contain('518-457-5342');
        browser.expect.element(constants.search_by_field_username).text.to.equal('');
        browser.clearValue(constants.search_by_field_phone);
        browser.click(constants.more_option_of_search_by);
        browser.setValue(constants.search_by_field_username, 'wjimmey@aol.com');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.text_sorry_invalid_or_missing_error_freesearch).text.to.equal('Sorry, username should be at least 3 chars long and not contain any spaces');
        browser.click(constants.more_option_of_search_by);
        browser.clearValue(constants.search_by_field_username);
        browser.clearValue(constants.search_field_in_person_page);
        browser.setValue(constants.search_field_in_person_page, 'wjimmey@aol.com');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.search_field_in_person_page).value.to.contain('wjimmey@aol.com');
        browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.be.equal('Dianne Louise Williamson');
        browser.expect.element(constants.gender_in_summary_in_person_page).text.to.equal('Female');
        browser.expect.element(constants.additional_names_icon_in_summary).to.be.visible;
        browser.clearValue(constants.search_field_in_person_page);
        browser.setValue(constants.search_field_in_person_page, 'test@yahoo.com');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.equal('Results for test@yahoo.com');
        browser.expect.element(constants.search_by_field_email).value.to.equal('test@yahoo.com');
        browser.clearValue(constants.search_by_field_email)
        browser.setValue(constants.search_by_field_email, 'bbitty65@gmail.com');
        browser.click('//*[@id="deepnc"]');
        browser.expect.element(constants.text_no_result_found_for).text.to.equal('No Result Found for bbitty65@gmail.com');
        browser.expect.element(constants.text_suggestion_for_no_result_page).to.be.visible;
        browser.expect.element(constants.search_by_field_email).value.to.equal('bbitty65@gmail.com');
        browser.clearValue(constants.search_by_field_email);
        browser.setValue(constants.search_by_field_email, 'shelly.d.shir'), function () {
            console.log('search UserName in Email field')
        };
        browser.click('//*[@id="deepnc"]');
        browser.expect.element(constants.text_sorry_invalid_or_missing_error_freesearch).text.to.equal('Sorry, the provided email is not valid');
        browser.clearValue(constants.search_by_field_email);
        browser.click(constants.more_option_of_search_by);
        browser.setValue(constants.search_by_field_username, 'shelly.d.shir');
        browser.click('//*[@id="deepnc"]');
        browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.equal('Shelly Dahan Shir');
        browser.expect.element(constants.gender_in_summary_in_person_page).text.to.equal('Female');
        browser.expect.element(constants.facebook_icon).to.be.visible;
        browser.expect.element(constants.text_valid_possibly_related_results).to.be.visible;
        browser.expect.element(constants.associated_with_icon_in_summary).to.be.visible;
        browser.clearValue(constants.search_by_field_username);
        browser.setValue(constants.search_by_field_username, 'allan88');
        browser.click('//*[@id="deepnc"]');
        browser.expect.element(constants.results_for_multi_person_free_search).text.to.equal('Results for allan88');
        browser.expect.element(constants.first_result_of_search).text.to.contain('(allan88)');
        browser.expect.element(constants.second_result_of_search).text.to.contain('(allan88)');
        browser.clearValue(constants.search_field_in_person_page);
        browser.setValue(constants.search_field_in_person_page, 'njcnd3');
        browser.keys(browser.Keys.ENTER);
        browser.expect.element(constants.text_no_result_found_for).text.to.equal('No Result Found for njcnd3');
        browser.expect.element(constants.search_by_field_username).value.to.equal('njcnd3');
        browser.expect.element(constants.text_suggestion_for_no_result_page).to.be.present;
        browser.end();

    }
};
*/