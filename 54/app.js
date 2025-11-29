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

//promise
const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter your name : ', name => {
      //in this callback function we write resolve when fulfilled
      resolve(name);
    });
  }); //return a promise with two params: 1st if the promise fulfilled, reject is when the promise failed
};

//2nd question. Now the coding has no callback, but normal synchronous for both question 1 and 2
const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter your email : ', email => {
      resolve(email);
    });
  });
};

//we make main function to execute the rest of the code at the commented at the bottom
//this main function is asynchronous (use async keyword), where each question, I have to wait to be answered by the user (use await keyword)
const main = async () => {
  //to capture the value name and email above without callback. But due to promise, here we use async await
  const name = await question1();
  const email = await question2();

  const contact = { name, email };
  const file = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(file);
  contacts.push(contact);
  console.log(contact);
  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
  console.log('Thanks for inputting the data');
  rl.close();
};

main();

// rl.question('Enter your name : ', name => {
//   rl.question('Enter your phone number: ', phoneNo => {
//     const contact = { name, phoneNo, email };
//     const file = fs.readFileSync('data/contact.json', 'utf-8');
//     const contacts = JSON.parse(file);
//     contacts.push(contact);
//     console.log(contact);
//     fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
//     console.log('Thanks for inputting the data');
//     rl.close();
//   });
// })
