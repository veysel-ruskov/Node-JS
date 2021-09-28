var http = require('http');
var fs = require('fs');
const { version } = require('os');

http.createServer(function (req, res) {

    if (req.url === '/') {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        var html = fs.createReadStream(__dirname + '/index.htm', 'utf8').pipe(res);
    }

    if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }

    res.writeHead(404);
    res.end();



}).listen(1337, '127.0.0.1');