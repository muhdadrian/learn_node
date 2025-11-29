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

//to delete contact
const deleteContact = name => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter(contact => contact.name !== name);
  //console.log(filteredContacts); //1st we delete this
  saveContacts(filteredContacts); //2nd, we overwrite the json file with filteredContact
  //3rd, now try to delete a name in the contact page. But there's no flash message to inform that the name has been deleted. Go to app.js
};

module.exports = {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
  deleteContact,
};
