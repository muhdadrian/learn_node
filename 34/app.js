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
    console.log(contacts); //this will be displayed the same like in 33, but it's not str anymore, instead of json.
    //why we want to change to json? It's like an array where we can push
    rl.close();
  });
});
