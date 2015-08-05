/**
 * Created by bluexu on 15/6/22.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('我在用 Node.js写程序\n');
}).listen(1437, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1437/');
