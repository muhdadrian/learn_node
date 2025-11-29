const yargs = require('yargs');
const contacts = require('./contacts');

yargs
  .command({
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
        type: 'string',
      },
    },

    handler(argv) {
      contacts.saveContact(argv.name, argv.email, argv.phoneNo);
    },
  })
  .demandCommand();

//to display all registered contact names and phoneNo
//the yargs command at below similar to the command at add above
yargs.command({
  command: 'list',
  describe: 'Display all contact names and phoneNo',
  //inside the handler below, when the function is called, we will make a function in our contacts.js page (listContact). It will call from contacts.js, the method named listContact
  handler() {
    contacts.listContact();
  },
});

yargs.parse();
