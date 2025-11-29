/*
Express View Engine (view / template engine):
1. to enable us make a static template file for our apps
2. the engine will replace the var in our template with the real value to display HTML
3. to make it easy to make HTML page

@ There are more than 20 templating engines we can use (read in doc)

@ EJS (embedded js template) is one of the template engines 
*/

/*
we are going to use ejs (can read in https://ejs.co/):
1. simple syntax
2. simple setup
3. speedy execution
4. easy debugging
5. active development
6. initially built by express creator

@ EJS is similar with templating engine in PHP 

@ if you are using laravel and codeigniter for example, the templating engine already planted in those frameworks

@ we can install EJS from npm 
*/

//1st install: npm install ejs@3.1.6

const express = require('express');
const app = express();
const port = 3000;

//2nd, use ejs (express will detect if there's view page in views folder). We make views folder in 101
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
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
