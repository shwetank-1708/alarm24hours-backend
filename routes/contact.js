const router = require("express").Router();
const contact = require("../models/contact");

router.post("/postman", async (req, res) => {
  try {
    const { name, email, contactNum, message } = req.body;
    const newContact = new contact({ name, email, contactNum, message });
    await newContact.save().then(
      () => {
        res.status(200).json({ message: "Data Saved" });
      },
      () => {
        res.status(400).json({ message: "Data Not Saved" });
      }
    );
  } catch (error) {
    res.status(400).json({ message: "Technical Error Occurred" });
  }
});

module.exports = router;
