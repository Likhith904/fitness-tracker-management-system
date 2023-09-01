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
  duration: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [exerciseSchema],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
