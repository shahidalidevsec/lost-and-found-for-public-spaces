import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);

app.use(express.json());

// Test API
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Lost & Found Backend is running"
  });
});

// Auth API
app.use("/api/auth", authRoutes);

// Serve React Frontend
const clientPath = path.join(__dirname, "../dist");

app.use(express.static(clientPath));

// React routes
app.get("*splat", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});