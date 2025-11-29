const fs = require('fs'); //this is core modules as there's no ./
//the convention is core modules 1st
const printName = require('./test'); //local module. How node.js know this is a local module? There's ./ (it's an url relative)
const moment = require('moment'); //third party module / npm module. This will be in a folder named node_modules

console.log(printName('Adrian'));
