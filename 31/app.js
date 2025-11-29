// Core Module
// Readline

//const readline = require('node:readline'); can also use below line

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your name : ', name => {
  console.log(`Thanks ${name}`);
  rl.close();
});

//to create two questions. Go to 32
