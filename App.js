var http = require('http');
var port = process.env.PORT || 8085
var app = require('./server');
http.createServer(app.handleRequest).listen(port);
//console.log("server is running on 8085")
