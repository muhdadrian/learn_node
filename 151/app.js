//1st, go to contacts.js
//2nd, go to delete contact below

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
  deleteContact,
} = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts); // third party middleware
app.use(express.static('public')); // built-in middleware
app.use(express.urlencoded({ extended: true })); // built-in middleware

//flash configuration
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

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
    msg: req.flash('msg'),
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
app.post(
  '/contact',
  [
    body('name').custom(value => {
      const duplicate = checkDuplicate(value);
      if (duplicate) {
        throw new Error('Contact name has been registered!');
      }
      return true;
    }),
    check('email', 'Email is not valid!').isEmail(),
    check('phoneno', 'Phone No is not valid!').isMobilePhone('ms-MY'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('add-contact', {
        title: 'Add Data Contact Form',
        layout: 'layouts/main-layout',
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      req.flash('msg', 'Contact Data has been added!');
      res.redirect('/contact');
    }
  }
);

//delete contact process
app.get('/contact/delete/:name', (req, res) => {
  const contact = findContact(req.params.name);
  if (!contact) {
    res.status(404);
    res.send('<h1>404</h1>');
  } else {
    deleteContact(req.params.name);
    //3rd, we copy and paste from above
    req.flash('msg', 'Contact Data has been deleted!');
    res.redirect('/contact');
    //4th, try to delete the name once again it's successful. Next to update the data. Go to 152
  }
});

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
