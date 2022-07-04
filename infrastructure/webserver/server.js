const express = require("express");
const http = require("http");
const app = express();

module.exports = ({ routes }) => {
  const server = http.createServer(app);

  app.use(express.json())

  app.use(routes)

  return server;
};
