const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//to check if there's data folder (try to remove the data folder and node app. It will cause error. We need to manage the error. If there's no such folder, then we'll make the folder)
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//to make contact.json file in data folder if it yet available
const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8'); //the params: 1st is its address, 2nd we put the default value of empty array, 3rd is encoding utf-8 (it's format will be automatically in str)
}

//we have two questions here: name and phoneNo (we are using readline and question method), but the problem of using this question is we are using callback. So, if we have two questions, the 2nd one we put into callback of the 1st question, this will be a problem when we want to add another question.
//if we want to add another question, we need another question and the question is in the callback of the 2nd question. When, the question is getting more, it will turnout into 'callback hell'. Go to 53
rl.question('Enter your name : ', name => {
  rl.question('Enter your phone number: ', phoneNo => {
    const contact = { name, phoneNo };
    const file = fs.readFileSync('data/contact.json', 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    console.log(contact);
    fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
    console.log('Thanks for inputting the data');
    rl.close();
  });
});
