//npm -- chalk (to style our terminal)
//npm i chalk@4.1.0

const chalk = require('chalk');

//to make 1st word different than the 2nd word using tag template literal
const text = chalk`Lorem ipsum dolor {bgRed sit amet} consectetur, adipisicing elit. Voluptatem, blanditiis.`;

console.log(text);
