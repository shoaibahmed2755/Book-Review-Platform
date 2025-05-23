const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).send("Registration failed: Email already exists");
    const user = new User(req.body);
    await user.save();
    res.status(201).send("User registered");
  } catch (err) {
    console.error("Registration error:", err.message); // Log error
    res.status(400).send("Registration failed: " + err.message); // Return specific error
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({ userId: user._id }, "secret");
    res.json({ user: { email: user.email }, token });
  } catch (err) {
    res.status(400).send("Login failed");
  }
});

module.exports = router;
