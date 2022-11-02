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

async function editCategory(id, name) {
  // Validate input
  if (!id && !name) throw new ValueError("id and name are required");

  if (typeof id !== "string" || typeof name !== "string")
    throw new TypeError("id and name must be of type string");

  // Get category form database
  const category = await Category.findByIdAndUpdate(id, { name }, { new: true })
    .select("name")
    .lean();

  return category;
}

async function deleteCategory(id) {
  // Validate input
  if (!id) throw new ValueError("id is required");

  if (typeof id !== "string") throw new TypeError("id must be of type string");

  // Get category form database
  const category = await Category.findByIdAndDelete(id).lean().select("name");

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
  if (!categoryId) throw new ValueError("id is required");

  if (typeof categoryId !== "string")
    throw new TypeError("id must be of type string");

  // Check if category exists
  const category = await Category.exists({ _id: categoryId });

  // Returning null instead of throwing an error allows for easy error handling
  if (!category) return null;

  // Get category form database
  const question = await Question.find({ category: categoryId }).select(
    "description category"
  );

  // If no questions match, it returns and empty array []
  return question;
}

module.exports = {
  getCategories,
  getCategoryById,
  getCategoryQuestions,
  createCategory,
  deleteCategory,
  editCategory,
};
