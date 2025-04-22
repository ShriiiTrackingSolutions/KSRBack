const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  companyName: String,
  email: String,
  mobile: String,
  message: String,
  createdAt: Date,
  updatedAt: Date,
  // ❌ Don't use timestamps: true here
});

module.exports = mongoose.model("Contact", contactSchema);
