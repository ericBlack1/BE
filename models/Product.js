const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  smeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SME",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  inventoryCount: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["in_stock", "out_of_stock", "low_stock"],
    default: "in_stock",
  },
  variants: {
    type: [String],
  },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
