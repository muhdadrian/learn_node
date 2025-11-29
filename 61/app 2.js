const yargs = require('yargs');

//check the params in the documentation: 1st para command, 2nd description, 3rd function to write builder (we can fill with function or object), 4th handler
yargs.command(
  'add',
  'Add new contact',
  () => {},
  argv => {
    console.log(argv.name);
  }
);

//call the function like we do to main function previously
yargs.parse();

//node app add --name="adrian"
//adrian (result)

//node app --help: to check the available commands

//Commands:
//app add  Add new contact (this is from the command we wrote above)
