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

//2nd we make another function
const saveContact = (name, email, phoneNo) => {
  //5th we give param above
  const contact = { name, email, phoneNo };
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  contacts.push(contact);
  console.log(contact);
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  console.log('Thanks for inputting the data');
  rl.close();
};

//6th we export writeQuestion and saveContact
//we can export vars, objects etc
//if the key value have different name, you have to write both
module.exports = { writeQuestion, saveContact };
