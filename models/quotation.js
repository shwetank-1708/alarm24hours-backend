const mongoose = require("mongoose");

const quotation = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerContactNum: {
    type: Number,
  },
  customerMessage: {
    type: String,
  },
});

module.exports = mongoose.model("quotation", quotation);
