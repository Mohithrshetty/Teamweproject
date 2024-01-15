const router = require("express").Router();
const { nodeMailer } = require("../helpers/node-mailer");
const Donate = require("../models/donate");

// Route to get all donations
router.get("/", async (req, res) => {
  try {
    const donations = await Donate.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new donation
router.post("/", async (req, res) => {
  const newDonation = new Donate(req.body);
  console.log(req.body);
  try {
    await newDonation.save();

    let mailDetails = {
      from: process.env.MAIL_FROM,
      to: req.body.donorEmail,
      subject: "Thank you for your help!...",
      html: `Thank you for the donation`,
    };

    const mailResponse = await nodeMailer.sendMail(mailDetails);
    if (mailResponse) {
      res.status(201).json({ message: "Donation Successfull" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
