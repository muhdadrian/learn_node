/* Application-level middleware */

//1st, if we look at our routing (middleware), if we use get, we don't need next(), as after the routing is executed it stopped (not hanged but done and not going anywhere). If we want to add next, let's see it attribute. Go to about route at below
//5th, we run the app. If we go to about page in browser. There's an error in the terminal. Before error, the time is displayed first in the terminal.

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);

//6th, The top middleware will be run first. Then the next() below will look for another path. It will not go to index, then it found about (same path). Then it will display about. After that, it will run the next function for another middleware, not contact (as the path is contact) and product, but to the bottom middleware (404). Go to the there
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

//2nd we add next to the param
app.get('/about', (req, res, next) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About Page',
  });
  //3rd, we add next function
  next(); //4th, this will look for next middleware.
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

//7th, when here it will display web page containing 404. This page also posting header (Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client). One page cannot access two header. The about also sending header (render) and the bottom middleware also sending header (send). We try not to render the about route in 118
app.use((req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
