//expressjs features:
//to make routing system
//MVC
//templating system to organize template
//middleware
//database
//etc

/*
to implement expressjs:
1. go npm and look for express or go to its website https://expressjs.com/
2. npm init -y
3. npm install express --save or npm i express (both are the same)
4. npm i express@4.17.1
5. copy and paste from expressjs.com
6. try to run it: node app
7. root vs route (root is the main page) | app.get('/', (req, res) => {
  res.send('Hello World!');
}); (we make route from this and the / is route of our website)
*/

//1st copy and paste the code from expressjs.com
const express = require('express');
const app = express();
const port = 3000;

//2nd, to read: when the app is executed, then if there's a request method get to the main page (root), then execute the function
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//the code above is much simpler than the code below.

// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write('Error: file not found!');
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       'Content-Type': 'text/html',
//     });
//     const url = req.url;

//     switch (url) {
//       case '/about':
//         renderHTML('./about.html', res);
//         break;
//       case '/contact':
//         renderHTML('./contact.html', res);
//         break;
//       default:
//         renderHTML('./index.html', res);
//         break;
//     }
//   })
//   .listen(port, () => {
//     console.log(`Server is listening on port ${port}..`);
//   });
