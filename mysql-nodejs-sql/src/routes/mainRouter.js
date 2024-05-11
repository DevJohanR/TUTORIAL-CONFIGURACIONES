//src/routes/mainRouter.js
const { Router } = require("express");
const userController = require("../controllers/userController")
const mainRouter = Router();

mainRouter.post("/register", userController.createUser);
mainRouter.post("/login", userController.loginUser)


module.exports = mainRouter;