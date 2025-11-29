//1st, go to contact route below
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
  const contacts = loadContact();

  res.render('contact', {
    title: 'Contact Page',
    layout: 'layouts/main-layout',
    contacts,
  });
});

//2nd, we copy from above. The difference is, the contact below is with param, while above without param (name)
app.get('/contact/:name', (req, res) => {
  // 3rd, we are not using loadContact, as it will load all the contacts in json. But, we are looking for specific contact according to the passed name
  //const contacts = loadContact();
  // const contact = findContact(req.params.name); //4th, const contact (singular) as we are looking for a specific single name. We will make findContact function to accept the name in the param above. To get the param is by using req.params.name. The params' name is name (params.name)

  //5th, we pass not to contact page any longer, but another view (page) -- detail. Replace the title and contacts also
  //res.render('contact',
  // title: 'Contact Page',
  // layout: 'layouts/main-layout',
  // contacts,
  res.render('detail', {
    title: 'Detail Contact Page',
    layout: 'layouts/main-layout',
    //contact, //singular not plural
  });
});

//6th, we make a detail page under views folder (detail.ejs). It similar to contact.ejs (bootstrap structure)

app.use((req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
