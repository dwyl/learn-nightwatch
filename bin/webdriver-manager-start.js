const execSync = require('child_process').execSync;
// console.log(' - - - - - - - - - - - - - - - - - -> process.env:', process.env);
console.log('Starting Selenium WebDriver Manager');
require('daemon')();
execSync('node_modules/.bin/webdriver-manager start');
