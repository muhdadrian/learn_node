const http = require('http');
//or we can make var for the port
const port = 1234;

http
  .createServer((req, res) => {
    res.write('Hello World!');
    res.end();
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });

//node app
//http://localhost:1234/

//btw, we just use 3000 in 79
