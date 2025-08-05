const http = require('http');
const port = 6000;
const server = http.createServer((req, res) => {
    res.end("Node.js App Deployed via Jenkins!");
});
server.listen(port, () => console.log(`Server running on port ${port}`));

