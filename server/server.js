import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

// Increase JSON/body size limit
// Required because report images are sent as Base64 inside JSON.
app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

// Test API
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Lost & Found Backend is running",
  });
});

// Auth API
app.use("/api/auth", authRoutes);

// Reports API
app.use("/api/reports", reportRoutes);

// Serve React frontend
const clientPath = path.join(__dirname, "../dist");

app.use(express.static(clientPath));

// React routes
app.get("*splat", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});