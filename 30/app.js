// Core Module
// File System

const fs = require('node:fs');

//to read in asynchronous

//two callback: err and data (data is returned from the file content)
const data = fs.readFile('data/test.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//try to make error by changing the data/test.txt to datas/text.txt to learn the err
