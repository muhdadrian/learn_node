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

const detailContact = name => {
  const contacts = loadContact();

  const contact = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (!contact) {
    console.log(chalk.red.inverse.bold(`${name} is not found!`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.name));
  console.log(contact.phoneNo);
  if (contact.email) {
    console.log(contact.email);
  }
};
//1st we make a new function to delete
const deleteContact = name => {
  //we take contact from json
  const contacts = loadContact(); //contacts is an old array. The new one at newContacts below
  //we make new array other than the found name. If we use find, it will stop when the name is found, but filter will search all until the array is done
  const newContacts = contacts.filter(
    contact => contact.name.toLowerCase() !== name.toLowerCase()
  );

  //if name is not found
  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${name} is not found!`));
    return false;
  }

  //3rd we copy from above
  fs.writeFileSync('data/contact.json', JSON.stringify(newContacts)); //the newContacts will overwrite the contact.json
  console.log(
    chalk.green.inverse.bold(`Data contact ${name} has been deleted!`)
  );
};

//2nd we export delete contact
module.exports = { saveContact, listContact, detailContact, deleteContact };

//node app delete --name="ad":
//ad is not found!

//node app delete --name="adrian"
//Data contact adrian has been deleted!
