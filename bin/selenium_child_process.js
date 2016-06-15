const selenium = require('selenium-download');
const execSync = require('child_process').execSync;

console.log(' - - - - - - - - - - - - - - - - - -> process.env:', process.env);

selenium.ensure('./bin', function(error) {
  if (error) {
    throw new Error(error);
  } else {
    return start();
  }
});

function start () {
  require('daemon')();
  // var cmd = ;
  execSync('nohup java -jar ./bin/selenium.jar &');
  console.log('Starting Selenium ...');
  var seconds = 5;
  while (new Date().getTime() <= (new Date().getTime() + (seconds * 1000))) {
  ; // do nothing but wait...
  }
  console.log('done');
  return;
}
