//we can export object, function and var

function printName(name) {
  return `Hello, my name is ${name}`;
}

const PI = 3.14;

//object literal

const student = {
  //property
  name: 'Adrian Nandu',
  age: 43,

  //method
  printStudent() {
    return `Hello, my name is ${this.name} and I am aged ${this.age}.`; //this means we take the property in the same object
  },
};

module.exports.printName = printName;
module.exports.PI = PI;
module.exports.student = student;
