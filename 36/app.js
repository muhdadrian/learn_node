//now we managed to build simple contact apps by using two Core Modules

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
    console.log(contact);
    fs.writeFileSync('data/contact.json', JSON.stringify(contacts)); //we write/overwrite with the file here with new json data. The contacts is in json, we need to reconvert it to str (JSON.stringify), to write the file (data/contact.json) in str
    console.log('Thanks for inputting the data');
    rl.close();
  });
});

//to run to enter 1st data in data/contact.json: node app
//run once again to enter 2nd data
