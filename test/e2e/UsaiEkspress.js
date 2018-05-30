const config = require('../../nightwatch.conf.js');

module.exports= {
'@tags': ['EestiEkspress1'],
'Eesti Ekspress 1': function(browser){
    browser
    browser.resizeWindow(1920,1080)
    .url('http://ekspress.delfi.ee')
    .waitForElementVisible('body')
    .pause(1000)
    .click('div[class="start-reading-label"]')
    .pause(1000)
    .click('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]')
    //.moveToElement('a[class="navigation-arrow navigation-arrow-right"]',1,1)
    //.click('div[class="next-article-preview"]')
    .pause(1000)
    .end()

    
    },
'Eesti Ekspress 2': function(browser){
    browser
    .url('http://ekspress.delfi.ee')
    .waitForElementVisible('body')
    .pause(1000)
    .click('a[class="button menu-button js-toggle-left-menu"]')
    .pause(1000)
    browser.useXpath().click("//*[contains(text(), 'ARHIIV')]")
    .pause(1000)
    .click('(//a[@class="archive-item issue-downloaded-link lazyload-added"])[3]')
    .pause(1500)
    .click('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]')
    .end()

},
'Eesti Ekspress 3': function(browser){
    browser
    .url('http://ekspress.delfi.ee')
    .waitForElementVisible('body')
    .pause(1000)
    .click('a[class="button menu-button js-toggle-left-menu"]')
    .pause(1000)
    .useXpath().click("//*[contains(text(), 'OTSING')]")
    .pause(1000)
    .useCss()
    .setValue('input[type="text"]','tallinna polütehnikum')
    .pause(2000)
    .click('input[type="submit"')
    .pause(1000)
    .end()
}
};