require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const transactionsRouter = require("./routes/transactions");
const app = express();
const authRouter = require("./routes/auth");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/transactions", transactionsRouter);
app.use("/api/auth", authRouter);

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
