/**
 * Created by bluexu on 15/6/24.
 */
//app.js

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<head><meta charset="utf-8"/></head>');
    res.write('<h1>Node.js</h1>');
    res.write('亲爱的，你慢慢飞，小心前面带刺的玫瑰...\n');
    res.end('<p>Hello World</p>');

}).listen(1437,'127.0.0.1');

console.log("'Server running at http://127.0.0.1:1437/'");
