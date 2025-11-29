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

yargs.command({
  command: 'list',
  describe: 'Display all contact names and phoneNo',
  handler() {
    contacts.listContact();
  },
});

//to display the contact detail
//we copy from the command above and change a bit
yargs.command({
  command: 'detail',
  describe: 'To display a contact based on name',
  //we need builder here
  builder: {
    name: {
      describe: 'Full name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    //contacts.listContact();
    //we replace the list above with detail. It needs params where we take it from args in handler function
    contacts.detailContact(argv.name);
    //now we go to contacts.js in 72
  },
});

yargs.parse();

//if we node app -- without command param, it will display the warning
