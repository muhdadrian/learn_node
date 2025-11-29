const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname });
});

//1st, we add category
app.get('/product/:id/category/:idCat', (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`
  );
});
//2nd nodemon app -- http://localhost:3000/product/20/category/10
//req is what we send to express and res is what is returned by express
//3rd we want to query string in 96

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
