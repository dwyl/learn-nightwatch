// //done!
// var constants = require('./constants');
//
//  module.exports = {
//
//      beforeEach: function (browser, done) {
//          browser.resizeWindow(1280, 800, done);
//      },
//
//      'Change_Language' : function (browser) {
//          browser
//              .url(constants.url_qa_sef1)
//              .setCookie({
//                  name: 'automation_tests',
//                  value: '1'
//              });
//          browser.useXpath();
//          browser.click(constants.language_menu, function () {
//              console.log('Click on Language Menu');
//          });
//          browser.waitForElementVisible(constants.language_menu_spanish, 500);
//          browser.click(constants.language_menu_spanish, function () {
//              browser.expect.element(constants.text_homepage).text.to.contain('Con el motor de búsqueda de personas más grande del mundo')
//          });
//          browser.click(constants.search_button, function () {
//              console.log('Click on Search Menu');
//          });
//          browser.click(constants.click_second_search_button, function () {
//              console.log('Click on Search Page');
//              browser.waitForElementVisible(constants.validation_request_a_demo_button, 500);
//              browser.expect.element(constants.text_marketing_page).text.to.contain('Búsqueda de Personas para Usuarios de Negocios')
//          });
//          browser.click(constants.validation_get_started_button, function ()  {
//              console.log('Click on Get Started')
//          });
//             browser.waitForElementVisible(constants.text_registration_modal,500);
//             browser.expect.element(constants.text_registration_modal).text.to.contain('Regístrese para obtener una cuenta... tarda menos de un minuto.');
//          browser.click(constants.click_close_button, function() {
//              console.log('Exit Registration Modal')
//          });
//          browser.click(constants.language_menu);
//          browser.click(constants.language_menu_english, function() {
//              console.log('Click on Language Menu - English')
//          });
//          browser.expect.element(constants.text_marketing_page).text.to.contain('People Search for Business Users');
//          browser.click(constants.pipl_icon_marketing_page, function () {
//              console.log('Click on Pipl Logo')
//          });
//          browser.waitForElementVisible(constants.text_homepage, 500);
//          browser.expect.element(constants.text_homepage).text.to.contain('With the world\'s largest people search engine');
//
//
//          //now with portuguese//
//
//          browser.click(constants.language_menu, function () {
//              console.log('Click on Language Menu');
//          });
//          browser.waitForElementVisible(constants.language_menu_portuguese, 500);
//          browser.click(constants.language_menu_portuguese, function () {
//              browser.expect.element(constants.text_homepage).text.to.contain('Com o maior motor de busca de pessoas do mundo')
//          });
//          browser.click(constants.search_button, function () {
//              console.log('Click on Search Menu');
//          });
//          browser.click(constants.click_second_search_button, function () {
//              console.log('Click on Search Page');
//              browser.waitForElementVisible(constants.validation_request_a_demo_button, 500);
//              browser.expect.element(constants.text_marketing_page).text.to.contain('Pesquisa de pessoas para usuários de negócios')
//          });
//          browser.click(constants.validation_get_started_button, function ()  {
//              console.log('Click on Get Started')
//          });
//          browser.waitForElementVisible(constants.text_registration_modal,500);
//          browser.expect.element(constants.text_registration_modal).text.to.contain('Crie uma conta... leva menos de um minuto.');
//          browser.click(constants.click_close_button, function() {
//              console.log('Exit Registration Modal')
//          });
//          browser.click(constants.language_menu);
//          browser.click(constants.language_menu_english, function() {
//              console.log('Click on Language Menu - English')
//          });
//          browser.expect.element(constants.text_marketing_page).text.to.contain('People Search for Business Users');
//          browser.click(constants.pipl_icon_marketing_page, function () {
//              console.log('Click on Pipl Logo')
//          });
//          browser.waitForElementVisible(constants.text_homepage, 500);
//          browser.expect.element(constants.text_homepage).text.to.contain('With the world\'s largest people search engine');
//          browser.end
//  }};
