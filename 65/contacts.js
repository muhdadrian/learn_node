//we use chalk
//npm i chalk@4.1.0
const fs = require('fs');
const chalk = require('chalk');

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
    //we make style at below
    console.log(
      chalk.red.inverse.bold(
        'Contact has been registered, please use other name!'
      )
    );
    return false;
  }

  contacts.push(contact);
  console.log(contact);
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  console.log('Thanks for inputting the data');
};

module.exports = { saveContact };

//node app add --name="Adrian" --email="adrian@gmail.com" --phoneNo="12345"
//node app add --name="Hafizah" --phoneNo="223412" (this will work without email data)
//to check email. Go to 66
