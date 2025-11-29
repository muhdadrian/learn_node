function printName(name) {
  return `Hello, my name is ${name}`;
}

const PI = 3.14;

module.exports = printName;

module.exports = PI; //this will not work as module.exports is already filled by printName
