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

  //check email by using validator module
  //npm i validator@13.5.2
  if (email) {
    //if not email from (email) at below
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold('Email is not valid!'));
      return false;
    }
  }

  contacts.push(contact);
  console.log(contact);
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  console.log('Thanks for inputting the data');
};

module.exports = { saveContact };

//node app add --name="Hafizah" --phoneNo="223412" (you cannot check email as this name has been registered)
//node app add --name="Sarah" --email="asd@asd" --phoneNo="123":
//Email is not valid! (the email is not in email format)
//to check phoneNo, go to 67
