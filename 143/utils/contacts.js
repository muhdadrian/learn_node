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

module.exports = { loadContact, findContact, addContact };
