//1st, copy and paste the code in about to contact. Just change the h1 to tell it's a contact page
//2nd, now we want to send data from app to about and contact through the routes at below
//5th, we write the title in header
//6th, go to npm and search for express-ejs-layouts. Install npm i express-ejs-layouts@2.5.0
//7th run the nodemon

const express = require('express');
const expressLayouts = require('express-ejs-layouts'); //8th we require the express-ejs-layouts
const app = express();
const port = 3000;

//to use ejs
app.set('view engine', 'ejs');
app.use(expressLayouts); //9th, we call it here (this is the configuration or set up)
//10th, we make main layout so that we will not need the header and footer any longer. Go to 114

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
  res.render('about', { title: 'About Page' }); //3rd, we add object
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' }); //4th, we copy from 3rd and change to Contact
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
