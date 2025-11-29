const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your name : ', name => {
  rl.question('Enter your phone number: ', phoneNo => {
    const contact = { name, phoneNo };
    const file = fs.readFileSync('data/contact.json', 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    console.log(contact); //{ name: 'adrian', phoneNo: '123' }. The result is json. But, we are yet write in the file. To write in the file go to 36
    rl.close();
  });
});
