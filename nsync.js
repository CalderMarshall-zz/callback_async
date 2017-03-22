var async = require('async');
var fs = require('fs');
// import map from 'async/map';

var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

function callback(err){
     if(err){
          console.log(err.message);
     }
     console.log("it Worked");
}

function thecreator(file, callback){
     fs.writeFile(file, "Hello World!", callback)
}

async.each(filenames, thecreator, callback);
