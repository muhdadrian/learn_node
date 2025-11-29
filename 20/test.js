//we can also export class

function printName(name) {
  return `Hello, my name is ${name}`;
}

const PI = 3.14;

const student = {
  //property
  name: 'Adrian Nandu',
  age: 43,

  //method
  printStudent() {
    return `Hello, my name is ${this.name} and I am aged ${this.age}.`;
  },
};

//we make class without property and method, but constructor
class Person {
  //the constructor is a method where it automatically being run when this class is instantiated
  constructor() {
    console.log('An object for person has been made!!');
  }
}

module.exports.printName = printName;
module.exports.PI = PI;
module.exports.student = student;
module.exports.Person = Person;

//we can export once above by using object. Go to 21
