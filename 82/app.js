const http = require('http');
const port = 3000;

http
  .createServer((req, res) => {
    // const url = req.url;
    // console.log(url);
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    //we move the url to here:
    const url = req.url;
    if (url === '/about') {
      res.write('<h1>This Is About Page!</h1>');
      res.end(); //to stop it when about page is true
    } else if (url === '/contact') {
      res.write('<h1>This Is Contact Page!</h1>');
      res.end();
    } else {
      res.write('Hello World!');
      res.end();
    }
    // res.write('Hello World!');
    // res.end();
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });

//node app
//http://localhost:3000/about
//http://localhost:3000/contact
//http://localhost:3000/ (else will go to here)
//to make our own html. Go to 83
