const http = require('node:http');
const PORT = process.env.PORT || 80;
const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        message: 'Hello from NODE on EC2'
    }));
});

server.listen(PORT);
console.log(`app started listening on port ${PORT} ... press CTRL + C to quit.`);