/* Application-level middleware */

//1st, we can make more than one middleware

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

//2nd, we make another middleware
app.use((req, res, next) => {
  console.log('This is second middleware');
  next();
});

//3rd, the attribute is the same where from top to bottom. It will go first to top, then to second middleware above. Then to index below.

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

//4th, if we put the new middleware above to here after about. This will never run after we access about page. But, if we access contact page, then this middleware will run.

// app.use((req, res, next) => {
//   console.log('This is second middleware');
//   next();
// });

//5th, the time run first, then the middleware above and then the contact page is displayed

//6th, if the page is not existed (http://localhost:3000/contact/ada). There are three middleware will run -- time, the new middleware and the bottom middleware. Now we go to built-in middleware in 120

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
