import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendOTP from "../utils/sendOTP.js";
import { readStore, writeStore } from "../utils/store.js";

const generateOTP = () => crypto.randomInt(100000, 1000000).toString();
const publicUser = (user) => ({ id: user.id, name: user.name, email: user.email, createdAt: user.createdAt });
const signUser = (user) => jwt.sign({ sub: user.id, email: user.email, name: user.name }, process.env.JWT_SECRET || "development-secret", { expiresIn: "7d" });

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name?.trim() || !email?.trim() || !password) return res.status(400).json({ message: "Name, email and password are required" });
    if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters" });
    const normalizedEmail = email.toLowerCase().trim();
    const store = readStore();
    const existing = store.users.find((u) => u.email === normalizedEmail);
    if (existing?.verified) return res.status(400).json({ message: "Email already registered. Please login." });

    const user = existing || { id: crypto.randomUUID(), createdAt: new Date().toISOString() };
    user.name = name.trim();
    user.email = normalizedEmail;
    user.password = await bcrypt.hash(password, 10);
    user.verified = false;
    user.otp = generateOTP();
    user.otpExpires = Date.now() + 10 * 60 * 1000;
    if (!existing) store.users.push(user);
    writeStore(store);

    const sent = await sendOTP(normalizedEmail, user.otp);
    if (!sent) return res.status(500).json({ message: "Failed to send OTP. Please try again." });
    res.status(201).json({ message: "Registration successful. OTP sent to your email.", email: normalizedEmail });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const normalizedEmail = req.body.email?.toLowerCase().trim();
    const { otp } = req.body;
    const store = readStore();
    const user = store.users.find((u) => u.email === normalizedEmail);
    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.verified) return res.status(400).json({ message: "Email already verified" });
    if (Date.now() > user.otpExpires) return res.status(400).json({ message: "OTP expired" });
    if (String(otp) !== String(user.otp)) return res.status(400).json({ message: "Invalid OTP" });
    user.verified = true;
    user.otp = null;
    user.otpExpires = null;
    writeStore(store);
    res.json({ message: "Email verified successfully", token: signUser(user), user: publicUser(user) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const normalizedEmail = req.body.email?.toLowerCase().trim();
    const { password } = req.body;
    const store = readStore();
    const user = store.users.find((u) => u.email === normalizedEmail);
    if (!user || !await bcrypt.compare(password || "", user.password)) return res.status(401).json({ message: "Invalid email or password" });
    if (!user.verified) return res.status(403).json({ message: "Please verify your email first" });
    res.json({ message: "Login successful", token: signUser(user), user: publicUser(user) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const me = (req, res) => res.json({ user: publicUser(req.user) });


export const resendOTP = async (req, res) => {
  try {
    const normalizedEmail = req.body.email?.toLowerCase().trim();
    if (!normalizedEmail) return res.status(400).json({ message: "Email is required" });

    const store = readStore();
    const user = store.users.find((u) => u.email === normalizedEmail);
    if (!user) return res.status(404).json({ message: "Account not found. Please register first." });
    if (user.verified) return res.status(400).json({ message: "Email is already verified. Please login." });

    user.otp = generateOTP();
    user.otpExpires = Date.now() + 10 * 60 * 1000;
    writeStore(store);

    const sent = await sendOTP(normalizedEmail, user.otp);
    if (!sent) return res.status(500).json({ message: "Failed to send OTP. Please try again." });

    res.json({ message: "A new OTP has been sent to your email." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
