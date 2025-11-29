//1st, we cut the part in about (header, nav and footer)
//2nd, we temporarily disabled the prettier for ejs file so that it will not try to make the code 'neater' (by closing the body and html in header.ejs for example) and make trouble for us by making a new file (.prettierignore) in root. If you are using git it's called git.ignore. Prettier also has similar feature called .prettierignore.
//3rd we will ignore all file with ejs ext (*.ejs). Prettier will not run in ejs file. It's only for temporary so that our demo can be run.
//4th, if ignore file not working, try to delete the .prettierrc file 1st, then restore it back
//5th, we go to about. Cut the nav
//6th, last cut the footer
//7th, create ejs syntax in about to link with header, nav and footer
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
