module.exports = {
  'Inspirational Search' : function (browser) {
    var height = browser.window.innerHeight
    console.log('height:', height);
    // || document.documentElement.clientHeight
    // || document.body.clientHeight;
    browser
      .url('http://www.tcdl.io.s3-website-eu-west-1.amazonaws.com/isearch/0.18/index.html')
      .waitForElementVisible('body', 1000)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_home.png')
      .setValue('input[type=text]', 'Span')
      .waitForElementVisible('.list-group-item', 3000)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_autocomplete.png')
      .click('.list-group-item')
      .pause(5000)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_result.png')
      // scroll .articleTileImage
      .moveToElement('.articleTileImage', 200, 800)
      .pause(500)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_result_article.png')
      .end();
  }
};
