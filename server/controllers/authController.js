import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendOTP from "../utils/sendOTP.js";

const users = new Map();


// Generate OTP
const generateOTP = () => {
  return crypto.randomInt(100000, 1000000).toString();
};


// ==========================
// REGISTER
// ==========================

export const register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters"
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = users.get(normalizedEmail);

    if (existingUser?.verified) {
      return res.status(400).json({
        message: "Email already registered. Please login."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = generateOTP();

    users.set(normalizedEmail, {
      name,
      email: normalizedEmail,
      password: hashedPassword,
      verified: false,
      otp,
      otpExpires: Date.now() + 10 * 60 * 1000
    });

    const emailSent = await sendOTP(
      normalizedEmail,
      otp
    );

    if (!emailSent) {

      users.delete(normalizedEmail);

      return res.status(500).json({
        message: "Failed to send OTP"
      });
    }

    res.status(201).json({
      message: "Registration successful. OTP sent to your email.",
      email: normalizedEmail
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


// ==========================
// VERIFY OTP
// ==========================

export const verifyOTP = async (req, res) => {

  try {

    const { email, otp } = req.body;

    const normalizedEmail = email.toLowerCase().trim();

    const user = users.get(normalizedEmail);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (user.verified) {
      return res.status(400).json({
        message: "Email already verified"
      });
    }

    if (Date.now() > user.otpExpires) {
      return res.status(400).json({
        message: "OTP expired"
      });
    }

    if (otp !== user.otp) {
      return res.status(400).json({
        message: "Invalid OTP"
      });
    }

    user.verified = true;
    user.otp = null;
    user.otpExpires = null;

    users.set(normalizedEmail, user);

    res.json({
      message: "Email verified successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


// ==========================
// LOGIN
// ==========================

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const normalizedEmail = email.toLowerCase().trim();

    const user = users.get(normalizedEmail);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    if (!user.verified) {
      return res.status(403).json({
        message: "Please verify your email first"
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      {
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.json({
      message: "Login successful",

      token,

      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};