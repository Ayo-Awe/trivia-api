const router = require("express").Router();
const controller = require("../Controllers/category.controller");

router.get("/", controller.handleGetCategories);
router.get("/:categoryId", controller.handleGetCategoryById);
router.get("/:categoryId/questions", controller.handleGetQuestionsByCategory);
router.post("/", controller.handleCreateCategory);

module.exports = router;
