// this file is prefixed with a 'z_' to ensure that it runs Last (once screenshots created by other tests)
require('env2')('.env'); // optionally store youre Evironment Variables in .env
var fs = require('fs');
var path = require('path');
var AWS = require('aws-sdk');
var mime = require('mime-types');
AWS.config.region = process.env.AWS_REGION;
var s3bucket = new AWS.S3({params: {Bucket: process.env.AWS_S3_BUCKET}});

module.exports = {
  'Upload Screenshots': function s3_create (browser) {
    if(!process.env.AWS_ACCESS_KEY_ID) {
      console.log(`If you want to upload Screenshots to S3
        please set your AWS Environment Variables (see readme).`);
      browser.end();
    }
    else {
      // fist read the list of screenshots
      var images = fs.readdirSync(GLOBAL.SCREENSHOT_PATH).filter(file => {
        return fs.statSync(GLOBAL.SCREENSHOT_PATH + file).isFile()
          && file.indexOf('.png') > -1; // only screenshot images
      })
      // create meta.json with list of screenshots
      fs.writeFileSync(path.join(GLOBAL.SCREENSHOT_PATH,
        'meta.json'), JSON.stringify({images: images}, null, 2));

      // get list of files we are going to upload to S3
      var files = fs.readdirSync(GLOBAL.SCREENSHOT_PATH); // includes meta.json
      var countdown = files.length;
      files.forEach(function (file) {
        var filepath = path.join(GLOBAL.SCREENSHOT_PATH, file);
        var s3obj = new AWS.S3({ params: {
          Bucket: process.env.AWS_S3_BUCKET,
          ACL: 'public-read',
          Key: filepath,
          ContentType: mime.lookup(filepath),
        }});
        // upload (stream) the files to S3 in parallel
        s3obj.upload({Body: fs.createReadStream(filepath)}).send(function(e, data) {
          if (!e) {
            if (--countdown === 0) {
              browser.end();
              console.log('Done.', files.length, data.Location);
            }
          } else {
            --countdown;
            console.log(' >>> ERROR:', e);
            browser.end();
          }
        });
      });
    }
  }
}
