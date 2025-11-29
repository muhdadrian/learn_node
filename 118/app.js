/* Application-level middleware */

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);

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

app.get('/about', (req, res, next) => {
  //1st, we try not to render but console.log
  // res.render('about', {
  //   layout: 'layouts/main-layout',
  //   title: 'About Page',
  // });
  console.log('This is about page'); //2nd we run the app. This will display 404. There are three middleware being run -- time middleware, about middleware (console.log) and render 404 web (See at terminal). The web is displayed as there's next() below.
  next();
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
