//install nodemon (I already installed globally)

const chalk = require('chalk');
const name = 'Adrian';

const text = chalk`Lorem ipsum dolor {bgBlue.black.strikethrough sit amet} consectetur, {bgGreen.italic.black adipisicing} elit. Voluptatem, blanditiis. My name is : ${name}`;

console.log(text);
