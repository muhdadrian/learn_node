//1st, we pass the data from contact.json to the view. Go to contact method below.
//4th, run the app. Our data will repeat (loop) twice with the same name, as the data in our array is two. But, the content is still static in contact.ejs. Go to 126
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact } = require('./utils/contacts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.use(express.static('public'));

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
  const contacts = loadContact(); //a
  res.render('contact', {
    title: 'Contact Page',
    layout: 'layouts/main-layout',
    //contacts: contacts, //2nd, we pass to here. The var to be sent is contacts and we get the data from contacts var in a. If the name is similar you can delete the right contacts from contacts: contacts to contacts at below
    contacts, //3rd, we delete the contacts at the right. This will be sent to contact.ejs. Go to contact.ejs
  });
});

app.use((req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
