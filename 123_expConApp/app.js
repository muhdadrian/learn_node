//1st, replace the code in nav.ejs with bootstrap code (navbar)
//2nd, go to contact.ejs. Replace the code with bootstrap structure
//3rd, copy the cdn for bootstrap icon and paste it at main-layout.ejs
//4th, add icon in contact.ejs (look for info icon in bootstrap)
//5th, delete the background color in css
//6th, open your last contactApp (CLI). Copy from the top to the const loadContact in contacts.js.
//7th, make a folder (utils in root) and make contacts.js file inside the folder. Paste what you copied previously. Delete what are not relevant in the file (commented).
//8th, run the app (nodemon). The data folder (with contact.json file) will automatically created for you
//9th, we'll work with contact method in 123

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact } = require('./utils/contacts'); //8th, we require what we export in contacts.js. We can either write utils/contacts or utils/contacts.js.
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
