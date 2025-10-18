const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register (opsional, buat test)
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password }); // cari user
    if (!user) return res.status(401).json({ message: "Username atau password salah" });
    res.json({ message: "Login berhasil" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
