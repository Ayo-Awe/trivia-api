const {
  getCategories,
  createCategory,
  getCategoryQuestions,
  getCategoryById,
} = require("../Services/category.service");

const { handleAsync } = require("../utils/helpers");

const handleGetCategories = handleAsync(async (req, res) => {
  const categories = await getCategories();

  res.status(200).json({ success: true, categories });
});

const handleGetCategoryById = handleAsync(async (req, res) => {
  const { categoryId } = req.params;

  const category = await getCategoryById(categoryId);

  if (!category)
    return res.status(404).json({
      success: false,
      message: `category with id:${categoryId} not found`,
    });

  res.status(200).json({ success: true, category });
});

const handleCreateCategory = handleAsync(async (req, res) => {
  const { name } = req.body;

  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "name is required" });

  const category = await createCategory(name);

  res.status(200).json({ success: true, category });
});

const handleGetQuestionsByCategory = handleAsync(async (req, res) => {
  const { categoryId } = req.params;

  const questions = await getCategoryQuestions(categoryId);

  if (!questions)
    return res
      .status(400)
      .json({
        success: false,
        message: `category with id:${categoryId} not found`,
      });

  res.status(200).json({ success: true, questions });
});

module.exports = {
  handleCreateCategory,
  handleGetCategories,
  handleGetCategoryById,
  handleGetQuestionsByCategory,
};
