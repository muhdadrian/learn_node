const http = require('http');
const port = 3000;

http
  .createServer((req, res) => {
    //we make routing system manually
    const url = req.url;
    console.log(url); //we fetch the url 1st
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.write('Hello World!');
    res.end();
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });

//node app
//write contact after localhost:3000/contact. The contact will be printed in the terminal. Likewise about etc.
