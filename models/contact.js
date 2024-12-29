const mongoose = require("mongoose");

const contact = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNum: {
    type: Number,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("contact", contact);
