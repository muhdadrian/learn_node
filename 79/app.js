const http = require('http');
const port = 3000;

http
  .createServer((req, res) => {
    res.write('Hello World!'); //currently we are only returning plain text (not web page). Try to view page source in browser. To return in HTML, there's a way
    //check in Node.js doc -- response.writeHead under HTTP. Go to 80
    res.end();
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });
