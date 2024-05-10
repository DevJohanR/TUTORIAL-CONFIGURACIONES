const express = require('express');
const mainRouter = require('./routes/mainRouter')
const server = express();






server.use("/", mainRouter)


module.exports = server;