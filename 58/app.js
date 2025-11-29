//we refine this app without asking question one by one

//we capture args from the command line
//console.log(process); //process is part of Node.js. Try to node app in the terminal.
console.log(process.argv); //we just need a property named argv to capture the args. In command line / terminal: node app adrian nandu. The result is an array:
// [
//   '/usr/local/bin/node', -- [0]
//   '/Users/adriannandu/Desktop/programming/learn_node_sg/58/app', -- [1]
//   'adrian', [2]
//   'nandu' [3]
// ]

// const contacts = require('./contacts');

// const main = async () => {
//   const name = await contacts.writeQuestion('Enter your name : ');
//   const email = await contacts.writeQuestion('Enter your email : ');
//   const phoneNo = await contacts.writeQuestion('Enter your phoneNo : ');

//   contacts.saveContact(name, email, phoneNo);
// };

// main();
