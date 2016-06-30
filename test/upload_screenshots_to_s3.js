// this file is prefixed with a 'z_' to ensure that it runs Last (once screenshots created by other tests)
require('env2')('.env'); // optionally store youre Evironment Variables in .env
var conf = require('../nightwatch.conf.js')
var fs = require('fs'); // read the screenshot files
var path = require('path');
var AWS = require('aws-sdk');
var mime = require('mime-types');
AWS.config.region = process.env.AWS_REGION;
var s3bucket = new AWS.S3({params: {Bucket: process.env.AWS_S3_BUCKET}});

function s3_create () {
  if(!process.env.AWS_ACCESS_KEY_ID) {
    console.log(`If you want to upload Screenshots to S3
      please set your AWS Environment Variables (see readme).`);
  }
  else {
    fs.createReadStream('./lib/index.html') // copy index.html into folder
      .pipe(fs.createWriteStream(conf.SCREENSHOT_PATH + 'index.html'));
    // fist read the list of screenshots
    console.log('>>>', conf.SCREENSHOT_PATH);
    var images = fs.readdirSync(conf.SCREENSHOT_PATH).filter(file => {
      return fs.statSync(conf.SCREENSHOT_PATH + file).isFile()
        && file.indexOf('.png') > -1; // only screenshot images
    })
    // create meta.json with list of screenshots
    fs.writeFileSync(path.join(conf.SCREENSHOT_PATH,
      'meta.json'), JSON.stringify({images: images}, null, 2));

    // get list of files we are going to upload to S3
    var files = fs.readdirSync(conf.SCREENSHOT_PATH); // includes meta.json
    files.forEach(function (file) {
      var filepath = path.join(conf.SCREENSHOT_PATH, file);
      var s3path = filepath.split('node_modules/nightwatch/screenshots/')[1];
      var s3obj = new AWS.S3({ params: {
        Bucket: process.env.AWS_S3_BUCKET,
        ACL: 'public-read',
        Key: s3path,
        ContentType: mime.lookup(filepath),
      }});
      // upload (stream) the files to S3 in parallel
      s3obj.upload({Body: fs.createReadStream(filepath)}).send(function(e, data) {
        if (e) {
          console.log(' >>> ERROR:', e);
        }
        console.log(data);
        if (filepath.indexOf('index.html') > -1) {
          console.log('Done.', files.length, data.Location);
        }
      });
    });
  }
}
s3_create();
