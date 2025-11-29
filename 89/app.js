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

//1st, we want to handle 404 (this for example only). The best is to use respective response page
app.use('/', (req, res) => {
  res.send('<h1>404</h1>');
});
//2nd, try http://localhost:3000/asd. 404 will appear. If the page is existed. It will execute the route
//3rd, inspect in browser. Go to network (Status Code: 304 Not Modified). We want the status code 404. Go to 90

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
