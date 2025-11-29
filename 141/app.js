// 1st, we delete the 3rd data in contact.json (sarah's data) first
//2nd, you can read the express-validator in npm doc. It's a middleware to validate like email etc
//3rd, install that npm: npm i express-validator@6.10.1
//4th, the express.urlencoded() is deprecated so we update it. Go to there
//6th, you can read express-validator at its homepage through npm
//8th, go to app.post route at below

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact, addContact } = require('./utils/contacts');
const { body, validationResult } = require('express-validator'); //7th, copy and paste from express-validator homepage.
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts); // third party middleware
app.use(express.static('public')); // built-in middleware
//app.use(express.urlencoded()); // built-in middleware
app.use(express.urlencoded({ extended: true })); // 5th, we update this

app.get('/', (req, res) => {
  const students = [
    {
      name: 'Adrian Nandu',
      email: 'adriannandu@gmail.com',
    },
    {
      name: 'Hafizah Hamran',
      email: 'hafizahhamran@gmail.com',
    },
    {
      name: 'Sarah Sophia Adrian',
      email: 'sarahsophia@gmail.com',
    },
  ];
  res.render('index', {
    name: 'Adrian Nandu',
    title: 'Home Page',
    students,
    layout: 'layouts/main-layout',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About Page',
  });
});

app.get('/contact', (req, res) => {
  const contacts = loadContact();

  res.render('contact', {
    title: 'Contact Page',
    layout: 'layouts/main-layout',
    contacts,
  });
});

//add contact data form page:
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    title: 'Add Data Contact Form',
    layout: 'layouts/main-layout',
  });
});

//to process the contact data
//9th, commented the code below first
// app.post('/contact', (req, res) => {
//   addContact(req.body);
//   res.redirect('/contact');
// });

//10th, we try to validate email first. Look at the doc
app.post('/contact', body('email').isEmail(), (req, res) => {
  //we check the input whether it's a real email or not
  const errors = validationResult(req); //if the email is not in real format, the errors will have its content
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});

//11th, run the app and fill the new data (name: Adrian, email: asd@asd, phoneno: asdasd). We only have email validation at this moment. So we'll get error. We add phone no validation at 142

//contact detail page
app.get('/contact/:name', (req, res) => {
  const contact = findContact(req.params.name);
  res.render('detail', {
    title: 'Detail Contact Page',
    layout: 'layouts/main-layout',
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
