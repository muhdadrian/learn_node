const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('This is About Page!');
});

app.get('/contact', (req, res) => {
  res.send('This is Contact Page!');
});

//1st, we want to make the res.status 404, to tell the page is not existed
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});
//2nd, go to browser once again (http://localhost:3000/asd) and inspect. Check at network. Now the status code is (Status Code: 404 Not Found)
//we can handle easily if the page is not existed

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//3rd, you may ask, when we make routing, we have callback that has (req, res). You can read in the doc.
