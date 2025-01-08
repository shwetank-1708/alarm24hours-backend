// const mongoose = require("mongoose");

// const contact = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   contactNum: {
//     type: Number,
//   },
//   message: {
//     type: String,
//   },
// });

// module.exports = mongoose.model("contact", contact);

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
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
  },
  {
    collection: "contact-us-collection", // Explicitly set the collection name
  }
);

module.exports = mongoose.model("Contact", contactSchema);
