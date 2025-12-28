require("dotenv").config();
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 7000;

const server = http.createServer((req, res) => {
  res.end("Working");
});

server.listen(port, () => {
  console.log(`Running on Port: localhost://${port}`);
});
