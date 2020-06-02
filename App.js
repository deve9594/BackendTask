var http = require('http');
var app = require('./server');
http.createServer(app.handleRequest).listen(8085);
console.log("server is running on 8085")
