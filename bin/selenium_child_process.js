const selenium = require('selenium-download');
const execSync = require('child_process').execSync;

selenium.ensure('./bin', function(error) {
  if (error) {
    throw new Error(error);
  } else {
    return start();
  }
});

function start () {
  console.log('Starting Selenium ...');
  require('daemon')();
  execSync('java -jar ./bin/selenium.jar');
}

console.log(' - - - - - - - - - - - - - - - - - -> process.env:', process.env);
