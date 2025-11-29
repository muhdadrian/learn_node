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

yargs.command({
  command: 'detail',
  describe: 'To display a contact based on name',
  builder: {
    name: {
      describe: 'Full name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    contacts.detailContact(argv.name);
  },
});

yargs.parse();
