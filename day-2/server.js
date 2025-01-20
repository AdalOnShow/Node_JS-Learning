// const http = require("http")

// http.createServer((req, res) => {
//   res.end("Hello! I am your first server");
// }).listen(3000)




const http = require("http")
const prot = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => {
  res.end("Hello! I am your first server");
});

myServer.listen(prot, hostname, () => {
  console.log(`Server is running successfully on http://${hostname}:${prot}`);
})