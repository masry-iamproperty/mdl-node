const http = require('node:http');
const PORT = 3000;
const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        message: 'Hello from NODE on EC2'
    }));
});

server.listen(PORT);