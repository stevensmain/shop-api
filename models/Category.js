const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    cat: { type: String, required: true, unique: true },
    img: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);