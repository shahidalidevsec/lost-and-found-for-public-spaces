import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  MapPin,
  CalendarDays,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import {
  fetchCommunityItems,
  fetchMyReports,
  findMatchesFor,
  toSearchItem,
} from "../utils/lostFound";

export default function Matches() {
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);
  const [all, setAll] = useState([]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      fetchMyReports(),
      fetchCommunityItems(),
    ])
      .then(([mine, community]) => {
        setReports(mine || []);
        setSelected(mine?.[0]?.id || "");
        setAll(community || []);
      })
      .catch((err) => {
        setError(err.message || "Unable to load matches.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const selectedReport = reports.find(
    (r) => String(r.id) === String(selected)
  );

  const item = selectedReport
    ? toSearchItem(
        selectedReport,
        selectedReport.status
      )
    : null;

  const matches = useMemo(() => {
    if (!item) return [];

    return findMatchesFor(
      item,
      all,
      35
    );
  }, [item, all]);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-50 font-semibold">
        Loading match center…
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl bg-gradient-to-br from-indigo-700 to-blue-900 p-6 text-white shadow-xl sm:p-10">
          <div className="flex items-center gap-2 text-blue-200">
            <Sparkles size={20} />
            <b>SMART MATCH CENTER</b>
          </div>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Find possible matches
          </h1>

          <p className="mt-3 max-w-2xl text-blue-100">
            Select one of your Lost or Found reports.
            We compare it with opposite-side community
            reports and calculate a match percentage.
          </p>
        </div>

        {error && (
          <div className="mt-5 rounded-xl bg-red-50 p-4 font-semibold text-red-700">
            {error}
          </div>
        )}

        {!reports.length ? (
          <div className="mt-7 rounded-3xl bg-white p-10 text-center">
            <ShieldCheck
              className="mx-auto text-slate-300"
              size={45}
            />

            <h2 className="mt-4 text-xl font-bold">
              No reports yet
            </h2>

            <p className="mt-2 text-slate-500">
              Post a Lost or Found report to start matching.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                to="/report-lost-item"
                className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white"
              >
                Report lost
              </Link>

              <Link
                to="/report-found-item"
                className="rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white"
              >
                Report found
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-7 grid gap-6 lg:grid-cols-[300px_1fr]">

            <aside className="rounded-3xl border bg-white p-4 shadow-sm">
              <h2 className="px-2 text-sm font-black uppercase tracking-wide text-slate-500">
                My reports
              </h2>

              <div className="mt-3 space-y-2">
                {reports.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelected(r.id)}
                    className={`w-full rounded-2xl p-4 text-left ${
                      String(selected) === String(r.id)
                        ? "bg-blue-600 text-white"
                        : "bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-bold">
                        {r.itemName}
                      </p>

                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-black ${
                          String(selected) === String(r.id)
                            ? "bg-white/20 text-white"
                            : r.status === "Lost"
                            ? "bg-red-100 text-red-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {r.status}
                      </span>
                    </div>

                    <p className="mt-1 text-xs opacity-75">
                      {r.location}, {r.city}
                    </p>
                  </button>
                ))}
              </div>
            </aside>

            <section className="rounded-3xl border bg-white p-5 shadow-sm sm:p-7">

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-blue-600">
                    POSSIBLE MATCHES
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    {item?.name}
                  </h2>
                </div>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                  {matches.length} matches
                </span>
              </div>

              {matches.length ? (
                <div className="mt-6 space-y-4">
                  {matches.map((m) => (
                    <article
                      key={`${m.source}-${m.id}`}
                      className="rounded-2xl border p-4 transition hover:border-blue-300 hover:shadow-md"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row">

                        <div className="h-28 w-full overflow-hidden rounded-xl bg-slate-100 sm:w-36">
                          {m.image ? (
                            <img
                              src={m.image}
                              alt={m.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="grid h-full place-items-center text-3xl">
                              📦
                            </div>
                          )}
                        </div>

                        <div className="flex-1">

                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-lg font-black">
                              {m.name}
                            </h3>

                            <span className="rounded-full bg-emerald-100 px-3 py-1 font-black text-emerald-700">
                              {m.score}% match
                            </span>
                          </div>

                          <div className="mt-2 grid gap-1 text-sm text-slate-500 sm:grid-cols-2">
                            <span className="flex gap-2">
                              <MapPin size={16} />
                              {m.location}, {m.city}
                            </span>

                            <span className="flex gap-2">
                              <CalendarDays size={16} />
                              {m.date}
                            </span>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {m.reasons.map((reason) => (
                              <span
                                key={reason}
                                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs"
                              >
                                {reason}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={() =>
                              navigate(
                                `/compare?left=${encodeURIComponent(
                                  item.id
                                )}&right=${encodeURIComponent(
                                  m.id
                                )}`
                              )
                            }
                            className="mt-4 inline-flex items-center gap-1 font-bold text-blue-600"
                          >
                            Open match & compare
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center text-slate-500">
                  No strong match yet. New opposite-side
                  reports will automatically appear here.
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}