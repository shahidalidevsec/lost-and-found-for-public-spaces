import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search } from "lucide-react";
import { categories } from "../data/Items";
import { fetchCommunityItems } from "../utils/lostFound";

export default function CategoryBrowser() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let active = true;
    fetchCommunityItems().then((data) => active && setItems(data)).catch(() => active && setItems([]));
    return () => { active = false; };
  }, []);

  const cities = useMemo(() => {
    const counts = new Map();
    items.forEach((item) => {
      if (!item.city) return;
      const key = item.city.trim();
      counts.set(key, (counts.get(key) || 0) + 1);
    });
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [items]);

  const locations = useMemo(() => {
    const counts = new Map();
    items.forEach((item) => {
      if (!item.location) return;
      const key = item.location.trim();
      counts.set(key, (counts.get(key) || 0) + 1);
    });
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);
  }, [items]);

  const categoryCount = (name) => items.filter((item) => item.category === name).length;
  const lostCount = (name) => items.filter((item) => item.category === name && item.status === "Lost").length;
  const foundCount = (name) => items.filter((item) => item.category === name && item.status === "Found").length;

  return (
    <section className="mx-auto mt-8 max-w-7xl px-2 sm:px-4">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-gray-200 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-xl font-black text-gray-900">Browse by Category</h2>
            <p className="mt-1 text-sm text-gray-500">Search categories across the live Lost & Found catalog.</p>
          </div>
          <button onClick={() => navigate("/lost-items")} className="text-left text-sm font-bold text-red-600 hover:text-red-800 sm:text-right">VIEW ALL ITEMS →</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => navigate(`/lost-items?category=${encodeURIComponent(category.name)}`)}
              className="group flex min-h-40 flex-col items-center justify-center border-b border-r border-gray-200 p-4 transition hover:bg-gray-50"
            >
              <div className="mb-3 flex h-16 items-center justify-center text-5xl grayscale transition group-hover:grayscale-0">{category.icon}</div>
              <div className="text-center text-sm font-bold text-gray-800">{category.name}</div>
              <div className="mt-1 text-xs text-gray-500">{categoryCount(category.name)} total</div>
              <div className="mt-2 flex gap-2 text-[11px] font-bold">
                <span className="rounded-full bg-red-50 px-2 py-1 text-red-600">L {lostCount(category.name)}</span>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-600">F {foundCount(category.name)}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-black text-gray-900"><MapPin size={19} className="text-red-600" />Browse by Location</h3>
              <p className="mt-1 text-sm text-gray-500">Open a location to see reports from that place.</p>
            </div>
            <button onClick={() => navigate("/lost-items")} className="text-sm font-bold text-blue-600">Search all locations →</button>
          </div>

          <div className="mt-5">
            <h4 className="text-sm font-black uppercase tracking-wide text-slate-500">Browse by City</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {cities.map(([city, count]) => (
                <button
                  key={city}
                  onClick={() => navigate(`/lost-items?city=${encodeURIComponent(city)}`)}
                  className="rounded-full border bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  {city} <span className="text-slate-400">({count})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {locations.map(([location, count]) => (
              <button
                key={location}
                onClick={() => navigate(`/lost-items?location=${encodeURIComponent(location)}`)}
                className="flex min-w-0 items-center gap-2 rounded-2xl border bg-slate-50 px-3 py-3 text-left transition hover:border-blue-300 hover:bg-blue-50"
              >
                <Search size={15} className="shrink-0 text-slate-400" />
                <span className="min-w-0 flex-1 truncate text-sm font-bold text-slate-700">{location}</span>
                <span className="shrink-0 text-xs font-bold text-slate-400">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
