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

//we add another question: email. Just imagine if you have five questions, it will become a callback hell. Here we can resolve it by using async await -- to resolve callback hell. But, async await is only for promise. Now our callback below is not promise. We got to change each question to promise then we can use async await. Go to 54
rl.question('Enter your name : ', name => {
  rl.question('Enter your phone number: ', phoneNo => {
    rl.question('Enter your email : ', email => {
      const contact = { name, phoneNo, email };
      const file = fs.readFileSync('data/contact.json', 'utf-8');
      const contacts = JSON.parse(file);
      contacts.push(contact);
      console.log(contact);
      fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
      console.log('Thanks for inputting the data');
      rl.close();
    });
  });
});
