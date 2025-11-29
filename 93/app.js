const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

//1st we copy paste the res.sendFile
//by using this is much easier than using the switch case
app.get('/about', (req, res) => {
  // res.send('This is About Page!');
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  // res.send('This is Contact Page!');
  res.sendFile('./contact.html', { root: __dirname });
});
//2nd check at browser by using nodemon
//3rd, we can also use res.sendFile to fetch static file such as css, photo and pdf.
//4th, it's all about response. Now we discuss about request. You can read in doc. Go to 94

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
