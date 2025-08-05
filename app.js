
const http = require('http');
const port = 6000;
const host = '0.0.0.0'; // <-- this is important

const server = http.createServer((req, res) => {
    res.end("Node.js App Deployed via Jenkins!");
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
