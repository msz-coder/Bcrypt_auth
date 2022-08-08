const express = require("express");
const path = require("path");
const app = express();
const User = require("./models/user");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/", (req, res) => {
  res.send("Logged In");
});

app.get("/secret", (req, res) => {
  res.send("This is my secret");
});

app.listen(2000, (req, res) => {
  console.log("Serving on Port 2000");
});
