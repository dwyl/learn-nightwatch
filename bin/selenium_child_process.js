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
  // exec('java -jar ./bin/selenium.jar', (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`exec error: ${error}`);
  //     return;
  //   }
  //   if (stdout) {
  //     console.log(`> ${stdout}`);
  //   }
  //   if (stderr) {
  //     console.log(`>> ${stderr}`); // handle errors in your preferred way.
  //   }
  // });
}
