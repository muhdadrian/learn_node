const yargs = require('yargs');

//we want to make the parameter below into object
// yargs.command(
//   'add',
//   'Add new contact',
//   () => {},
//   argv => {
//     console.log(argv.name);
//   }
// );

//object
yargs.command({
  //when the add command is done, it will fill three: name, email and phoneNo
  command: 'add',
  describe: 'Add new contact',
  builder: {
    name: {
      describe: 'Full name',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string',
    },
    phoneNo: {
      describe: 'Phone Number',
      demandOption: true,
      type: 'string', //string because the front phone number is zero and we cannot give number
    },
  },
  // handler: function() {

  // }

  //we are using ES6 Notation to replace handler above
  handler(argv) {
    const contact = {
      name: argv.name,
      email: argv.email,
      phoneNo: argv.phoneNo,
    };
    console.log(contact);
  },
});

yargs.parse();

//node app --help: to learn there's command of add
//node app add --help: we want to know the next arg after node app add
//node app add --name="Adrian" --email="adrian@gmail.com" --phoneNo="12345"
//the result will be an object:
//{ name: 'Adrian', email: 'adrian@gmail.com', phoneNo: '12345' }

//now we are going to combine the features in yargs and those we have done in contacts.js. Go to 63
