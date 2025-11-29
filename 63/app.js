const yargs = require('yargs');
const contacts = require('./contacts'); //to import from contacts.js

yargs.command({
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
    contacts.saveContact(argv.name, argv.email, argv.phoneNo); //add contacts. at the front
    // const contact = {
    //   name: argv.name,
    //   email: argv.email,
    //   phoneNo: argv.phoneNo,
    // };
    // console.log(contact);
  },
});

yargs.parse();

//node app add --name="Adrian" --email="adrian@gmail.com" --phoneNo="12345"

//now we want to validate there's no similar name (duplicate), even this is not practical at this moment (as there is probability 2 persons with same name), but right now we want a name for a data. Go to 64
