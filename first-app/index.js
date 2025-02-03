const http = require("http");
const fs = require("fs");
const PORT = 3000;

const handelReadFile = (filename, statusCode, res) => {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  })
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handelReadFile("views/index.html", 200, res);
  } else if (req.url === "/about") {
    handelReadFile("views/about.html", 200, res);
  } else if (req.url === "/contact") {
    handelReadFile("views/contact.html", 200, res);
  } else {
    handelReadFile("views/404.html", 404, res);
  }
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})