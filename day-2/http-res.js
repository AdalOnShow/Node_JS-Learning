const http = require("http")
const prot = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/html" });
  res.write("<h2>Hello! I am your first server</h2>");
  res.end();
});

myServer.listen(prot, hostname, () => {
  console.log(`Server is running successfully on http://${hostname}:${prot}`);
})