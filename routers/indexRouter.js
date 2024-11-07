// routes/indexRouter.js
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Index hit..."));

module.exports = indexRouter;
