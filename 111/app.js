//1st, we learn system layout. We will work with about.ejs and contact.ejs. Open both files of about and contact (both files we are using bootstrap).
//2nd, both about and contact are identical except its body content.
//3rd, if we have view page that its content only different in certain part. It's better to use layout system.
//4th, for about page for example, we will divide into four parts (header, link (or navigation), page content, footer)
//5th, we make a new folder (layouts/partial) in views folder. In layouts there are three files (header.ejs, nav.ejs, footer.ejs)
//6th, we cut all the parts in 112

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

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
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
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
