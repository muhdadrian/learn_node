// Core Module
// File System

const fs = require('node:fs');

//we make try catch if there's no data folder

try {
  fs.writeFileSync('data/test.txt', 'Hello World in synchronous!');
} catch (e) {
  console.log(e);
}

//if we use synchronous, we normally use try catch. If asynchronous, no need, as we manage it through callback.

//we assume the data folder is there in 26
