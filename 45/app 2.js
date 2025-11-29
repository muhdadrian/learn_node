//npm -- chalk (to style our terminal)
//npm i chalk@4.1.0

const chalk = require('chalk');

const message = 'Hello World';
console.log(chalk.bgRed.black(message));
