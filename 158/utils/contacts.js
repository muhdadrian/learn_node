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
  saveContacts(filteredContacts);
};

//update function
const updateContacts = newContact => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter(
    contact => contact.name !== newContact.oldName
  );
  //console.log(filteredContacts, newContact); //1st, we delete this
  delete newContact.oldName; //2nd, we delete the property in object (we delete the oldName so that the new contact is according to json format). Then, we push to filteredContacts (the array) at below:
  filteredContacts.push(newContact); //until here not yet done (a --> filteredContacts)
  saveContacts(filteredContacts); //we'll overwrite all data in json with new contact above (a)
};
//3rd, edit Adrian James Nandu to Adrian Nandu Gaak, adrianjames@gmail.com to adrianjames@mit.edu, 0138420612 to 0138421111
//4th, but the problem is the new edited/updated data will be moved to the bottom of the list due to the push, as the push always move to the last array. And we display the array based on our json list. But, nervermind.
//5th, we already done CRUD (create (add), read (display data), update and delete data) in our simple contact app

module.exports = {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
  deleteContact,
  updateContacts,
};
