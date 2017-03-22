var fs = require('fs');
var gm = require('gm');
var request = require('request');

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small2.png';
var requestOptions = {
    url: url,
    encoding: null
};

function callback(err) {
    if (err) {
        console.log(err.message);
    }
    console.log("it Worked");
}

function downloadAndCreateThumbnail(url, filename, thumbnailFilename, callback) {
    request(requestOptions, function(err, response, data, callback) {
            fs.writeFile(filename, data, function(err){
                 if(err){
                      callback(err);
                 }
            gm(filename)
               .resize(240, 240)
               .write(thumbnailFilename, function(err){
                    if(err){
                         callback(err);
                    }
                    console.log("It Worked");
               });
          });
    });
}




downloadAndCreateThumbnail(url, filename, thumbnailFilename, callback);
