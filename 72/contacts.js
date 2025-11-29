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

const loadContact = () => {
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
};

const saveContact = (name, email, phoneNo) => {
  const contact = { name, email, phoneNo };
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

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold('Registered contacts : '));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.name} - ${contact.phoneNo}`);
  });
};

//1st we make a new function below
const detailContact = name => {
  const contacts = loadContact();

  //array method to ascertain if there's data or no (undefined)
  const contact = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (!contact) {
    console.log(chalk.red.inverse.bold(`${name} is not found!`));
    return false; //it will stop when it reached console.log above, and not reaching at the bottom
  }
};

//2nd we export the detailContact
module.exports = { saveContact, listContact, detailContact };

//node app detail --name="random":
//random is not found!

//if the name is found at 73
