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
      res.write('<h1>This Is About Page!</h1>');
      res.end();
    } else if (url === '/contact') {
      res.write('<h1>This Is Contact Page!</h1>');
      res.end();
    } else {
      //we want to find file index, open it and take its content. We did this in Code Module
      fs.readFile('./index.html', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write('Error: file not found!');
        } else {
          res.write(data); // the data is from the 2nd param above
        }
        res.end(); //either successful or fail, the respond ended (a)
      }); //this is asynchronous. Require this 1st at above (const fs). The 2nd param is callback function
      //res.end();//delete this as we have res.end above at (a)
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });

//node app
//http://localhost:3000/ (it's from the index.html)

//the question now is each page has its html for example the about page (about.html) is using bootstrap. Go to 84
