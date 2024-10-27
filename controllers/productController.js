const Product = require("../models/Product");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, inventoryCount, status, variants } = req.body;
    const { smeId } = req.params; // Extract smeId from the path parameters

    const product = await Product.create({ smeId, name, price, description, inventoryCount, status, variants });
    res.status(201).json({
      status_code: 201,
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: error.message });
  }
};

// Get all products for an SME
exports.getProducts = async (req, res) => {
  const { smeId } = req.params;

  try {
    const products = await Product.find({ smeId });

    if (!products.length) {
      return res.status(404).json({
        status_code: 404,
        success: false,
        message: "No products found for this SME",
      });
    }

    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: "Internal server error",
    });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.productId, smeId: req.params.smeId });
    if (!product) {
      return res.status(404).json({ status_code: 404, success: false, message: "Product not found" });
    }
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: error.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.productId, smeId: req.params.smeId },
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ status_code: 404, success: false, message: "Product not found" });
    }
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: error.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.productId, smeId: req.params.smeId });
    if (!product) {
      return res.status(404).json({ status_code: 404, success: false, message: "Product not found" });
    }
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ status_code: 500, success: false, message: error.message });
  }
};
