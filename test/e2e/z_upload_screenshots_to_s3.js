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

module.exports = {
  'Upload Screenshots': function s3_create (browser) {
  if(process.env.)
  fs.readdir(GLOBAL.SCREENSHOT_PATH, function (err, files) {
    if (err) {
        throw err;
    }
    files = files.map(function (file) {
        return path.join(GLOBAL.SCREENSHOT_PATH, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile(); // only include files?
    })
    var obj = {files: []};
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
            obj.files.push(data.Location);
            console.log(data.Location);
            if (!--countdown) {
              uploadMeta(obj, function (err, data) {
                console.log(err, data);
                browser.end();
              });
            }
          } else {
            console.log(err);
          }
        });
    });

  });
  }
}
