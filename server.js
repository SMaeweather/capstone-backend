const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());

const { db, Business } = require("./db/db.js");

server.get("/", (req, res) => {
  res.send({ message: "Server online" });
});

server.get("/businesses", async (req, res) => {
  res.send({ businesses: await Business.findAll() });
});

server.get("/businesses/:type", async (req, res) => {
  res.send({
    businesses: await Business.findAll({ where: { type: req.params.type } }),
  });
});

server.listen(3001, () => {
  console.log("Server online");
});
