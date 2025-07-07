const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Data", DataSchema);
