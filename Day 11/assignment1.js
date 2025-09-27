// Import the HTTP module
const http = require('http');

//server object
const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
  
  res.end('Hello, From Node JS Server !\n');

});


// Start the server 
server.listen(8078);
console.log("Server Started");