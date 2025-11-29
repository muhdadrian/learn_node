const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const saveContact = (name, email, phoneNo) => {
  const contact = { name, email, phoneNo };
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);

  const duplicate = contacts.find(contact => contact.name === name);
  if (duplicate) {
    console.log(
      chalk.red.inverse.bold(
        'Contact has been registered, please use other name!'
      )
    );
    return false;
  }
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold('Email is not valid!'));
      return false;
    }
  }

  if (!validator.isMobilePhone(phoneNo, 'ms-MY')) {
    console.log(chalk.red.inverse.bold('Phone number is not valid!'));
    return false;
  }

  contacts.push(contact);
  console.log(contact);
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  console.log(chalk.green.inverse.bold('Thanks for inputting the data'));
};

module.exports = { saveContact };
