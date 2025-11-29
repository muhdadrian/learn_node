const http = require('http'); //you can check the doc in nodejs.org

//we'll use createServer.
//requestListener can accept two params: request(req) and response(res)
const server = http.createServer((req, res) => {});

//to execute the server, use listen method
//its parameter is the port
server.listen(3000, () => {
  console.log('Server is listening on port 3000..'); //the message when the server is already working
}); //the ? is optional, hostname let it empty and by default it's a localhost | the next param is listening listener or callback in function. The callback could be an error or we just empty it

//for simpler code at above we do chaining in 76
