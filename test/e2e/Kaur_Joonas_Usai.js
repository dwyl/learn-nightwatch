var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['telia'],
  'Open telia': function(browser) {
    // load telia
    browser
      .url('https://sso.telia.ee/sso2/cdcservlet?RequestID=1b31de6ee9421ba36ac98c2bd13ab5474f2b0644&IssueInstant=2018-05-03T23%3A25%3A43%2B03%3A00&MajorVersion=1&MinorVersion=0&ProviderID=https%3A%2F%2Fwww.online.ee%3A443%2F%3FRealm%3D%2F&RelayState=02704288da623b8792d2d945c660979b4e58e33f&goto=https%3A%2F%2Fwww.online.ee%2FinitSSO.php&loginURI=login_suhtlus.jsp&mpPrefix=https%3A%2F%2Fwww.online.ee%2F&lang=1')
      .pause(1000)
      .waitForElementVisible('body')
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'telia.png');
    
    //npm run test "Folder Path(test/e2e/'name')"
    // click
    browser
        .assert.visible('#email')
        .assert.visible('[type="password"]')
        .pause(1000)
        .setValue('#email', 'proov9999@online.ee')
        .pause(1000)
        .setValue('[type="password"]','Testcase1')
        .pause(1000)
        .click('#login')
        .pause(1000)
        .waitForElementVisible('body')
        .pause(2500)
        .saveScreenshot(config.imgpath(browser) + 'telia.png')
        .pause(2000)
        .click('.common-label-sendNewMail')
        .pause(2000)
        .setValue('#newmailToForm','proov9999@online.ee')
        .setValue('#newmaiSubjectForm','Kohe saad spammi')
        .setValue('#editor-newmailContentForm','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?')
        .saveScreenshot(config.imgpath(browser) + 'telia.png')
        .pause(1000)
        .click('.newmailSendButton')
        .waitForElementVisible('body')
        .pause(2000)
        .click('#senderLabelMouseOverAction')
        .pause(5000)
        .saveScreenshot(config.imgpath(browser) + 'telia.png')
        .pause(5000)
        .end();

  }
}