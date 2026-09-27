import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, CalendarDays, Tag, UserRound } from "lucide-react";
import { fetchCommunityItems } from "../utils/lostFound";

function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    fetchCommunityItems()
      .then((items) => {
        if (!active) return;
        const found = items.find((candidate) => String(candidate.id) === String(id));
        if (!found) setError("The item you are looking for does not exist.");
        else setItem(found);
      })
      .catch((err) => {
        if (active) setError(err.message || "Unable to load item.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
          <p className="mt-4 font-semibold text-slate-600">Loading item…</p>
        </div>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-50 px-6">
        <div className="max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-red-50 text-3xl">🔎</div>
          <h1 className="mt-5 text-3xl font-black text-slate-900">Item Not Found</h1>
          <p className="mt-3 text-slate-500">{error || "The item you are looking for does not exist."}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => navigate(-1)} className="flex-1 rounded-xl border px-5 py-3 font-bold text-slate-700">Go Back</button>
            <button onClick={() => navigate("/")} className="flex-1 rounded-xl bg-red-700 px-5 py-3 font-bold text-white">Go Home</button>
          </div>
        </div>
      </main>
    );
  }

  const isLost = item.status === "Lost";
  const detailPath = isLost ? `/lost-items?q=${encodeURIComponent(item.name)}` : `/found-items?q=${encodeURIComponent(item.name)}`;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <button onClick={() => navigate(-1)} className="mb-5 flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900">
          <ArrowLeft size={18} /> Back
        </button>

        <article className="overflow-hidden rounded-3xl border bg-white shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="min-h-[360px] bg-slate-100 md:min-h-[560px]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full min-h-[360px] w-full object-cover md:min-h-[560px]"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              ) : (
                <div className="grid h-full min-h-[360px] place-items-center text-7xl md:min-h-[560px]">📦</div>
              )}
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-black ${isLost ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}>
                  {item.status.toUpperCase()}
                </span>
                {item.source === "report" && <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">COMMUNITY REPORT</span>}
              </div>

              <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">{item.name}</h1>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Info icon={<Tag size={17} />} label="Category" value={item.category} />
                <Info icon={<MapPin size={17} />} label="Location" value={item.location} />
                <Info icon={<MapPin size={17} />} label="City" value={item.city || "Mumbai"} />
                <Info icon={<CalendarDays size={17} />} label="Date" value={item.date || "Not provided"} />
                <Info icon={<span>🎨</span>} label="Color" value={item.color || "Not provided"} />
                <Info icon={<span>🏷️</span>} label="Brand" value={item.brand || "Not provided"} />
              </div>

              <section className="mt-6 rounded-2xl bg-slate-50 p-5">
                <h2 className="font-black text-slate-900">Description</h2>
                <p className="mt-2 leading-7 text-slate-600">{item.description || "No description provided."}</p>
              </section>

              {item.uniqueDetails && (
                <section className="mt-4 rounded-2xl border p-5">
                  <h2 className="font-black text-slate-900">Unique details</h2>
                  <p className="mt-2 leading-7 text-slate-600">{item.uniqueDetails}</p>
                </section>
              )}

              {item.userName && (
                <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                  <UserRound size={17} /> Reported by <b className="text-slate-800">{item.userName}</b>
                </div>
              )}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Link to={detailPath} className={`rounded-xl px-5 py-3 text-center font-bold text-white ${isLost ? "bg-red-700 hover:bg-red-800" : "bg-emerald-700 hover:bg-emerald-800"}`}>
                  Browse {isLost ? "Lost" : "Found"} Items
                </Link>
                <Link to="/matches" className="rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700">
                  Find Matches
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">{icon}{label}</p>
      <p className="mt-1 font-bold text-slate-800">{value || "Not provided"}</p>
    </div>
  );
}

export default ItemDetails;
