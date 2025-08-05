
const http = require('http');
const port = 5000;
const host = '0.0.0.0'; // <-- this is important

const server = http.createServer((req, res) => {
    res.end("ELEVATELABS TASK2!");
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
