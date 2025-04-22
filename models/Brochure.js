const mongoose = require("mongoose");

const brochureSchema = new mongoose.Schema({
  email: String,
  companyName: String,
  createdAt: Date,
  updatedAt: Date,
  // Do NOT add timestamps: true here, or it'll default to UTC
});

module.exports = mongoose.model("DownloadBrochure", brochureSchema);
