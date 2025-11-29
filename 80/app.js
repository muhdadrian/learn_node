const http = require('http');
const port = 3000;

http
  .createServer((req, res) => {
    //writeHead:
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
//the font will change in browser.
//inspect or ctrl + i
//go to network
//refresh the browser to get the localhost
//pull it upward
//click the favicon.ico
//now it's still manual and we cannot move to other page for example http://localhost:3000/about or http://localhost:3000/contact
//to go to other page, we need to do it manually in 81
