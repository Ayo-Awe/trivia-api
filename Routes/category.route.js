const router = require("express").Router();
const controller = require("../Controllers/category.controller");

router.get("/", controller.handleGetCategories);
router.get("/:categoryId", controller.handleGetCategoryById);
router.post("/", controller.handleCreateCategory);
router.patch("/:categoryId", controller.handleEditCategory);
router.delete("/:categoryId", controller.handleDeleteCategory);
router.get("/:categoryId/questions", controller.handleGetQuestionsByCategory);

module.exports = router;
