const http = require('http');

http
  .createServer((req, res) => {
    res.write('Hello World!');
    res.end();
  })
  //we use port 1234
  .listen(1234, () => {
    console.log('Server is listening on port 1234..');
  });

//node app (in terminal)
//http://localhost:1234/ (in browser)
