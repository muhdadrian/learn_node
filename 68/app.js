//if we 'node app', there's nothing happened and it's not good, as there's no complete command
//we add a new method at below by chaining. It will display warning if we just node app: Not enough non-option arguments: got 0, need at least 1
//we only have add command at this moment

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
    //we chaining at below
  })
  .demandCommand();

yargs.parse();

//we add another command or feature at 69
