// Core Module
// File System

const fs = require('node:fs');

const data = fs.readFileSync('data/test.txt', 'utf-8');
console.log(data); //we can node app this to get str directly
