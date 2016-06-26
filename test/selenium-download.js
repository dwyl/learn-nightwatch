const selenium = require('selenium-download');

selenium.update('./nightwatch', function(error) {
  if (error) throw new Error(error);
  console.log('✔ Selenium & Chromedriver downloaded');
});
