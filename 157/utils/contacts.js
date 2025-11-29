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

//1st, we create update function (updateContacts name must be similar with in app.js)
const updateContacts = newContact => {
  //this new contact will overwrite the edited data
  const contacts = loadContact();
  //we need filter like delete (we filter or delete the contact data that its name is similar to oldName)
  const filteredContacts = contacts.filter(
    contact => contact.name !== newContact.oldName
  );
  console.log(filteredContacts, newContact); //2nd, we see 1st the contents of both filteredContacts and newContact.
};

//3rd, after making the function, we export it. Then require it in app.js. Now try to change the contact data for Adrian Nandu --> Adrian, adriannandu@gmail.com, 012-8348711 in browser. Then look at your console in terminal. From Hafizah Hamran to Adrian James Nandu are filteredContacts and Adrian Nandu is the newContact based on the console.log above. The new contact will be updated to json file. The edit method is delete the old data and add the new data. We push the newContact object. Before we push, we needn't the oldName. It's only for check or validation. We are going to remove the oldName then we push the object to the array in 158
module.exports = {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
  deleteContact,
  updateContacts,
};
