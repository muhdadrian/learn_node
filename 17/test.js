function printName(name) {
  return `Hello, my name is ${name}`;
}

const PI = 3.14;

//to run both, we export as property or method in export
module.exports.printName = printName; // we make method in the export called printName that is filled with printName function (you can use any name for the printName before =. While, the printName after the = is taking the function name above that we are pointing to)

module.exports.PI = PI; //we make property PI before =. The PI after = is taking from the PI var above.

//we just need require once as both exports above are already sent in object that has new method and property.
