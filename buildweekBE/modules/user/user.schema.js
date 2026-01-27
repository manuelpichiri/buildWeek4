const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    avatar: {
      type: String,
    },
    experiences: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "experience",
        default: [],
      },
    ],
  },
  { timestamps: true, strict: true },
);

module.exports = mongoose.model("user", User, "users");
