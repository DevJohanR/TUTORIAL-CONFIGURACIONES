const { Router } = require("express");

const mainRouter = Router();

mainRouter.get("/test", (req,res)=>{
    res.send("¡Hola desde ruta de prueba!")
})


module.exports = mainRouter;