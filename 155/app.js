//1st, go to edit data process below

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
  '/contact/update',
  [
    //3rd, we add object with req inside it at below:
    body('name').custom((value, { req }) => {
      const duplicate = checkDuplicate(value);
      //2nd besides duplicate, we want the value is not similar with the old name. But, the problem is in this middleware we do not have access to object req. We can only access at 'a' below as it's being sent. So that we can access, we need to pass as param in the validation above. Express validator allows it as long as we send an object with content of req at 3rd
      if (value !== req.body.oldName && duplicate) {
        throw new Error('Contact name has been registered!');
      }
      //4th to understand code above: 1st check the name is not similar with the old name and duplicate, then it will display error as it's already used. But, if the name is similar then it's passed. Go to under else below for 5th
      return true;
    }),
    check('email', 'Email is not valid!').isEmail(),
    check('phoneno', 'Phone No is not valid!').isMobilePhone('ms-MY'),
  ],
  (req, res) => {
    //a
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('edit-contact', {
        title: 'Edit Data Contact Form',
        layout: 'layouts/main-layout',
        errors: errors.array(),
        contact: req.body,
      });
    } else {
      res.send(req.body); //5th, the data from form will be sent to req.body if it's successful
      //6th, try to edit a name by forgetting the .com in email and let name and phoneno as they are. The result is only the email is not valid
      //7th, try to change both email and phone with valid ones. The data entered into 'else'. Now the data is ready to be edited.
      //8th, we need to correct an item. If we change its name from Adrian James Nandu to Hafizah Hamran (already registered). It passed the 1st condition (name not similar) but, it's failed in second condition (duplicate). But, when we click the Edit Contact Data button once again, the new edited data (Hafizah Hamran) will be sent. This is dangerous despite Hafizah Hamran already registered, but it will overwrite Adrian James Nandu. Go to edit-contact.ejs in 156

      // addContact(req.body);
      // req.flash('msg', 'Contact Data has been added!');
      // res.redirect('/contact');
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
