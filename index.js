const express = require("express");
const cors = require("cors");
const app = express();
require("./connection/connection");
const contact = require("./routes/contact");
const signup = require("./routes/signup");
const getContact = require("./routes/getContact");

app.use(express.json());
app.use(cors());

app.use("/contact", contact);
app.use("/signup", signup);
app.use("", getContact);

// app.post("/signup", (req, res) => {
//   res.send("API is working");
// });

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen("5000", () => {
  console.log("Server Started");
});
