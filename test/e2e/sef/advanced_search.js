// //This test check the advanced search form and test combination of different fields in any request.//
// // Done!
// //
// var constants = require('./constants');
//
// module.exports = {
//
//     beforeEach: function (browser, done) {
//         browser.resizeWindow(1280, 800, done);
//     },
//
//     'Advanced Search' : function (browser) {
//         browser
//             .url(constants.sef_url)
//             .setCookie({
//                 name: 'automation_tests',
//                 value: '1'
//             })
//         browser.useXpath();
//         browser.waitForElementVisible(constants.login_button, 500);
//         browser.click(constants.login_button);
//         browser.setValue(constants.input_email_login, 'shelly.shir+withsub@pipl.com');
//         browser.setValue(constants.input_password_login, '123456');
//         browser.click(constants.remember_me_checkbox);
//         browser.keys(browser.Keys.ENTER, function () {
//             console.log('Submit login - login to user with active subscription')
//         });
//         browser.useCss();
//         browser.click(constants.user_name_in_user_menu_css);
//         browser.useXpath();
//         browser.click(constants.advanced_search_in_user_menu, function () {
//             browser.expect.element(constants.advanced_search_page_title_please_enter_all_names_adress).text.to.contain('Please enter all current and past Names, Address, Phones, Emails, Usernames')
//         });
//          ////////search of 2 names, 2 emails, username and job
//         browser.setValue(constants.input_fn_1_advanced_search_form, 'Shelly');
//         browser.setValue(constants.input_ln_1_advanced_search_form, 'Shir');
//         browser.click(constants.add_another_name_button);
//         browser.setValue(constants.input_fn_2_advanced_search_form, 'Shelly');
//         browser.setValue(constants.input_ln_2_advanced_search_form, 'Shirkolker');
//         browser.setValue(constants.input_usernames_advanced_search_form, 'shelly707');
//         browser.setValue(constants.input_jobs_1_organization_advanced_search_form, 'pipl');
//         browser.setValue(constants.input_jobs_1_job_title_advanced_search_form, 'qa')
//         browser.setValue(constants.input_emails_1_advanced_search_form, 'Shelly.shir@pipl.com');
//         browser.click(constants.add_another_email_button);
//         browser.setValue(constants.input_emails_2_advanced_search_form, 'shirshelly707@gmail.com');
//         browser.click(constants.advanced_search_page_search_button, function () {
//             browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.equal('Shelly Shir (shelly.shir@pipl.com)');
//             browser.expect.element(constants.search_by_field_fn).value.to.equal('Shelly');
//             browser.expect.element(constants.search_by_field_ln).value.to.equal('Shir');
//         });
//          ////////search of name, email, 2 phones, 2 jobs and address
//         browser.click(constants.advanced_search_button_on_search_page);
//         browser.setValue(constants.input_fn_1_advanced_search_form, 'Kevin');
//         browser.setValue(constants.input_mn_1_advanced_search_form, 'Allen');
//         browser.setValue(constants.input_ln_1_advanced_search_form, 'Kelber');
//         browser.setValue(constants.input_emails_1_advanced_search_form, 'kelber_k@yahoo.com');
//         browser.setValue(constants.input_phones_1_country_code_advanced_search_form, '1');
//         browser.setValue(constants.input_phones_1_phone_advanced_search_form, '336-436-0452');
//         browser.click(constants.add_another_phone_button);
//         browser.setValue(constants.input_phones_2_country_code_advanced_search_form, '1');
//         browser.setValue(constants.input_phones_2_phone_advanced_search_form, '919-946-8647');
//         browser.setValue(constants.input_jobs_1_organization_advanced_search_form, 'LabCorp');
//         browser.setValue(constants.input_jobs_1_job_title_advanced_search_form, 'Project Director');
//         browser.click(constants.add_another_job_button);
//         browser.setValue(constants.input_jobs_2_job_title_advanced_search_form, 'Global Supply Planning Manager');
//         browser.setValue(constants.input_jobs_2_organization_advanced_search_form, 'Cree');
//         browser.setValue(constants.input_address_house_advanced_search_form, '305');
//         browser.setValue(constants.input_address_street_advanced_search_form, 'Whitehall Way');
//         browser.click(constants.input_address_city_advanced_search_form);
//         browser.keys("Cary, North Carolina");
//         browser.waitForElementVisible('//*[@id="react-select-2--option-0"]', 5000);
//         browser.keys(browser.Keys.ENTER);
//         browser.click(constants.advanced_search_page_search_button, function () {
//             browser.expect.element(constants.search_by_field_mn).value.to.equal('Allen');
//             browser.expect.element(constants.search_by_field_job_title).value.to.equal('Project Director');
//             browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.contain('Kevin Allen Kelber (kelber_k@yahoo.com,');
//             browser.expect.element(constants.phones_paragraph_in_mstch_result_page).text.to.contain('919-946-8647');
//         });
//          ////////search of associate, education, 2 jobs and email.
//         browser.click(constants.advanced_search_button_on_search_page);
//         browser.setValue(constants.input_associates_1_fn_advanced_search_form, 'Robert');
//         browser.setValue(constants.input_associates_1_ln_advanced_search_form, 'Roe');
//         browser.setValue(constants.input_education_1_school_advanced_search_form, 'Miami University');
//         browser.setValue(constants.input_education_1_academic_degree_advanced_search_form, 'B.S., Manufacturing Engineering');
//         browser.setValue(constants.input_jobs_1_job_title_advanced_search_form, 'Plant Manager');
//         browser.setValue(constants.input_jobs_1_organization_advanced_search_form, 'Parker Hannifin');
//         browser.click(constants.add_another_job_button);
//         browser.setValue(constants.input_jobs_2_job_title_advanced_search_form, 'Engineer');
//         browser.setValue(constants.input_jobs_2_organization_advanced_search_form, 'swagelok');
//         browser.setValue(constants.input_emails_1_advanced_search_form, 'jeremymorrow@yahoo.com');
//         browser.click(constants.advanced_search_page_search_button);
//         browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.contain('Jeremy Joseph Morrow');
//         browser.expect.element(constants.phones_paragraph_in_mstch_result_page).text.to.contain('334-248-1012');
//         browser.expect.element(constants.search_by_field_email).value.to.equal('jeremymorrow@yahoo.com');
//         browser.expect.element(constants.search_by_field_job_title).value.to.equal('Plant Manager');
//          ////////search of 2 educations, 3 associates, phone and username.
//         browser.click(constants.advanced_search_button_on_search_page);
//         browser.setValue(constants.input_education_1_school_advanced_search_form, 'Mississippi Medical Center');
//         browser.setValue(constants.input_education_1_academic_degree_advanced_search_form, 'Psychiatric Mental Health Nurse Practitioner');
//         browser.click(constants.add_another_education_button);
//         browser.setValue(constants.input_education_2_school_advanced_search_form, 'University of South Alabama');
//         browser.click(constants.input_education_2_academic_degree_advanced_search_form);
//         browser.keys("M.S., Nursing/Executive Administration");
//         browser.keys(browser.Keys.ENTER);
//         browser.setValue(constants.input_associates_1_fn_advanced_search_form, 'Dedrick');
//         browser.setValue(constants.input_associates_1_ln_advanced_search_form, 'Beasley');
//         browser.click(constants.add_another_associates);
//         browser.setValue(constants.input_associates_2_fn_advanced_search_form, 'Jasmine');
//         browser.click(constants.input_associates_2_ln_advanced_search_form);
//         browser.keys('Wilson');
//         browser.keys(browser.Keys.ENTER);
//         browser.click(constants.add_another_associates);
//         browser.setValue(constants.input_associates_3_fn_advanced_search_form, 'Victor');
//         browser.click(constants.input_associates_3_ln_advanced_search_form);
//         browser.keys('Stams');
//         browser.keys(browser.Keys.ENTER);
//         browser.setValue(constants.input_phones_1_country_code_advanced_search_form, '1');
//         browser.setValue(constants.input_phones_1_phone_advanced_search_form, '6019195442');
//         browser.setValue(constants.input_usernames_advanced_search_form, 'robin.williamssanders.7');
//         browser.click(constants.advanced_search_page_search_button, function () {
//             browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.contain('Robin Williams Sanders');
//             browser.expect.element(constants.search_by_field_username).value.to.equal('robin.williamssanders.7');
//         });
//         ////////search of 2 usernames, 2 emails, 2 associates and address
//         browser.click(constants.advanced_search_button_on_search_page);
//         browser.setValue(constants.input_usernames_advanced_search_form, 'hhovenier');
//         browser.click(constants.add_another_username);
//         browser.setValue(constants.input_usernames_2_advanced_search_form, 'helenhwalker');
//         browser.setValue(constants.input_emails_1_advanced_search_form, 'helen.hovenier@gmail.com');
//         browser.click(constants.add_another_email_button);
//         browser.setValue(constants.input_emails_2_advanced_search_form, 'helenannwalker@gmail.com');
//         browser.click(constants.input_address_city_advanced_search_form);
//         browser.keys('Tempe, Arizona');
//         browser.waitForElementVisible('//*[@id="react-select-2--option-0"]', 5000);
//         browser.keys(browser.Keys.ENTER);
//         browser.setValue(constants.input_address_house_advanced_search_form, '1440-1102');
//         browser.setValue(constants.input_address_street_advanced_search_form, 'E Broadway Road');
//         browser.setValue(constants.input_associates_1_fn_advanced_search_form, 'Jessica');
//         browser.setValue(constants.input_associates_1_ln_advanced_search_form, 'Schroeder');
//         browser.click(constants.add_another_associates);
//         browser.setValue(constants.input_associates_2_fn_advanced_search_form, 'Alex');
//         browser.click(constants.input_associates_2_ln_advanced_search_form);
//         browser.keys('Kem');
//         browser.keys(browser.Keys.ENTER);
//         browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.contain('helen.hovenier@gmail.com');
//         browser.expect.element(constants.search_by_field_email).value.to.equal('helen.hovenier@gmail.com');
//         browser.expect.element(constants.search_by_field_username).value.to.equal('hhovenier');
//          /////search of username, 2 phones, 2 emails and 2 associates
//         browser.click(constants.advanced_search_button_on_search_page);
//         browser.setValue(constants.input_usernames_advanced_search_form, 'garth157');
//         browser.setValue(constants.input_phones_1_country_code_advanced_search_form, '1');
//         browser.setValue(constants.input_phones_1_phone_advanced_search_form, '704-910-5601');
//         browser.click(constants.add_another_phone_button);
//         browser.setValue(constants.input_phones_2_country_code_advanced_search_form, '1');
//         browser.setValue(constants.input_phones_2_phone_advanced_search_form, '6502358383');
//         browser.setValue(constants.input_emails_1_advanced_search_form, 'garth.moulton@pipl.com');
//         browser.click(constants.add_another_email_button);
//         browser.setValue(constants.input_emails_2_advanced_search_form, 'gmoult@yahoo.com');
//         browser.setValue(constants.input_associates_1_fn_advanced_search_form, 'Rajan');
//         browser.setValue(constants.input_associates_1_ln_advanced_search_form, 'Madhavan');
//         browser.click(constants.add_another_associates);
//         browser.setValue(constants.input_associates_2_fn_advanced_search_form, 'Jenny');
//         browser.click(constants.input_associates_2_ln_advanced_search_form);
//         browser.keys('Berthiaume');
//         browser.keys(browser.Keys.ENTER);
//         browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.contain('Garth Burton Moulton (garth.moulton@pipl.com ...)');
//         browser.expect.element(constants.phones_paragraph_in_mstch_result_page).text.to.contain('650-235-8383');
//         browser.expect.element(constants.search_by_field_username).value.to.equal('garth157');
//         ///////// search of username , 2 emails, age 2 names
//         browser.click(constants.advanced_search_button_on_search_page);
//         browser.setValue(constants.input_fn_1_advanced_search_form, 'Mike');
//         browser.setValue(constants.input_mn_1_advanced_search_form, 'Jonson');
//         browser.setValue(constants.input_ln_1_advanced_search_form, 'Ii');
//         browser.click(constants.add_another_name_button);
//         browser.setValue(constants.input_fn_2_advanced_search_form, 'Michael');
//         browser.setValue(constants.input_mn_2_advanced_search_form, 'D');
//         browser.setValue(constants.input_ln_2_advanced_search_form, 'Jonson');
//         browser.setValue(constants.input_emails_1_advanced_search_form, 'ajonson2003@yahoo.com');
//         browser.click(constants.add_another_email_button);
//         browser.setValue(constants.input_emails_2_advanced_search_form, 'ajonson2005@yahoo.com');
//         browser.setValue(constants.input_usernames_advanced_search_form, 'michaeldjonson');
//         browser.setValue(constants.input_age_advanced_search_form, '40-60');
//         browser.click(constants.advanced_search_page_search_button);
//         browser.expect.element(constants.text_valid_the_search_in_profile_summary).text.to.contain('ajonson2003@yahoo.com');
//         browser.expect.element(constants.search_by_field_mn).value.to.equal('D');
//         browser.expect.element(constants.search_by_field_username).value.to.equal('michaeldjonson');
//         browser.expect.element(constants.phones_paragraph_in_mstch_result_page).text.to.contain('859-689-7862');
//         browser.pause(3000);
//         browser.end();
//     }
// };
