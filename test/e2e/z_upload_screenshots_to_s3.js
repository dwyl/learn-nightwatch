// this file is prefixed with a 'z_' to ensure that it runs Last (once screenshots created by other tests)
require('env2')('.env');
var fs = require('fs');
var path = require('path');
var AWS = require('aws-sdk');
AWS.config.region = process.env.AWS_REGION;
var s3bucket = new AWS.S3({params: {Bucket: process.env.AWS_S3_BUCKET}});

function uploadMeta (obj, callback) {
  var params = {
    Key: GLOBAL.SCREENSHOT_PATH + 'meta.json',
    Body: JSON.stringify(obj, null, 2),
    ContentType: 'application/json',
    ACL: 'public-read'
  };
  s3bucket.upload(params, function (err, data) {
    console.log(err, data);
    callback(err, data);
  });
}

function uploadViewer (callback) {
  var params = {
    Key: GLOBAL.SCREENSHOT_PATH + 'index.html',
    Body: fs.readFileSync('lib/index.html'),
    ContentType: 'text/html',
    ACL: 'public-read'
  };
  s3bucket.upload(params, function (err, data) {
    console.log(err, data);
    callback(err, data);
  });
}

module.exports = {
  'Upload Screenshots': function s3_create (browser) {
    if(process.env.AWS_ACCESS_KEY_ID) {
      fs.readdir(GLOBAL.SCREENSHOT_PATH, function (err, files) {
        if (err) {
            throw err;
        }
        files = files.map(function (file) {
            return path.join(GLOBAL.SCREENSHOT_PATH, file);
        }).filter(function (file) {
            return fs.statSync(file).isFile() && file.indexOf('.json') === -1; // only include images?
        })
        var obj = {files: files};
        var countdown = files.length;

        files.forEach(function (file) {
          var body = fs.createReadStream(file);
          var params = { params: {
            Bucket: process.env.AWS_S3_BUCKET,
            ACL: 'public-read',
            Key: file,
            ContentType: 'image/png',
          }};
          var s3obj = new AWS.S3(params);
          s3obj.upload({Body: body}).
            // on('httpUploadProgress', function(evt) { console.log(evt); }).
            send(function(err, data) {
              if (!err) {
                if (!--countdown === 0) {
                  // save the meta.json locally so we can use it
                  fs.writeFileSync(path.join(GLOBAL.SCREENSHOT_PATH, 'meta.json'), JSON.stringify(obj, null, 2));
                  uploadMeta(obj, function (err, data) {
                    console.log(err, data);
                    browser.end();
                  });
                  uploadViewer(function(err, data){
                    console.log('viewer uploaded');
                    console.log(err, data);
                  });
                }
              } else {
                --countdown;
                console.log(err);
                browser.end();
              }
            });
        });
      });
    } else {
      console.log('If you want to upload Screenshots to S3 please set your .env');
      browser.end();
    }
  }
}
