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

//4th we make function from the 3rd
const loadContact = () => {
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
};

const saveContact = (name, email, phoneNo) => {
  const contact = { name, email, phoneNo };
  //3rd we make the commented below abstracted for looping
  // const file = fs.readFileSync('data/contact.json', 'utf-8');
  // const contacts = JSON.parse(file);
  //5th, to replace the two commented code above and to call the function at 4th:
  const contacts = loadContact();

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

//1st we make the function to be called here
const listContact = () => {
  //6th
  const contacts = loadContact();
  //7th, we loop
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.name} - ${contact.phoneNo}`);
  });
};

//2nd we also save the listContact function to be exported to be used in app page
module.exports = { saveContact, listContact };

//node app list:
//1. Adrian - 12345
//2. Hafizah - 223412
//3. Sarah - 012-8764537

//we add title at 70
