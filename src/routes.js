const express = require("express")
const router = express.Router()
const UserController = require("./controllers/UserController")

router.get("/users", UserController.index)

router.get("/users/:id", UserController.findOne)

router.post("/users", UserController.create)

router.put("/users/:id", UserController.update)

router.delete("/users/:id", UserController.destroy)

module.exports = { router }