require('./test');

//console.log('Hello WPU');

printName('Adrian'); //this will run in browser, but error in Node.js, as Node using module system. It assumed that a file is in its own module and cannot be accessed by another module

//the printName('Adrian') will be runned if it is in test.js
//to run in index.js we use export keyword. Go to 13
