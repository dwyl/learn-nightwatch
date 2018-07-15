/*
module.exports = {

    beforeEach: function (browser, done) {
        browser.resizeWindow(1280, 800, done);
    },

    'Create a PRO account' : function (browser) {
        browser
            .setCookie({
                name     : 'authomation_tests',
                value    : '1'
            })
            .url('http://debug.pipl.com')
            .useXpath()
            .waitForElementVisible('//*[@id="js-navbar"]/ul/li[1]/div', 500)
            .waitForElementPresent('li.c-smooth-navigation', 500)
            .click('li.c-smooth-navigation')
            .waitForElementVisible('ul li a.icon-search-hover', 500)
            .useXpath()
            .waitForElementVisible('//*[@id="js-navbar"]/ul/li[1]/ul/li[1]/a', 500)
            .click('//*[@id="js-navbar"]/ul/li[1]/ul/li[1]/a')
            .useCss()
            .waitForElementPresent('#root > div > section > div.container > div.c-slider-area-buttons > button', 500)
            .click('#root > div > section > div.container > div.c-slider-area-buttons > button')
            .click('button[class=btn btn-lg btn-blue]')
            client.expect.element('body').to.have.attribute('class').which.contains('Sign up for an account, it takes less than a minute.')
            .setValue('input[placeholder=User full name', 'Kevin Kelber]')
            .setValue('input[placeholder=Invitation will be sent here]', 'yael+96550@pipl.com')
            .setValue('input[type=password]', '123456')
            .click('div[class=recaptcha-checkbox-checkmark]')
            .click('label[for=agree]')
            .click('button[class=pull-left btn btn-lg btn-primary]')
            client.expect.element('body').to.have.attribute('class').which.contains('Just one last thing... We\'ll need your card details');

        browser.expect.element('input[name=ln]').value.to.equal('Kelber');

        browser.expect.element('input[name=fn]').value.to.equal('Kevin');
    }
};
*/