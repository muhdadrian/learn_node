//1st, we add flash message when the data is successfully added. We install express-session from npm (npm i express-session@1.17.1)
//2nd, we install cookie-parser (npm i cookie-parser@1.4.5)
//3rd, we install module to do flash: connect-flash (npm i connect-flash@0.1.1)
//4th, run nodemon app
//5th, we require at below (you can read in doc how to require each)

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
} = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session'); //6th, we require express-session
const cookieParser = require('cookie-parser'); //7th, we require cookie-parser
const flash = require('connect-flash'); //8th, we require flash. Go to 9th below
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts); // third party middleware
app.use(express.static('public')); // built-in middleware
app.use(express.urlencoded({ extended: true })); // built-in middleware

//9th, flash configuration (we use middleware). The default is secret (secret msg)
app.use(cookieParser('secret'));
//10th, all the values below are from the default value in doc
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
//11th, middleware for flash:
app.use(flash());

//12th, go to 13th below

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
    contacts, //besides sending contacts, we will also send the msg at below
    msg: req.flash('msg'), //15th. Where we get the msg? It's from req.flash('msg') that we get from 14th at below. It will check the msg var in the session. If there's value in it, it will go to msg. The msg might be empty when we open the contact registration page and there's new data being added. Go to contact.ejs
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
      //return res.status(400).json({ errors: errors.array() });
      //to display the error message to the user:
      res.render('add-contact', {
        title: 'Add Data Contact Form',
        layout: 'layouts/main-layout',
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      req.flash('msg', 'Contact Data has been added!'); //13th, we send flash message before we redirect (msg (1st param) and what is the message (2nd param)). In session, there will be msg var with value of the 2nd param.
      //14th, the flash message will be captured by 15th above (contact page)
      res.redirect('/contact');
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
