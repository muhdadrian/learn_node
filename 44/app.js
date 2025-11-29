//npm -- chalk (to style our terminal)
//npm i chalk@4.1.0

const chalk = require('chalk');

console.log(chalk.blue('Hello world!')); //node app -- it will turn the hello world to blue color
console.log(chalk.bgBlue('Hello world!'));
console.log(chalk.red.bgBlue('Hello world!'));
console.log(chalk.italic('Hello world!'));
console.log(chalk.italic.bgBlue.black('Hello world!'));
