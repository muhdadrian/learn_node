const test = require('./test');

console.log(
  test.printName('Adrian'),
  test.PI,
  test.student.printStudent(),
  new test.Person() //to instantiate the class
);

//the result -- the object is instantiated (Person {}) and the constructor is run 1st (An object for person has been made!!):
//An object for person has been made!!
//Hello, my name is Adrian 3.14 Hello, my name is Adrian Nandu and I am aged 43. Person {}
