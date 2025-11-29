const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your name : ', name => {
  rl.question('Enter your phone number: ', phoneNo => {
    console.log(`Thanks ${name}, for inputting your ${phoneNo}`);
    rl.close();
  });
});
