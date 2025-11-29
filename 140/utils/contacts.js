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
  const contacts = JSON.parse(file); //json parse to convert from str to object
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

//1st, we make two methods: the first one is to write/overwrite contacts.json file with new data
const saveContacts = contact => {
  fs.writeFileSync('data/contact.json', JSON.stringify(contact)); //the contacts here that we change to str will get from contact above (object) and overwrite the contacts.json
  //json.stringify to convert from object to str
};

//2nd, the second one is to add new contact data
const addContact = contact => {
  // the contact above is from json file
  const contacts = loadContact(); //this contact is in object
  contacts.push(contact); //we add new object
  saveContacts(contacts); //we overwrite
};

//3rd, we export the addContact as it's used in app.js (addContact(req.body)). saveContacts no need to export as it's only used in this page. Then require in app.js. Go to app.js
module.exports = { loadContact, findContact, addContact };
