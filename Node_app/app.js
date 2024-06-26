const { createServer } = require('node:http');

const hostname = '0.0.0.0';
const port = 3000;

const server = createServer((req, res) => { 
  console.log("Request from: ", req.socket.remoteAddress);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
