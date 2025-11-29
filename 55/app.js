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

//we can refactor the question in 54 so that we needn't need many questions. We can make a question that can be reused again and again.
const writeQuestion = question => {
  return new Promise((resolve, reject) => {
    rl.question(question, name => {
      resolve(name);
    });
  });
};

//we don't need the 2nd question anymore
// const question2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('Enter your email : ', email => {
//       resolve(email);
//     });
//   });
// };

const main = async () => {
  const name = await writeQuestion('Enter your name : ');
  const email = await writeQuestion('Enter your email : ');
  //if I have another question, just add at below
  const phoneNo = await writeQuestion('Enter your phoneNo : ');

  const contact = { name, email, phoneNo }; //this is new object type. It should be name: name, email: email, phoneNo: phoneNo. But, due to the same name between the key and value, we use ES6 Notation -- sufficient just to write name, email and phoneNo
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  contacts.push(contact);
  console.log(contact);
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  console.log('Thanks for inputting the data');
  rl.close();
};

main();
