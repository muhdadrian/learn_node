function printName(name) {
  return `Hello, my name is ${name}`;
}

const PI = 3.14;

const student = {
  name: 'Adrian Nandu',
  age: 43,

  printStudent() {
    return `Hello, my name is ${this.name} and I am aged ${this.age}.`;
  },
};

class Person {
  constructor() {
    console.log('An object for person has been made!!');
  }
}

// module.exports = {
//   printName: printName,
//   PI: PI,
//   student: student,
//   Person: Person,
// };

module.exports = { printName, PI, student, Person }; //JS will know the property and value is printName
