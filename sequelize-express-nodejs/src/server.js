const express = require ('express');
const server = express();



server.get("/", (req,res)=>{
    res.send("ruta funcionando")
})


module.exports= server;