const router = require("express").Router();

module.exports = ({UserRoutes})=>{
    router.use("/user",UserRoutes);
    return router;
}