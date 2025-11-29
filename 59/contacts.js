const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const writeQuestion = question => {
  return new Promise((resolve, reject) => {
    rl.question(question, name => {
      resolve(name);
    });
  });
};

const saveContact = (name, email, phoneNo) => {
  const contact = { name, email, phoneNo };
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  contacts.push(contact);
  console.log(contact);
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  console.log('Thanks for inputting the data');
  rl.close();
};

module.exports = { writeQuestion, saveContact };
