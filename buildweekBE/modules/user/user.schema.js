const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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

User.pre("save", async function () {
  if (!this.isModified("password")) {
    return; //andiamo avanti e vado al save
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//quando chiama query mongoose usa metodi

User.pre("findOneAndUpdate", async function () {
  const update = this.getUpdate(); //ci ritona in json solo quello che è stato modificato
  if (!update) {
    return;
  }
  const plainPassword = update.password ?? update.$set.password; //pssw dal body o dall'operatore set
  if (!plainPassword) return;
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(plainPassword, salt);

  if (update.password) {
    //se update.pssw è stata modificata  metti pssw hashata
    update.password = hashed;
  }

  if (update.$set.password) {
    update.$set.password = hashed;
  }
  this.setUpdate(update); //setupdate va a scriver questo oggetto json e lo aggiorna
});

module.exports = mongoose.model("user", User, "users");
