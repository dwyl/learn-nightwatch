require('env2')('.env'); // optionally store youre Evironment Variables in .env
const conf = require('../../nightwatch.conf.js');
const fs = require('fs'); // read the screenshot files
const path = require('path');
const AWS = require('aws-sdk');
const mime = require('mime-types');

AWS.config.region = process.env.AWS_REGION;
// const s3bucket = new AWS.S3({ params: { Bucket: process.env.AWS_S3_BUCKET } });

function s3create() {
  if (!process.env.AWS_ACCESS_KEY_ID) {
    console.log(`If you want to upload Screenshots to S3
      please set your AWS Environment Variables (see readme).`);
  } else {
    const SP = conf.SCREENSHOT_PATH;
    const version = SP.split('/')[SP.split('/').length - 2];
    fs.writeFileSync(
      `${conf.SCREENSHOT_PATH}index.html`, // don't overwrite index
      fs.readFileSync(path.join(`${__dirname}/index.html`)), 'utf8',
    );
    // fs.createReadStream(path.join(__dirname + '/index.html'))
    //   .pipe(fs.createWriteStream(conf.SCREENSHOT_PATH + 'index.html'));
    // fist read the list of screenshots
    const images = fs.readdirSync(SP).filter(file =>
      fs.statSync(SP + file).isFile()
        && file.indexOf('.png') > -1); // only screenshot images

    // create meta.json with list of screenshots
    const meta = { images };
    fs.writeFileSync(path.join(SP, 'meta.json'), JSON.stringify(meta, null, 2));

    // get list of files to upload to S3 (including meta.json & index.html)
    fs.readdirSync(SP).forEach((file) => {
      const filepath = path.join(SP, file);
      const mimetype = mime.lookup(filepath);
      if (mimetype) {
        const s3path = `${version}/uat${
          filepath.split(`node_modules/nightwatch/screenshots/${version}`)[1]}`;
        const s3obj = new AWS.S3({
          params: {
            Bucket: process.env.AWS_S3_BUCKET,
            ACL: 'public-read',
            Key: s3path,
            ContentType: mimetype,
          },
        });
        // upload (stream) the files to S3 in parallel
        s3obj.upload({ Body: fs.createReadStream(filepath) }).send((e, data) => {
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
s3create();
