const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://alarm24hours:shwetank.alarm24hours@cluster0.qniwp.mongodb.net/"
      )
      .then(() => {
        console.log("Connected");
      }),
      (error) => {
        console.log(error);
      };
  } catch (error) {
    console.log(error);
  }
};

connect();
