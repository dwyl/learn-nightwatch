var constants = require('./constants');

module.exports = {
    login: function (browser) {
        browser.waitForElementVisible(constants.login_button, 500);
        browser.click(constants.login_button);
        browser.setValue(constants.input_email_login, 'shelly.shir+withsub@pipl.com');
        browser.setValue(constants.input_password_login, '123456');
        browser.click(constants.remember_me_checkbox);
        browser.keys(browser.Keys.ENTER, function () {
            console.log('Submit login - login to user with active subscription')
        });
    }
};