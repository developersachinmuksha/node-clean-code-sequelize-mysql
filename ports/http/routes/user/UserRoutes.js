const router = require("express").Router();

module.exports = ({UserController})=>{
    router.get("/:id",UserController.findUser);
    router.post("/create",UserController.createUser);
    return router;
}