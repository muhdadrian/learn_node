//console.log(window); //see in console in browser

//console.log(window.alert('Hello World!'));

//the printName below is already in global object window
function printName(name) {
  return `Hello, my name is ${name}`;
}

console.log(printName('Adrian'));

console.log(window.printName('Adrian')); //this will also run. Go to 10 by using two separate js files.
