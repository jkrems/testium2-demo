var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end('<!DOCTYPE html><html><body><h1>Hello</h1></body></html>');
}).listen(process.env.PORT || 3000);
