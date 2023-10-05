const http = require('http');

const server = http.createServer(function(request, response) {
  // console.log(request.url);
  if(request.url === "/") {
    let doc = '<heml> <head> </head> <body> <h1> <a href= "http://localhost:1234/sub">sub</a> <a href= "http://localhost:1234">main</a> <a href= "http://localhost:1234">a</a> <a href= "http://localhost:1234/b">b</a> <a href= "http://localhost:1234/c">c</a> <a href= "http://localhost:1234/d">d</a> </h1> </body> </html>'
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(doc)
  }
  if(request.url === "/sub") {
    let doc = '<heml> <head> </head> <body> <h1> <a href= "http://localhost:1234">main</a> <a href= "http://localhost:1234/sub">sub</a> <a href= "http://localhost:1234">a</a> <a href= "http://localhost:1234/b">b</a> <a href= "http://localhost:1234/c">c</a> <a href= "http://localhost:1234/d">d</a> </h1> </body> </html>'
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(doc)
  }
  if(request.url === "/a") {
    let doc = '<heml> <head> </head> <body> <h1> <a href= "http://localhost:1234/a">a</a> <a href= "http://localhost:1234/sub">sub</a> <a href= "http://localhost:1234">main</a> <a href= "http://localhost:1234/b">b</a> <a href= "http://localhost:1234/c">c</a> <a href= "http://localhost:1234">d</a> </h1> </body> </html>'
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(doc)
  }
  if(request.url === "/b") {
    let doc = '<heml> <head> </head> <body> <h1> <a href= "http://localhost:1234/b">b</a> <a href= "http://localhost:1234/sub">sub</a> <a href= "http://localhost:1234">main</a> <a href= "http://localhost:1234/a">a</a> <a href= "http://localhost:1234/c">c</a> <a href= "http://localhost:1234/d">d</a> </h1> </body> </html>'
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(doc)
  }
  if(request.url === "/c") {
    let doc = '<heml> <head> </head> <body> <h1> <a href= "http://localhost:1234/c">c</a> <a href= "http://localhost:1234/sub">sub</a> <a href= "http://localhost:1234">main</a> <a href= "http://localhost:1234/a">a</a> <a href= "http://localhost:1234/b">b</a> <a href= "http://localhost:1234/d">d</a> </h1> </body> </html>'
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(doc)
  }
  if(request.url === "/d") {
    let doc = '<heml> <head> </head> <body> <h1> <a href= "http://localhost:1234/d">d</a> <a href= "http://localhost:1234/sub">sub</a> <a href= "http://localhost:1234">main</a> <a href= "http://localhost:1234/a">a</a> <a href= "http://localhost:1234/b">b</a> <a href= "http://localhost:1234/c">c</a> </h1> </body> </html>'
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(doc)
  }


  // console.log(request);
  // console.log(response);
  // response.writeHead(200, {"Content-Type": "text/html"});


});

server.listen(1234);