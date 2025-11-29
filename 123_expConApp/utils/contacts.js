const fs = require('fs');
//1st, we commented the npm modules below:
// const chalk = require('chalk');
// const validator = require('validator');

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContact = () => {
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
};

//2nd, we are going to use the loadContact in app.js, we need to export it first:
module.exports = { loadContact };
