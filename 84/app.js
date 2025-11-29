const http = require('http');
const fs = require('fs');
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const url = req.url;
    if (url === '/about') {
      //we copy from index.html below:
      fs.readFile('./about.html', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write('Error: file not found!');
        } else {
          res.write(data);
        }
        res.end();
      });
      //we replace the commented code below with above code copied from index.html at below
      // res.write('<h1>This Is About Page!</h1>');
      // res.end();
    } else if (url === '/contact') {
      res.write('<h1>This Is Contact Page!</h1>');
      res.end();
    } else {
      fs.readFile('./index.html', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write('Error: file not found!');
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });

//node app
//http://localhost:3000/about
//you have to restart the server (node app) to make the url above work
//now all the pages are using html
//we can make this code neater by doing a new function in 85
