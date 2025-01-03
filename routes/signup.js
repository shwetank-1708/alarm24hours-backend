const router = require("express").Router();
const signup = require("../models/signup");

router.post("/post", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const newSignUp = new signup({ name, email, password, confirmPassword });
    await newSignUp.save().then(
      () => {
        res.status(200).json({ message: "SignUp Data Connected" });
      },
      () => {
        res.status(400).json({ message: "SignUp Data Not Connected" });
      }
    );
  } catch (error) {
    res
      .status(400)
      .json({ message: "Technical Error Occurred for Sign Up Page" });
  }
});

module.exports = router;
