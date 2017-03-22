var async = require('async');
var fs = require('fs');
var gm = require('gm');
var request = require('request');



function callback(err) {
    if (err) {
        console.log(err.message);
    }
    console.log("it Worked");
}
var folder = './';
function iteratee () {
      gm()
   .resize(240, 240)
   }
// var thumbnailFilename = "new.png"

     fs.readdir(folder,function(err,data){
          if(err){
               callback(err);
          }

          async.each(data, iteratee, callback);


});
