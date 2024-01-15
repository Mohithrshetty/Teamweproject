const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then((response) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });