var exec = require('child_process').exec;
var cmd = "lsof -n -iTCP:4444 -sTCP:LISTEN -n -l -P | grep 'LISTEN' | awk '{print $2}' | xargs kill -9";
exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log('Shutdown Selenium.');
  if (stdout) {
    console.log(`> ${stdout}`);
  }
  if (stderr) {
    console.log(`>> ${stderr}`);
  }
});
