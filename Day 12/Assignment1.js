// 1) in http server pass data as query parameter 
//   and use that data to display on HTML Page 
//   fName=ABC&lName=XYZ

// 	o/p Hello <fName>


// const h = require('http');
// var url = require('url');
// const server = h.createServer(
//   function (request, response) {

//     let d = request.url;// whole  url b.html?fName=abc 
//     let d1 = url.parse(d, true).query;//object 

//     response.writeHead(200, { 'content-type': 'text/html' });
//     console.log(request.headers);
//     if (d1.name == 'Arya') {
//       response.write("<h1>" + d1.name + "</h1>");
//     } else
//       response.write(JSON.stringify({ message: "Hello" }));
//     //response.write("Hello World ");
//     response.end();



//   });

// server.listen(8079);

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const query = parsedUrl.query;  // object of query params

  response.writeHead(200, { 'Content-Type': 'text/html' });

  if (query.fName === 'Ajay') {
    response.write(`<h1>Hello ${query.fName}</h1>`);
  } else if (query.fName) {
    response.write(`<h1>Hello ${query.fName}</h1>`);
  } else {
    response.write('<h1>Hello Guest</h1>');
  }

  response.end();
});

server.listen(8079, () => {
  console.log('Server running on http://localhost:8079');
});
