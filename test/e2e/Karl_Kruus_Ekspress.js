const config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['ekspress'],
  'Open ekspress': function (browser) {
    browser
        .url('http://ekspress.delfi.ee')
        .pause(1000)
        .waitForElementVisible('body')
        .saveScreenshot(`${config.imgpath(browser)}StartCase1.png`)
        .click('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover-start-reading"]')
        .pause(3000)
        .saveScreenshot(`${config.imgpath(browser)}AfterClickingNext1.png`);

    browser
        .url('http://ekspress.delfi.ee')
        .pause(1000)
        .waitForElementVisible('body')
        .saveScreenshot(`${config.imgpath(browser)}StartCase2.png`)
        .click('a[class="button menu-button js-toggle-left-menu"]')
        .pause(1000)
        .saveScreenshot(`${config.imgpath(browser)}AfterOpeningMenu.png`)
        .click('.menu-content div:nth-child(4) a')
        .pause(3000)
        .saveScreenshot(`${config.imgpath(browser)}AfterClickingOnArchiveInMenu.png`)
        .click('.issues-archive > div:nth-of-type(3)')
        .pause(3000)
        .saveScreenshot(`${config.imgpath(browser)}AfterClickingOnAnArchive.png`)
        .click('a[class="navigation-arrow-link navigation-arrow-link-right issue-cover2-start-reading"]')
        .pause(3000)
        .saveScreenshot(`${config.imgpath(browser)}AfterClickingNext2.png`)
        .click('a[class="button sidebar-button js-toggle-sidebar"]')
        .pause(1000)
        .saveScreenshot(`${config.imgpath(browser)}AfterOpeningSideBar.png`)
        .click('div[class="sidebar-item sidebar-item-1"]')
        .pause(3000)
        .saveScreenshot(`${config.imgpath(browser)}AfterClickingOnSideBarArticle.png`);

    browser
        .url('http://ekspress.delfi.ee')
        .pause(1000)
        .waitForElementVisible('body')
        .saveScreenshot(`${config.imgpath(browser)}StartCase3.png`)
        .click('a[class="button menu-button js-toggle-left-menu"]')
        .pause(1000)
        .saveScreenshot(`${config.imgpath(browser)}AfterOpeningMenuCase3.png`)
        .end();
  },
};
