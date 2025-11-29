// const command = process.argv[2];
// if (command === 'add') {
// } else if (command === 'remove') {
// } else if (command === 'list') {
// }

//we can use an npm module, which function is to organise arg in our command line to execute the commented if else above
//search for Yargs in npm
//before we can install npm package, we must initialize our project as npm project: npm init -y (-y means all the questions are answered yes or default value is chosen to shorten)
//install Yargs: npm i yargs@16.2.0

const yargs = require('yargs'); //put on the top

console.log(yargs.argv);

// node app add --name="adrian"
//{ _: [ 'add' ], name: 'adrian', '$0': 'app' }

//we organise it much simpler. They array contained command (add) and data. It made an object for us as we give -- flag (minus2 flag)
