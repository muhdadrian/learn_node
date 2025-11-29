const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//1st, we make a new page (about) route (copy paste the code at above):
app.get('/about', (req, res) => {
  res.send('This is About Page!');
});
//2nd, try to node app and check -- http://localhost:3000/about

//3rd we install global nodemon (But, I already installed it. So, no need to install it)

//4th we make contact page. Just copy paste from above
app.get('/contact', (req, res) => {
  res.send('This is Contact Page!');
});

//5th we can also use the use method to execute a middleware. Check at expressjs.com doc. Go to API reference. Find app.use.
app.use('/', (req, res) => {
  res.send('Test');
});
//if we go to a page that is not existed (http://localhost:3000/asd). It will go to 'Test'. It means that the app.use will be always executed for whatever request. Why home, about and contact are executed first because we wrote request first. Don't put it on the top.
//app.use is used to handle the non-existant page
//we want to use for 404 in 89

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
