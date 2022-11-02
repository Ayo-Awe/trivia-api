const Category = require("../Models/Category");
const Question = require("../Models/Question");
const { ValueError, TypeError } = require("../Errors/Errors");

async function getCategories() {
  // Get all categories from DB
  const categories = await Category.find().lean().select("name");

  return categories;
}

async function getCategoryById(id) {
  // Validate input
  if (!id) throw new ValueError("id is required");

  if (typeof id !== "string") throw new TypeError("id must be of type string");

  // Get category form database
  const category = await Category.findById(id).lean().select("name");

  return category;
}

async function createCategory(name) {
  // Validate input
  if (!name) throw new ValueError("name is required");

  if (typeof name !== "string")
    throw new TypeError("name must be of type string");

  // Create new category form database
  const category = new Category({ name });
  await category.save();

  return category;
}

async function getCategoryQuestions(categoryId) {
  // Validate input
  if (!id) throw new ValueError("id is required");

  if (typeof id !== "string") throw new TypeError("id must be of type string");

  // Get category form database
  const question = await Question.find({ category: categoryId }).select(
    "description category"
  );

  return question;
}

module.exports = {
  getCategories,
  getCategoryById,
  getCategoryQuestions,
  createCategory,
};
