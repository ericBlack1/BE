const Category = require("../models/categoryModel");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: "Failed to fetch categories" });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ status_code: 404, success: false, message: "Category not found" });
    res.status(200).json({ status_code: 200, success: true, message: "Category fetched successfully", data: category });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: "Failed to fetch category" });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json({
      status_code: 201,
      success: true,
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: "Failed to create category" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCategory) return res.status(404).json({ status_code: 404, success: false, message: "Category not found" });
    res.status(200).json({ status_code: 200, success: true, message: "Category updated successfully", data: updatedCategory });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: "Failed to update category" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) return res.status(404).json({ status_code: 404, success: false, message: "Category not found" });
    res.status(200).json({ status_code: 200, success: true, message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: "Failed to delete category" });
  }
};
