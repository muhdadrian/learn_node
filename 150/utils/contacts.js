const fs = require('fs');

//make data folder if yet existed
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//make contacts.json file if yet existed
const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

//fetch all data in contact.json
const loadContact = () => {
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
};

//find contact based on name
const findContact = name => {
  const contacts = loadContact();
  const contact = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  return contact;
};

const saveContacts = contact => {
  fs.writeFileSync('data/contact.json', JSON.stringify(contact));
};

const addContact = contact => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

//to check duplicated name:
const checkDuplicate = name => {
  const contacts = loadContact();
  return contacts.find(contact => contact.name === name);
};

//1st, we make delete function
const deleteContact = name => {
  //we take the contact data from json file
  const contacts = loadContact(); //we will trace the content inside the contacts object (const contacts) just like we did in CLI contact app previously. We trace it in json file.
  const filteredContacts = contacts.filter(contact => contact.name !== name); //this how to trace
  console.log(filteredContacts);
};

//find is when you find the name it's done, but filter, it will check all.

//2nd we export the deleteContact and we require in app.js
module.exports = {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
  deleteContact,
};
