const fs = require('fs');

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

//1st, fetch all the contact data in contact.json
const loadContact = () => {
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
};

//2nd, look for contact based on name
const findContact = name => {
  //3rd, we copy from previous lesson
  const contacts = loadContact(); //we load all contact data
  const contact = contacts.find(
    // 4th, we need not the lowercase as we are clicking detail button. But, nevermind
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  return contact; //5th we return the contact data
};

// 6th, we export the contact data (findContact). Then go to app.js
module.exports = { loadContact, findContact };
