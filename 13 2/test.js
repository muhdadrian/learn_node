function printName(name) {
  return `Hello, my name is ${name}`;
}

module.exports = printName; // we export the printName function. This function can be used by any file that is using 'require' to this file
