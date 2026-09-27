import jwt from "jsonwebtoken";
import { readStore } from "../utils/store.js";

export const requireAuth = (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Please login first." });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "development-secret");
    const store = readStore();
    const user = store.users.find((u) => u.id === payload.sub && u.verified);
    if (!user) return res.status(401).json({ message: "Session expired. Please login again." });
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired session." });
  }
};
