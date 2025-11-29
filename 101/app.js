//1st, we make views folder, and move the html files to that folder
//2nd, we need to call the views and make the lines of code below commented. We use res.render() to call the pages in views folder
//3rd, we try to execute it -- nodemon app. This will result in error. We need to replace the extension from .html to .ejs in 102. If you use other template engine like pug, you also need to change the extension to .pug

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.sendFile('./index.html', { root: __dirname });
  res.render('index'); //it's enough to write only the file name. It will look if there's index file in views folder. We need not to determine where the root folder.
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname });
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
