const http = require("http")
const fs = require("fs")
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handelReadFile = (statusCode, data) => {
    fs.readFile(data, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" })
      res.write(data)
      res.end()
    })
  }

  if (req.url === "/") {
    handelReadFile(200, "views/index.html")
  } else if (req.url === "/about") {
    handelReadFile(200, "views/about.html")
  } else if (req.url === "/contact") {
    handelReadFile(200, "views/contact.html")
  } else {
    handelReadFile(404, "views/error.html")
  }
})

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
})