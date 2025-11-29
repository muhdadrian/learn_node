// Core Module
// File System

const fs = require('node:fs');

// to write str in a file (asynchronous)

fs.writeFile('data/test.txt', 'Hello World in Asynchronous', err => {
  console.log(err); //you can use 'e' or 'err' for the error
});

//if we node app, there's 'null' in the terminal as the function above is not returning anything. But, if we check at our file test.txt, it will overwritten the previous str

//asynchronous is a non-blocking
