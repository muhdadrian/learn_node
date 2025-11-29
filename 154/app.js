//1st, we copy and paste the 'process the contact data' below and overwrite the 'edit data process'

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

//process the contact data
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
    req.flash('msg', 'Contact Data has been deleted!');
    res.redirect('/contact');
  }
});

//edit contact data form
app.get('/contact/edit/:name', (req, res) => {
  const contact = findContact(req.params.name);

  res.render('edit-contact', {
    title: 'Edit Data Contact Form',
    layout: 'layouts/main-layout',
    contact,
  });
});

//edit data process
app.post(
  '/contact/update', //2nd, add /update after contact
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
      res.render('edit-contact', {
        //3rd, replace add with edit
        title: 'Edit Data Contact Form', //4th, replace add with edit
        layout: 'layouts/main-layout',
        errors: errors.array(),
        contact: req.body, //5th, even there's error, the page is still displayed by sending the contact data (we get the data from req.body -- data send through form)
      });
    } else {
      //6th, we commented the code below first:
      // addContact(req.body);
      // req.flash('msg', 'Contact Data has been added!');
      // res.redirect('/contact');
      //7th, we validate now from const duplicate above if there's duplicated name and if the email and phoneno are valid. If we edit only the email and phoneno for example Adrian James Nandu where we forgot the .com and the phoneno is lacking two numbers. Then, you see the result.
      //8th, the email and phoneno are ok, and we need to refine for the name in 155
    }
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
