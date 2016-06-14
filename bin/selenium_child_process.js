console.log('Starting Selenium ...');
require('daemon')();
const exec = require('child_process').exec;
exec('java -jar ./bin/selenium.jar', (error, stdout, stderr) => {
  console.log('hello');
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`> ${stdout}`);
  console.log(`>> ${stderr}`);
});
