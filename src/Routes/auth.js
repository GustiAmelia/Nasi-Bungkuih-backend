const authRouter = require("express").Router();

const authController = require("../Controllers/auth");

authRouter.post("/register", authController.register);
authRouter.get("/login", authController.login);
// authRouter.get("/verify", authController.verify);

module.exports = authRouter;