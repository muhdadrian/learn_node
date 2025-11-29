// Core Module
// File System

const fs = require('node:fs');

//to read file (synchronous)
//fs.readFileSync('data/test.txt'); //if we node app this, there will be nothing happened, as the data is not stored anywhere. Go to below

const data = fs.readFileSync('data/test.txt');
//console.log(data);//the result if buffer and we need to convert it to str at below
console.log(data.toString()); //toString() is a function -- there's () to mark its a function. While, readFileSync above is a method.

//we can use utf-8 in the method to convert directly from buffer to latin. Go to 29
