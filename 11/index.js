//we can run both index and test files at the same time by using require keyword
//if index and test in the same folder use ./
//if the file in upper part ../
//in uppper part ../../
//in another folder (test folder for example): ./test/test.js

require('./test'); //can write test or test.js

console.log('Hello WPU'); //before running this console, it will run what is inside test.js

//to run type 'node index' or 'node .'
