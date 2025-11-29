const http = require('http');

http
  .createServer((req, res) => {
    //what we want to display in the server after we made the server? The server will response:
    res.write('Hello World!');
    res.end(); //the command in the server is done. We can also put message inside () when it's done, but we're not going to do that
  })
  .listen(3000, () => {
    console.log('Server is listening on port 3000..');
  });

//node app:
//Server is listening on port 3000..
//but, the command prompt is hanged, as the server is working
//when it's working we go to our browser -- http://localhost:3000/
//it will display: Hello World!
//we are using Core Module to display -- it looked simple

//to read more about port:
//https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

//we can use other port number in 77
