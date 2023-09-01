const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["resistance", "cardio"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
