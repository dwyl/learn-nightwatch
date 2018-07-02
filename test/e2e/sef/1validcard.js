module.exports = {

  beforeEach: function (browser, done) {
    browser.resizeWindow(1280, 800, done);
  },

  'Regiter PRO Valid Credit Card' : function (browser) {
    browser
        .setCookie({
          name    : 'automation_tests',
          value   : '1'
        })
        .url('https://qa-sef1.pipl.com/')
        .setCookie({
          name    : 'automation_tests',
          value   : '1'
        });
    browser.waitForElementVisible('#login_button',500);
    browser.useXpath();
    browser.click('//*[@id="js-navbar"]/ul/li[1]/div', function() {
      console.log('Click on Search');

      browser.click('//*[@id="js-navbar"]/ul/li[1]/ul/li[1]/a/span', function () {
        console.log('Click on Search #2');
      });
      browser.useCss();
      browser.waitForElementVisible('body > div.container-fluid > div > section.c-hero > button', 500, function () {
        console.log('Validation - REQUEST A DEMO')
      });
      browser.waitForElementVisible('#root > div > section > div.container > div.c-slider-area-buttons > button', 500, function () {
        console.log('Validation - GET STARTED button')
      });
      browser.click('#root > div > section > div.container > div.c-slider-area-buttons > button', function () {
        console.log('Click - GET STARTED button')
      });
      browser.useXpath();
      browser.click('/html/body/div[5]/div/div[2]/div/div/div[3]/button[1]', function () {
        console.log('Click CREATE MY ACCOUNT button')
      });
      browser.perform(function () {
        console.log('dummy statement'); // install a breakpoint here
      });
      browser.expect.element('/html/body/div[5]/div/div[2]/div/div/div[1]/h4').text.to.equal('Sign up for an account, it takes less than a minute.');
      browser.expect.element('/html/body/div[5]/div/div[2]/div/div/div[3]/a').text.to.contain('I already have an account').after(1000);
      browser.setValue('/html/body/div[5]/div/div[2]/div/div/div[2]/div/div[1]/div/form/div[1]/span[1]/input', 'Shelly Shir', function () {
        console.log('Input full name')
      });
      browser.setValue('/html/body/div[5]/div/div[2]/div/div/div[2]/div/div[1]/div/form/div[2]/span[1]/input', 'shelly.shir+' + Math.floor((Math.random() * 1000000) + 1) + '@pipl.com', function () {
        console.log('Input Email')
      });
      browser.setValue('/html/body/div[5]/div/div[2]/div/div/div[2]/div/div[1]/div/form/div[3]/span[1]/input', '123456', function () {
        console.log('Input Password')
      });
      browser.click('//*[@id="agree"]', function () {
        console.log('Accept terms')
      });
      browser
          .click('/html/body/div[5]/div/div[2]/div/div/div[3]/button[1]', function () {
            console.log('Click Create my account')
          });
      browser.useXpath();
      browser.waitForElementPresent('/html/body/div[5]/div/div[2]/div/div/div[2]/div/div[1]/div/div/form/div[1]/div/div/span[1]/input', 10000);
      browser.setValue('/html/body/div[5]/div/div[2]/div/div/div[2]/div/div[1]/div/div/form/div[1]/div/div/span[1]/input', 'Shelly Shir', function () {
        console.log('Input Name On Card')
      });

      browser.perform(function() {
        browser.elements('css selector', "iframe[title='Secure payment input frame']", function (frames) {
          browser.useCss();
          browser.frame(frames.value[0]).setValue('input[name=cardnumber]', '4242424242424242', function () {
            console.log('Input CC #');
          });
          browser.frame(null);
          browser.frame(frames.value[2]).setValue('input[name=cvc]', '999', function () {
            console.log('Input CVV');
          });
          browser.frame(null);
          browser.frame(frames.value[1]).setValue('input[name=exp-date]', '0125', function () {
            console.log('Input exp date');
          });
        });
      });
    }).end();
  }
};