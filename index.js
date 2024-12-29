const express = require("express");
const cors = require("cors");
const app = express();
const contact = require("./routes/contact");
require("./connection/connection");
app.use(express.json());
app.use(cors());

app.use("/api/v1", contact);

app.listen("5000", () => {
  console.log("Server Started");
});
