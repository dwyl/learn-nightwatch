// npm install dropbox node-fetch glob --save
var fs = require('fs');
var path = require('path');
var Dropbox = require('dropbox').Dropbox;
var glob = require('glob');

// fix for missing fetch in node
fetch = require("node-fetch");

const DROPBOX_TOKEN = process.env.DROPBOX_TOKEN;

if (!DROPBOX_TOKEN) {
    throw new Error('error: no DROPBOX_TOKEN!');
}

let uploadPath = '/learn-nightwatch';

if (process.env.TRAVIS !== 'true') {
    uploadPath += `/local/${+ new Date()}`;
} else {
    // is ci
    uploadPath += `/ci/${process.env.TRAVIS_EVENT_TYPE}/${process.env.TRAVIS_BRANCH}/${process.env.TRAVIS_BUILD_ID}`;
}

console.log('uploadPath', uploadPath);

var dbx = new Dropbox({ accessToken: DROPBOX_TOKEN });

function upload(filename) {
    fs.readFile(filename, 'utf8', function (err, contents) {

        if (err) {
            console.error('Error: ', err);
            return;
        }
    
        // This uploads basic.js to the root of your dropbox
        dbx.filesUpload({ path: uploadPath + '/' + path.basename(filename), contents: contents })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
    });
    
}

// upload(__dirname + '/github.js');

const files = glob.sync(__dirname + '/../../screenshots/*/*.png');

files.forEach(filename => upload(filename));

// console.log('files', files);