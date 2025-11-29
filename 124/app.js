//1st, we'll work with contact method (route) at below.
//2nd, open the contact.json file and we simulate the data first (all are lowercase -- it's ok). Make two data simulation.
//3rd, go to contact method below

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
  const contacts = loadContact(); //4th, we fetch the data from contact.json
  console.log(contacts); //5th, run the nodemon and refresh the contact page in browser. The data will be printed in the terminal
  //6th, we commented the console.log above. Go to 125
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Contact Page',
  });
});

app.use((req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
