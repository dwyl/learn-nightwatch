const selenium = require('selenium-download');

selenium.ensure('./nightwatch', function(error) {
  if (error) throw new Error(error);
  console.log('✔ Selenium & Chromedriver downloaded');
});
