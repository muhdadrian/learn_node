/* Application-level middleware */

//1st, go to browser. Check middleware in expressjs doc
//2nd, the routes below we can assume as middleware

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);

//4rd, we make a new middleware (Application-level middleware) on the top
//app.use('/'); //5th, we remove ('/') so that this middleware will be executed in each req
//6th, in expressjs doc it used function declaration, but we use arrow function here
app.use((req, res, next) => {
  console.log('Time: ', Date.now()); //7th the middleware will display a time
  next(); //8th, after this middleware is executed, express will move to the next middleware (it depend what we write in http://localhost:3000/. If nothing added then, it will run the index page)
  //9th, check the time in the terminal after you refresh the browser (run the app 1st with nodemon)
  //10th, after the time is displayed, then the homepage is displayed
  //11th, if we go to about page, the time is displayed 1st before the about page is displayed
  //12th, don't forget to write the next(), as it will be hanged. Try to comment it. Go to 117 for further next explanation
});

app.get('/', (req, res) => {
  const students = [
    {
      name: 'Adrian Nandu',
      email: 'adriannandu@gmail.com',
    },
    {
      name: 'Hafizah Hamran',
      email: 'hafizahhamran@gmail.com',
    },
    {
      name: 'Sarah Sophia Adrian',
      email: 'sarahsophia@gmail.com',
    },
  ];
  res.render('index', {
    name: 'Adrian Nandu',
    title: 'Home Page',
    students,
    layout: 'layouts/main-layout',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About Page',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Contact Page',
  });
});

app.get('/product/:id', (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category : ${req.query.category}`
  );
});

//3rd, we remove the ('/') below. The function below will always be executed when it received slash (/) route. When we delete the slash, it will clear that the function (now we call middleware) will always run in each request. But, due to its position at the bottom, each req based on the route above (about, contact etc), it will not run

//app.use('/', (req, res)
app.use((req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
