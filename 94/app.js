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

//1st we need to get an id -- http://localhost:3000/product/id:
//go to product page and capture the id. The id will be used as a placeholder until it can be captured to be a var.
//at second param, we call its callback function
app.get('/product/:id', (req, res) => {
  //we capture the id -- we take from req.params:
  res.send('Product ID : ' + req.params.id);
});

//2nd, nodemon app:
//http://localhost:3000/product/1
//http://localhost:3000/product/20

//3rd, to capture category. Go to 95

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
