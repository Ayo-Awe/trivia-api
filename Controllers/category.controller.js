const {
  getCategories,
  createCategory,
  getCategoryQuestions,
  getCategoryById,
} = require("../Services/category.service");

async function handleGetCategories(req, res, next) {
  try {
    const categories = await getCategories();

    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function handleGetCategoryById(req, res, next) {
  try {
    const { categoryId } = req.params;

    const category = await getCategoryById(categoryId);

    if (!category)
      return res.status(404).json({
        success: false,
        message: `category with id:${categoryId} not found`,
      });

    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function handleCreateCategory(req, res, next) {
  try {
    const { name } = req.body;

    if (!name)
      return res
        .status(400)
        .json({ success: false, message: "name is required" });

    const category = await createCategory(name);

    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function handleGetQuestionsByCategory(req, res, next) {
  try {
    const { categoryId } = req.params;

    const questions = await getCategoryQuestions(categoryId);

    res.status(200).json({ success: true, questions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = {
  handleCreateCategory,
  handleGetCategories,
  handleGetCategoryById,
  handleGetQuestionsByCategory,
};
