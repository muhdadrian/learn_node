// 1st, go to process the contact data below

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts); // third party middleware
app.use(express.static('public')); // built-in middleware
app.use(express.urlencoded()); // built-in middleware

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
app.post('/contact', (req, res) => {
  //res.send('data has been sent!');
  res.send(req.body); //2nd, send the data here
  //3rd, try to resubmit the data. The send data will be displayed in the browser in json format.
  //4th, to input the new data into contact.json go to 140
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
