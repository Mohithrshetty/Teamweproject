const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
// var swal = require("sweetalert2")

router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const isEmailExist = await User.findOne({
      email: data.email,
    });
    if (isEmailExist) {
      return res.status(409).send({
        message: "Email already registered",
        
      });
    }

    const isPhoneNumberExist = await User.findOne({
      phoneNumber: data.phoneNumber,
    });
    if (isPhoneNumberExist) {
      return res.status(409).send({
        message: "Phone number already registered",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const updatedUser = {
      ...data,
      password: hashedPassword,
    };
    const createUser = new User(updatedUser);
    await createUser.save();
    res.send({
      message: "user created",
    });
  } catch (error) {
  
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = req.body;

    const user = await User.findOne({
      email: data.email,
    });
    if (!user) {
      return res.status(401).send({
        message: "Email or password is incorrect",
      });
    }

    const comparePassword = await bcrypt.compare(data.password, user.password);
    if (!comparePassword) {
      return res.status(401).send({
        message: "Email or password is incorrect",
      });
    }

    res.send({
      message: "Login successful",
      data: user,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
