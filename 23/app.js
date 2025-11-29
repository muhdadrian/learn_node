// Core Module
// File System

const fs = require('node:fs'); //can use line of code below without using node
//const fs = require('fs');

//console.log(fs); //if we 'node app' there are many methods will be displayed

//we'll try a method to write str to a file (synchronous)
fs.writeFileSync('test.txt', 'Hello World in synchronous!'); //node.js will search for test.txt file in the same folder. If there's no, then a new file will be made.

//if the file is already there. Its content will be overwritten.

//to execute the file: type 'node app'
