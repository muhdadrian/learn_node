// we learn to use npm

const validator = require('validator'); //it will look in in Core Module 1st. Then it will look in 3rd party package (node_modules).

//console.log(validator.isEmail('adriannandu@gmail.com')); //this is true (node app). Try to remove the @ in the email, it will return false.

//console.log(validator.isMobilePhone('012-8356382', 'ms-MY'));

console.log(validator.isNumeric('0123456789')); //try to add @ to make it false
