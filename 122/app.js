/* Third-party middleware */
//1st, you can read the doc in expressjs or search at npm
//2nd, we try morgan (similar to console.log)
//3rd, install npm i morgan@1.10.0 (check at npm)

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan'); //4th, we require the morgan
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//third-party middleware
app.use(expressLayouts);
app.use(morgan('dev')); //5th, we call here. Read at npm doc. The dev is more complete.
//6th run the nodemon and click home at browser to make request and see the result in terminal
//7th, the middleware (Time:  1729791377896) is run then run the log (GET / 200 37.340 ms - 1318), then request to css
//8th, this logger is a middleware built by third party middleware (outside expressjs)

//built-in middleware
app.use(express.static('public'));

//application level middleware
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
