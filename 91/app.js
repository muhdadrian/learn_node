const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //res.send('Hello World!');//1st, this will return text (not a web page )
  //res.send('<h1>Hello World!</h1>'); //2nd, by default, it will return text that is already translated by browser to be an html doc

  //3rd, we can also pass json (you can read in express doc):
  //the name should be "name", but here the json will resolve it automatically

  res.json({
    name: 'Adrian',
    email: 'adriannandu@gmail.com',
    phoneNo: '0128356382',
  });
});
//4th, http://localhost:3000/
//5th, you can install JSONView extension in Chrome
//we can also use res.sendFile in 92

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
