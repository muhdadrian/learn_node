//we want to fill the data in data folder in terms of json file

const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your name : ', name => {
  rl.question('Enter your phone number: ', phoneNo => {
    //contact object at below

    //const contact = {
    // name: name,
    // phoneNo: phoneNo,
    //};

    //because name and phoneNo above are same for their key value, so shortcut is:

    const contact = { name, phoneNo };
    //we use file as its content is still in str
    const file = fs.readFileSync('data/contact.json', 'utf-8');
    console.log(file); //the result will be []. There's no content yet, but it still in str. We need to change it to json. Go to 34
    rl.close();
  });
});
