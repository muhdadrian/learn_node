//we can make object destructuring below (when we received contacts as object, we can split the contacts var below to {}, write the vars inside {} to capture the methods)
//const contacts = require('./contacts');
const { writeQuestion, saveContact } = require('./contacts');

const main = async () => {
  //we no longer the contacts. below after object destructuring above
  // const name = await contacts.writeQuestion('Enter your name : ');
  // const email = await contacts.writeQuestion('Enter your email : ');
  // const phoneNo = await contacts.writeQuestion('Enter your phoneNo : ');

  const name = await writeQuestion('Enter your name : ');
  const email = await writeQuestion('Enter your email : ');
  const phoneNo = await writeQuestion('Enter your phoneNo : ');

  // contacts.saveContact(name, email, phoneNo);
  saveContact(name, email, phoneNo);
};

main();

//btw, we'll be using contacts. currently. We'll just need to know that we can use object destructuring
