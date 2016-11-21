/**
 * Created by vajoy on 2016/11/21.
 */
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});

server.listen(3000, () => {
    console.log(`node server is now running/`);
});