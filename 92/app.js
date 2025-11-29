const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.json({
  //   name: 'Adrian',
  //   email: 'adriannandu@gmail.com',
  //   phoneNo: '0128356382',
  // });
  //1st, we want to return html file:
  res.sendFile('./index.html', { root: __dirname }); //2nd, we write relative path to the root (1st param) | (2nd param) we need to tell where the root by sending object. The root is folder 92
});

//3rd, now we change all the res for about and contact pages with our html files in 93

app.get('/about', (req, res) => {
  res.send('This is About Page!');
});

app.get('/contact', (req, res) => {
  res.send('This is Contact Page!');
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
