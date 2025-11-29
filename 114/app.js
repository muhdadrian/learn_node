//1st, we make a new layout in layouts folder (main-layout.ejs). Go to this file and use bootstrap
//2nd, delete the .prettierignore file
//3rd, we do the same in contact page just like in about page
//4th, all the content in about and contact pages will go to the body of main-layout under the div container
//5th, we must tell the route below through the sent data that we are going to use the main-layout
//8th, now we run the code -- nodemon app (index page will output error, but both about and contact pages are ok)
//9th, now we can delete footer and header in 115

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

//to use ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

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
  res.render('index', { name: 'Adrian Nandu', title: 'Home Page', students });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About Page',
  }); //6th, we make layout property. We can put before or after title
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Contact Page',
  }); //7th, we do the same here
});

app.get('/product/:id', (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category : ${req.query.category}`
  );
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
