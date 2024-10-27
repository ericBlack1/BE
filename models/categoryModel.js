const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  itemCount: { type: Number, default: 0 },
  shops: [
    {
      shopId: { type: String },
      shopName: { type: String },
      items: [
        {
          id: { type: String },
          name: { type: String },
          price: { type: Number },
          inventoryCount: { type: Number },
          status: { type: String },
          variants: mongoose.Schema.Types.Mixed,
        }
      ],
      totalItems: { type: Number },
    }
  ]
});

module.exports = mongoose.model("Category", CategorySchema);
