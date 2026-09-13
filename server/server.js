import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();


// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);

app.use(express.json());


// Test
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Lost & Found Backend is running"
  });
});


// Auth API
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});