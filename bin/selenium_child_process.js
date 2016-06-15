const selenium = require('selenium-download');
const execSync = require('child_process').execSync;
const get = require('http').get;

selenium.ensure('./bin', function(error) {
  if (error) {
    throw new Error(error);
  } else {
    return start();
  }
});

function start () {
  get('http://localhost:4444/wd/hub/status', function (res) {
    if (res && res.statusCode === 200){
      console.log('Selenium is running:');
      res.resume();
      res.on("data", function(chunk) {
        console.log(JSON.stringify(JSON.parse(chunk), null, 2));
      });
      return;
    }
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
    console.log('Starting Selenium ...');
    var cmd = 'nohup java -jar ./bin/selenium.jar &';
    console.log('$ ' + cmd);
    require('daemon')();
    execSync(cmd);
  });
}
