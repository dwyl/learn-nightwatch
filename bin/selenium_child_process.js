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
      res.on("data", function(chunk) {
        console.log('Selenium is running:',
          JSON.stringify(JSON.parse(chunk), null, 2));
        return; // res.end is automatically called.
      });
    }
  }).on('error', (e) => {
    console.log(`Selenium NOT Running (yet) ... ${e.message}`);
    console.log('Starting Selenium ...');
    var cmd = 'nohup java -jar ./bin/selenium.jar &';
    console.log('$ ' + cmd); // give user some feedback
    require('daemon')(); // run the selenium process as a daemon (background)
    execSync(cmd);
  });
}
