// Core Module
// File System

const fs = require('node:fs');

try {
  fs.writeFileSync('data/test.txt', 'Hello World in synchronous!');
} catch (e) {
  console.log(e);
}

//if we 'node app', it will not error, the file will be made in data folder

//we make asynchronous in 27
