const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// const writeQuestion = question => {
//   return new Promise((resolve, reject) => {
//     rl.question(question, name => {
//       resolve(name);
//     });
//   });
// };

//when we go to the function at below, we want to validate if the data is duplicate or not
const saveContact = (name, email, phoneNo) => {
  const contact = { name, email, phoneNo }; //1
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file); //2

  //to check duplicate -- this will check at json file if the name is similar between 1 and 2 above
  //the duplicate var below will be the name contact, if not, it's undefined
  const duplicate = contacts.find(contact => contact.name === name);
  if (duplicate) {
    console.log('Contact has been registered, please use other name!');
    return false; //to terminate the function when there's error. So that it will not continue to the bottom. It will exit from the function.
  }

  //node app add --name="Adrian" --email="adrian@gmail.com" --phoneNo="12345"
  //the result will be: Contact has been registered, please use other name!
  //but terminal does not show 'adriannandu@kingdeMacBook-Air 64 %' after that. We need to fix it by exiting from console. remove the readline: rl.close() at the bottom.
  //remove also the writeQuestion at export below
  //remove also the const writeQuestion.. above
  //remove also the const readline.. and const rl above

  contacts.push(contact);
  console.log(contact);
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  console.log('Thanks for inputting the data');
  //rl.close();
};

//module.exports = { writeQuestion, saveContact };
module.exports = { saveContact };
