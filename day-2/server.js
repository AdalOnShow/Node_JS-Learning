const http = require("http")

http.createServer((req, res) => {
  res.end("Hello! I am your first server");
}).listen(3000)