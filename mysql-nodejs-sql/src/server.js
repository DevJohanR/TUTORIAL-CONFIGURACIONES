//src/server.js

const cors = require('cors');
const express = require('express');
const mainRouter = require('./routes/mainRouter')


const server = express();
server.use(cors());

server.use(express.json());



server.use("/", mainRouter)


module.exports = server;