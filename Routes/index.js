const router = require("express").Router();
const categoryRouter = require("./category.route");

router.use("/categories", categoryRouter);

module.exports = router;
