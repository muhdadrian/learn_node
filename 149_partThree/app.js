//1st, we will add delete and update functions.
//2nd, go to detail.ejs

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
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

//3rd, we put this method above the contact detail page below. If we put it below it, the detail page will be executed instead of this method. Unless we use app.delete later, then it will be no problem.
//delete contact process (arrow function that has param of req and res)
app.get('/contact/delete/:name', (req, res) => {
  //4th, try to put the cursor on the delete button. Look at the bottom left, there's url for the specific data.
  const contact = findContact(req.params.name); //5th, we take the contact (url) first like we did in contact detail page at below.
  //6th, We cannot directly delete, as we want to check whether the contact name is existed in json file or not
  if (!contact) {
    res.status(404);
    res.send('<h1>404</h1>'); //we give message of 404
  } else {
    res.send('ok'); //7th, try to click the delete button, the ok message will be displayed, as the name is existed in the 'database'.
  }
  //8th, try to put in the url (http://localhost:3000/contact/delete/asdasa), the non-existant name, it will display 404 page. Go to 150 to create delete function.
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
