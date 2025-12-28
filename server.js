require("dotenv").config();
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 7000;

const server = http.createServer((req, res) => {
  if (req.url === "/style.css") {
    fs.readFile(path.join(__dirname, "public", "style.css"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading style.css");
        return;
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  } else if (req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading index.html");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading about.html");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading contact.html");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(port, () => {
  console.log(`Running on Port: localhost://${port}`);
});
