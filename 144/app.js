//1st, we need to validate the duplicate name. We use body. Go to app.post

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
} = require('./utils/contacts'); //6th, we require checkDuplicate. Then run the app (add similar name with Adrian Nandu and give random email and phoneno). The "msg": "Contact name has been registered" will be displayed. Now, we can capture the error.
//7th, try to input Hafizah Hamran, hafizahhamran@utim.edu and qweasd (phoneno). Only two errors will be displayed.
//8th, we want to display the error message in the page for the user. Go to 145
const { body, validationResult, check } = require('express-validator');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts); // third party middleware
app.use(express.static('public')); // built-in middleware
app.use(express.urlencoded({ extended: true })); // built-in middleware

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
// app.post(
//   '/contact',
//   [body('email').isEmail(), body('phoneno').isMobilePhone('ms-MY')],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//   }
// );

//to process the contact data
app.post(
  '/contact',
  [
    //2nd, we add body to check the duplicate name:
    body('name').custom(value => {
      const duplicate = checkDuplicate(value);
      if (duplicate) {
        throw new Error('Contact name has been registered'); //throw is similar to return false but with error message. Why we need error message? So that it will go to 3rd below, as we want to capture the error message
      }
      return true; //4th, if it's passed it will go to 5th below. Now go to contacts.js
    }),
    check('email', 'Email is not valid!').isEmail(),
    check('phoneno', 'Phone No is not valid').isMobilePhone('ms-MY'),
  ],
  (req, res) => {
    const errors = validationResult(req); //3rd
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //addContact(req.body); 5th
    //res.redirect('/contact');
  }
);

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
