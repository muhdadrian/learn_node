//we can make this file neater -- separate the file
//we make another file contacts.js -- to organize contacts
//1st move the commented below to contacts.js

// const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const dirPath = './data';
// if (!fs.existsSync(dirPath)) {
//   fs.mkdirSync(dirPath);
// }

// const dataPath = './data/contact.json';
// if (!fs.existsSync(dataPath)) {
//   fs.writeFileSync(dataPath, '[]', 'utf-8');
// }

// const writeQuestion = question => {
//   return new Promise((resolve, reject) => {
//     rl.question(question, name => {
//       resolve(name);
//     });
//   });
// };

//7th we import writeQuestion and saveContact
const contacts = require('./contacts'); //you can write either contacts or contacts.js

const main = async () => {
  //8th we need add contacts. in each question below
  const name = await contacts.writeQuestion('Enter your name : ');
  const email = await contacts.writeQuestion('Enter your email : ');
  const phoneNo = await contacts.writeQuestion('Enter your phoneNo : ');

  //4th we need to call the saveContact function here:
  contacts.saveContact(name, email, phoneNo); //9th we also add contacts. at the front

  //3rd move the commented below to the saveContact function in contacts.js

  // const contact = { name, email, phoneNo };
  // const file = fs.readFileSync('data/contact.json', 'utf-8');
  // const contacts = JSON.parse(file);
  // contacts.push(contact);
  // console.log(contact);
  // fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  // console.log('Thanks for inputting the data');
  // rl.close();
};

main();
