const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

require("dotenv").config();
require("./config/db");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "assets")));

const cors = require("cors");
const Donate = require("./models/donate");

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/aboutus", (req, res) => {
  res.render("about_us.ejs");
});

app.get("/services", (req, res) => {
  res.render("service.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});


app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});



app.get("/donate", (req, res) => {
  res.render("donate.ejs");
});


app.get("/login-success", (req, res) => {
  res.render("login_success.ejs");
});




app.use("/user", require("./routes/user.route"));
// app.use("/donate", require("./routes/donate.route"));

app.listen(PORT, () => {
  console.log(`Server is up and running on localhost:${PORT}`);
});

