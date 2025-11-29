//npm -- chalk (to style our terminal)
//npm i chalk@4.1.0

const chalk = require('chalk');

//we add another modifier
const text = chalk`Lorem ipsum dolor {bgRed.black sit amet} consectetur, adipisicing elit. Voluptatem, blanditiis.`;

console.log(text);
