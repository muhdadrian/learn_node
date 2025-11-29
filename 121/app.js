/* Built-in Middleware */

// 6th, it goes the same if we have css file. We make css folder inside public and create style.css.
//7th, to call the css file, go to main-layout.ejs.
//8th, if you commented the app.use(express.static('public')) at below, you cannot call the css. Now we go to 122 for third-party middleware

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);

//1st, we build built-in middleware
app.use(express.static('public'));

//2nd, we create public folder in root. Whatever we put in the folder, we can access them
//3rd, move the img folder to public folder
//4th, try to access the file through url (http://localhost:3000/img/adrian.jpg)
//5th, go to about.ejs

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

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

app.get('/product/:id', (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category : ${req.query.category}`
  );
});

app.use((req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
