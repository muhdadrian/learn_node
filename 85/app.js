const http = require('http');
const fs = require('fs');
const port = 3000;

//1st we make a new function
//we need path and response
const renderHTML = (path, res) => {
  //2nd we copy from the about below and make it abstract by replacing the url with path
  // fs.readFile('./about.html', (err, data)
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('Error: file not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const url = req.url;
    if (url === '/about') {
      renderHTML('./about.html', res);
      //3rd we replace the code below with renderHTML above
      // fs.readFile('./about.html', (err, data) => {
      //   if (err) {
      //     res.writeHead(404);
      //     res.write('Error: file not found!');
      //   } else {
      //     res.write(data);
      //   }
      //   res.end();
      // });
    } else if (url === '/contact') {
      renderHTML('./contact.html', res);
      //6th we replace commented code below with above (renderHTML)
      // res.write('<h1>This Is Contact Page!</h1>');
      // res.end();
    } else {
      //4th we do the same like about page above
      // fs.readFile('./index.html', (err, data) => {
      //   if (err) {
      //     res.writeHead(404);
      //     res.write('Error: file not found!');
      //   } else {
      //     res.write(data);
      //   }
      //   res.end();
      // });
      renderHTML('./index.html', res);
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });

//5th we make contact.html
//7th we can use switch to make the code simpler in 86
