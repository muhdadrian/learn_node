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

//1st, to check duplicated name:
const checkDuplicate = name => {
  //the name above is sent from the value in app.js (const duplicate = checkDuplicate(value);)
  const contacts = loadContact(); //take all contact data (json)
  return contacts.find(contact => contact.name === name); //find the similar name above (const checkDuplicate = name). The name will be sent to app.js in const duplicate. If there's no similar name const duplicate is empty
};

//2nd, we export checkDuplicate and then require in app.js.
module.exports = { loadContact, findContact, addContact, checkDuplicate };
