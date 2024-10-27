const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, default: "Live" }
});

module.exports = mongoose.model("Service", ServiceSchema);
