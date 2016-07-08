require('env2')('.env'); // optionally store youre Evironment Variables in .env
var conf = require('../../nightwatch.conf.js')
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
    var SP = conf.SCREENSHOT_PATH;
    var version = SP.split('/')[ SP.split('/').length - 2 ];
    fs.writeFileSync(conf.SCREENSHOT_PATH + 'index.html', // don't overwrite index
      fs.readFileSync(path.join(__dirname + '/index.html')), 'utf8');
    // fs.createReadStream(path.join(__dirname + '/index.html'))
    //   .pipe(fs.createWriteStream(conf.SCREENSHOT_PATH + 'index.html'));
    // fist read the list of screenshots
    var images = fs.readdirSync(SP).filter(file => {
      return fs.statSync(SP + file).isFile()
        && file.indexOf('.png') > -1; // only screenshot images
    })
    // create meta.json with list of screenshots
    var meta = {images: images}
    fs.writeFileSync(path.join(SP, 'meta.json'), JSON.stringify(meta, null, 2));

    // get list of files to upload to S3 (including meta.json & index.html)
    fs.readdirSync(SP).forEach(function (file) {
      var filepath = path.join(SP, file);
      var mimetype = mime.lookup(filepath);
      if (mimetype) {
        var s3path = version + '/uat' +
          filepath.split('node_modules/nightwatch/screenshots/' + version)[1];
        var s3obj = new AWS.S3({ params: {
          Bucket: process.env.AWS_S3_BUCKET,
          ACL: 'public-read',
          Key: s3path,
          ContentType: mimetype,
        }});
        // upload (stream) the files to S3 in parallel
        s3obj.upload({Body: fs.createReadStream(filepath)}).send(function(e, data) {
          if (e) {
            console.log(' >>> ERROR:', e);
          }
          if (filepath.indexOf('index.html') > -1) {
            console.log('Uploaded', images.length, 'screenshots >> ', data.Location);
          }
        });
      }
    });
  }
}
s3_create();
