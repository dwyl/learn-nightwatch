var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .pause(1000)
      .assert.containsText('a[id="i am a link"]', 'i am a link')
      .assert.containsText('a[href="/test-guinea-pig2.html"]', 'i am a link')
      .pause(1000)
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot(config.imgpath(browser) + 'a-screenshot-description.png')
      .pause(1000)
      .clearValue('#i_am_a_textbox')
      .pause(1000)
      .setValue('#i_am_a_textbox', 'nightwatch roolz!')
      .pause(1000)
      .setValue('#fbemail', 'test@example.com')
      .pause(1000)
      .setValue('#comments', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      )
      .pause(1000)
      .saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz.png')
      .pause(1000)
      .end();
  }
};
