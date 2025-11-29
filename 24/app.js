// Core Module
// File System

const fs = require('node:fs');

fs.writeFileSync('data/test.txt', 'Hello World in synchronous!'); //this will look for file in the data folder. If there's no data folder, this will not run (error).

//to make a directory, it has different command. Now, go to 25
