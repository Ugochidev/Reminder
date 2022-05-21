const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reminderSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    images: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reminder", reminderSchema);
