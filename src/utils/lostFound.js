import { api } from "./api";
import staticItems from "../data/Items";

export const normalize = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, " ");

const locationCityMap = {
  Chembur: "Mumbai",
  Kurla: "Mumbai",
  Ghatkopar: "Mumbai",
  Andheri: "Mumbai",
  Bandra: "Mumbai",
  Dadar: "Mumbai",
  Sion: "Mumbai",
  Powai: "Mumbai",
  Vikhroli: "Mumbai",
  Mulund: "Mumbai",
  Thane: "Thane",
  BKC: "Mumbai",
  "Vile Parle": "Mumbai",
  "Mumbai Central": "Mumbai",
  Colaba: "Mumbai",
};

const getCityFromLocation = (location = "") => {
  const value = String(location).trim();
  return locationCityMap[value] || "Mumbai";
};

export const toSearchItem = (item, status) => ({
  id: item.id,
  source: item.source || (item.userId ? "report" : "static"),
  status,
  name: item.name || item.itemName || "Unnamed item",
  category: item.category || "Other",
  location:
    item.location ||
    item.lostLocation ||
    item.foundLocation ||
    "Unknown",
  city:
    item.city ||
    getCityFromLocation(
      item.location || item.lostLocation || item.foundLocation || ""
    ),
  date:
    item.date ||
    item.lostDate ||
    item.foundDate ||
    item.createdAt ||
    "",
  description: item.description || "",
  image: item.image || item.photo || "",
  color: item.color || "",
  brand: item.brand || "",
  uniqueDetails: item.uniqueDetails || "",
  additionalInfo: item.additionalInfo || "",
  userName: item.userName || "",
  raw: item,
});

const pickBalanced = (items, status, target) => {
  const matching = items.filter((item) => item.status === status);

  if (!matching.length) return [];

  // Expand the existing seed catalog to the requested initial count.
  // Initial UI data = 200 Lost + 200 Found.
  const result = [];

  for (let i = 0; i < target; i += 1) {
    const source = matching[i % matching.length];
    const copyNumber = Math.floor(i / matching.length);

    result.push({
      ...source,
      id: `${status.toLowerCase()}-seed-${i + 1}`,
      name: copyNumber
        ? `${source.name} ${copyNumber + 1}`
        : source.name,
      date:
        source.date ||
        `2026-09-${String((i % 28) + 1).padStart(2, "0")}`,
    });
  }

  return result;
};

/*
 * IMPORTANT:
 * Home.jsx imports getInitialCommunityItems.
 * This function was missing, which caused the blank screen.
 */
export const getInitialCommunityItems = () => {
  const lostItems = pickBalanced(staticItems, "Lost", 200).map((item) =>
    toSearchItem(item, "Lost")
  );

  const foundItems = pickBalanced(staticItems, "Found", 200).map((item) =>
    toSearchItem(item, "Found")
  );

  return [...lostItems, ...foundItems];
};

export const fetchCommunityItems = async () => {
  const { reports } = await api.get("/api/reports");

  const serverItems = reports.map((r) => toSearchItem(r, r.status));

  return [...getInitialCommunityItems(), ...serverItems];
};

export const fetchMyReports = async () =>
  (await api.get("/api/reports/mine")).reports;

const tokens = (value) =>
  new Set(
    normalize(value)
      .split(/\s+/)
      .filter((x) => x.length > 2)
  );

const overlap = (a, b) => {
  const A = tokens(a);
  const B = tokens(b);

  if (!A.size || !B.size) return 0;

  let common = 0;

  A.forEach((w) => {
    if (B.has(w)) common++;
  });

  return common / Math.max(A.size, B.size);
};

const same = (a, b) =>
  Boolean(normalize(a) && normalize(a) === normalize(b));

const dateDistance = (a, b) => {
  if (!a || !b) return 0;

  const x = new Date(a);
  const y = new Date(b);

  if (Number.isNaN(x.getTime()) || Number.isNaN(y.getTime())) {
    return 0;
  }

  return Math.max(
    0,
    1 - Math.abs(x - y) / 86400000 / 21
  );
};

export const getMatchScore = (lost, found) => {
  if (!lost || !found || lost.status === found.status) return 0;

  let score = 0;

  score += same(lost.category, found.category)
    ? 25
    : overlap(lost.category, found.category) * 12;

  score += Math.max(
    same(lost.name, found.name)
      ? 25
      : overlap(lost.name, found.name) * 25,
    overlap(
      `${lost.name} ${lost.description}`,
      `${found.name} ${found.description}`
    ) * 20
  );

  score += same(lost.location, found.location)
    ? 20
    : overlap(
        `${lost.location} ${lost.city}`,
        `${found.location} ${found.city}`
      ) * 15;

  score +=
    overlap(
      `${lost.description} ${lost.uniqueDetails} ${lost.additionalInfo}`,
      `${found.description} ${found.uniqueDetails} ${found.additionalInfo}`
    ) * 12;

  if (lost.color && found.color) {
    score += same(lost.color, found.color)
      ? 7
      : overlap(lost.color, found.color) * 3;
  }

  if (lost.brand && found.brand) {
    score += same(lost.brand, found.brand)
      ? 6
      : overlap(lost.brand, found.brand) * 3;
  }

  score += dateDistance(lost.date, found.date) * 5;

  return Math.min(100, Math.round(score));
};

export const getMatchReasons = (lost, found) => {
  const reasons = [];

  if (same(lost.category, found.category)) {
    reasons.push("Same category");
  }

  if (same(lost.location, found.location)) {
    reasons.push("Same location");
  } else if (
    overlap(
      `${lost.location} ${lost.city}`,
      `${found.location} ${found.city}`
    ) > 0.35
  ) {
    reasons.push("Nearby location");
  }

  if (
    lost.city &&
    found.city &&
    same(lost.city, found.city)
  ) {
    reasons.push("Same city");
  }

  if (
    lost.color &&
    found.color &&
    same(lost.color, found.color)
  ) {
    reasons.push("Same color");
  }

  if (
    lost.brand &&
    found.brand &&
    same(lost.brand, found.brand)
  ) {
    reasons.push("Same brand");
  }

  if (overlap(lost.name, found.name) > 0.45) {
    reasons.push("Similar item name");
  }

  if (overlap(lost.description, found.description) > 0.2) {
    reasons.push("Similar description");
  }

  if (dateDistance(lost.date, found.date) > 0.65) {
    reasons.push("Close report date");
  }

  return reasons.slice(0, 5);
};

export const findMatchesFor = (
  item,
  allItems,
  minimum = 35
) =>
  allItems
    .filter((c) => c.status !== item.status)
    .map((c) => ({
      ...c,
      score: getMatchScore(item, c),
      reasons: getMatchReasons(item, c),
    }))
    .filter((c) => c.score >= minimum)
    .sort((a, b) => b.score - a.score);