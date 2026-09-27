import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  CalendarDays,
  Tag,
  UserRound,
} from "lucide-react";

import { fetchCommunityItems } from "../utils/lostFound";

export default function MatchCompare() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const leftId = params.get("left");
  const rightId = params.get("right");

  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommunityItems()
      .then((items) => {
        setLeft(
          items.find(
            (x) => String(x.id) === String(leftId)
          )
        );

        setRight(
          items.find(
            (x) => String(x.id) === String(rightId)
          )
        );
      })
      .finally(() => setLoading(false));
  }, [leftId, rightId]);

  if (loading) {
    return (
      <main className="min-h-screen grid place-items-center bg-slate-50">
        <p className="font-bold text-slate-600">
          Loading comparison…
        </p>
      </main>
    );
  }

  if (!left || !right) {
    return (
      <main className="min-h-screen grid place-items-center bg-slate-50 px-5">
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
          <h1 className="text-2xl font-black">
            Match not found
          </h1>

          <button
            onClick={() => navigate("/matches")}
            className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
          >
            Back to Matches
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 font-bold text-slate-600"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="mb-7 text-center">
          <p className="font-bold text-blue-600">
            MATCH COMPARISON
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            Lost vs Found
          </h1>

          <p className="mt-3 text-slate-500">
            Compare both reports side-by-side.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <CompareCard
            item={left}
            title="Lost Item"
            red
          />

          <CompareCard
            item={right}
            title="Found Item"
          />

        </div>
      </div>
    </main>
  );
}

function CompareCard({ item, title, red = false }) {
  return (
    <article className="overflow-hidden rounded-3xl border bg-white shadow-lg">

      <div
        className={`p-5 text-white ${
          red
            ? "bg-gradient-to-r from-red-600 to-rose-700"
            : "bg-gradient-to-r from-emerald-600 to-teal-700"
        }`}
      >
        <p className="text-sm font-bold uppercase">
          {title}
        </p>

        <h2 className="mt-1 text-2xl font-black">
          {item.name}
        </h2>
      </div>

      <div className="p-5 sm:p-7">

        <div className="overflow-hidden rounded-2xl bg-slate-100">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="h-72 w-full object-cover"
            />
          ) : (
            <div className="grid h-72 place-items-center text-7xl">
              📦
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">

          <Info
            icon={<Tag size={16} />}
            label="Category"
            value={item.category}
          />

          <Info
            icon={<MapPin size={16} />}
            label="Location"
            value={item.location}
          />

          <Info
            icon={<MapPin size={16} />}
            label="City"
            value={item.city}
          />

          <Info
            icon={<CalendarDays size={16} />}
            label="Date"
            value={item.date}
          />

          <Info
            label="Color"
            value={item.color}
          />

          <Info
            label="Brand"
            value={item.brand}
          />
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-5">
          <h3 className="font-black">
            Description
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            {item.description || "No description provided."}
          </p>
        </div>

        {item.uniqueDetails && (
          <div className="mt-4 rounded-2xl border p-5">
            <h3 className="font-black">
              Unique details
            </h3>

            <p className="mt-2 text-slate-600">
              {item.uniqueDetails}
            </p>
          </div>
        )}

        {item.userName && (
          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <UserRound size={17} />
            Reported by
            <b>{item.userName}</b>
          </div>
        )}
      </div>
    </article>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
        {icon}
        {label}
      </p>

      <p className="mt-1 font-bold text-slate-800">
        {value || "Not provided"}
      </p>
    </div>
  );
}