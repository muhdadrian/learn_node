//1st, after changing all the extension from html to ejs, try to nodemon app once again.
//2nd, commented the rest of res.sendFile to be replaced with res.render
//3rd, you can visit ejs or npm site to read about the features of ejs (what it can do)
//4th, we want to display the var content for example. Go to 103

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.sendFile('./index.html', { root: __dirname });
  res.render('index'); //it's enough to write only the file name. It will look if there's index file in views folder. We need not to determine where the root folder.
});

app.get('/about', (req, res) => {
  // res.sendFile('./about.html', { root: __dirname });
  res.render('about');
});

app.get('/contact', (req, res) => {
  // res.sendFile('./contact.html', { root: __dirname });
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
