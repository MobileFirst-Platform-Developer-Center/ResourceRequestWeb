var express = require('express');
var http = require('http');
var request = require('request');

var app = express();
var server = http.createServer(app);
var port = 9081;

server.listen(port);
app.use('/myapp', express.static(__dirname + '/'));
console.log('Listening on port ' + $port);

// Web server - serves the web application
app.get('/home', function(req, res) {
    // Website you wish to allow to connect
    res.sendFile(__dirname + '/index.html');
});

// Reverse proxy, pipes the requests to/from MobileFirst Server
app.use('/mfp/*', function(req, res) {
    var url = 'http://localhost:9080' + req.originalUrl;
    console.log('passing to URL: ' + url);
    req.pipe(request[req.method.toLowerCase()](url)).pipe(res);
});