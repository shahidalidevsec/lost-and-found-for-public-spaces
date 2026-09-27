import express from "express";
import crypto from "crypto";
import { readStore, writeStore } from "../utils/store.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();
const publicReport = (r) => ({ ...r, email: undefined, phone: undefined, userEmail: undefined });

router.get("/", (req, res) => {
  const store = readStore();
  const status = req.query.status;
  let reports = store.reports.filter((r) => !status || r.status === status);
  reports = reports.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(publicReport);
  res.json({ reports });
});

router.get("/mine", requireAuth, (req, res) => {
  const store = readStore();
  const reports = store.reports.filter((r) => r.userId === req.user.id).sort((a,b) => new Date(b.createdAt)-new Date(a.createdAt));
  res.json({ reports });
});

router.get("/:id", (req, res) => {
  const store = readStore();
  const report = store.reports.find((r) => String(r.id) === String(req.params.id));
  if (!report) return res.status(404).json({ message: "Report not found" });
  res.json({ report: publicReport(report) });
});

router.post("/", requireAuth, (req, res) => {
  const { status, itemName, category, description, date, location, city } = req.body;
  if (!['Lost','Found'].includes(status) || !itemName || !category || !description || !date || !location || !city) {
    return res.status(400).json({ message: "Status, item, category, description, date, location and city are required." });
  }
  const report = {
    id: crypto.randomUUID(),
    status,
    itemName: String(itemName).trim(),
    category: String(category).trim(),
    description: String(description).trim(),
    date,
    location: String(location).trim(),
    city: String(city).trim(),
    color: req.body.color || "",
    brand: req.body.brand || "",
    uniqueDetails: req.body.uniqueDetails || "",
    additionalInfo: req.body.additionalInfo || "",
    photo: req.body.photo || "",
    userId: req.user.id,
    userName: req.user.name,
    userEmail: req.user.email,
    phone: req.body.phone || "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  const store = readStore();
  store.reports.unshift(report);
  writeStore(store);
  res.status(201).json({ report });
});

router.put("/:id", requireAuth, (req, res) => {
  const store = readStore();
  const report = store.reports.find((r) => String(r.id) === String(req.params.id) && r.userId === req.user.id);
  if (!report) return res.status(404).json({ message: "Report not found or not owned by you." });
  Object.assign(report, {
    ...req.body,
    id: report.id,
    userId: report.userId,
    userName: req.user.name,
    userEmail: req.user.email,
    status: report.status,
    updatedAt: new Date().toISOString()
  });
  writeStore(store);
  res.json({ report });
});

router.delete("/:id", requireAuth, (req, res) => {
  const store = readStore();
  const before = store.reports.length;
  store.reports = store.reports.filter((r) => !(String(r.id) === String(req.params.id) && r.userId === req.user.id));
  if (store.reports.length === before) return res.status(404).json({ message: "Report not found or not owned by you." });
  writeStore(store);
  res.json({ message: "Report deleted successfully" });
});

export default router;
