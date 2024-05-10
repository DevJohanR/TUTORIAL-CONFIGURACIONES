const server = require ('./src/server.js');
require("./src/db.js")

server.listen("3001", ()=>{
    console.log("Listening on port", 3001)
})