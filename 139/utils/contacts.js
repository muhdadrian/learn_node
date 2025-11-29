const fs = require('fs');

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContact = () => {
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
};

const findContact = name => {
  const contacts = loadContact();
  const contact = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  return contact;
};

module.exports = { loadContact, findContact };
