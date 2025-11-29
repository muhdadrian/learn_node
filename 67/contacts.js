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

  //check phoneNo
  //phoneNo is compulsory. No need to check if it existed or not
  if (!validator.isMobilePhone(phoneNo, 'ms-MY')) {
    console.log(chalk.red.inverse.bold('Phone number is not valid!'));
    return false;
  }

  contacts.push(contact);
  console.log(contact);
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  //console.log('Thanks for inputting the data');//we change the color of this console to green at below
  console.log(chalk.green.inverse.bold('Thanks for inputting the data'));
};

module.exports = { saveContact };

//node app add --name="Sarah" --email="asd@asd.com" --phoneNo="123"
//Phone number is not valid! (name is passed as there's no Sarah in contact yet, the email format is valid and the phoneNo is not valid)

//node app add --name="Sarah" --email="asd@asd.com" --phoneNo="012-8764537"
//{ name: 'Sarah', email: 'asd@asd.com', phoneNo: '012-8764537' }
//Thanks for inputting the data (now all are valid)
