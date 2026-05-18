import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import employeeRoutes from "./routes/employeeRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

connectDB();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Employee Routes
app.use("/api/employees", employeeRoutes);


// Authentication Routes
app.use("/api/auth", authRoutes);


// AI Routes
app.use("/api/ai", aiRoutes);


// Default Route
app.get("/", (req, res) => {
  res.send("API Running");
});


// Server Port
const PORT = process.env.PORT || 5000;


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});