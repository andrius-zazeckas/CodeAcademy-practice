const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");

  res.statusCode = 200;

  res.end("Hello");
});

server.listen(port, () => {
  console.log("server is running");
});
