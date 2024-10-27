const mongoose = require('mongoose');

const SMEContactInfoSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true }
});

const SMESchema = new mongoose.Schema({
  userId: { type: String, required: true },
  businessName: { type: String, required: true },
  owner: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  contactInfo: SMEContactInfoSchema
});

module.exports = mongoose.model('SME', SMESchema);
