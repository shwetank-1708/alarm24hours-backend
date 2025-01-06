const router = require("express").Router();
const contact = require("../models/contact");

router.get("/getContact", async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).json(contacts);
    console.log(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact data", error });
  }
});

module.exports = router;
