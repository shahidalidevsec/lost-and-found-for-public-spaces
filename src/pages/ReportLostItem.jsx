import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Camera, Save, MapPin } from "lucide-react";
import { categories } from "../data/Items";
import { useAuth } from "../context/AuthContext";
import { api } from "../utils/api";

const blank = {
  itemName: "",
  category: "",
  description: "",
  date: "",
  location: "",
  city: "",
  color: "",
  brand: "",
  uniqueDetails: "",
  additionalInfo: "",
  photo: "",
  phone: "",
};

export default function ReportLostItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm] = useState(blank);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    api
      .get(`/api/reports/${id}`)
      .then(({ report }) => {
        if (report.userId && report.userId !== user?.id) {
          setError("You are not allowed to edit this report.");
          return;
        }

        const x = {
          ...blank,
          ...report,
          date: report.lostDate || report.date || "",
          location: report.lostLocation || report.location || "",
        };

        setForm(x);
        setPreview(x.photo || "");
      })
      .catch((e) => setError(e.message));
  }, [id, user?.id]);

  const change = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const image = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 4 * 1024 * 1024) {
      setError("Image must be below 4 MB.");
      return;
    }

    setError("");

    const reader = new FileReader();

    reader.onload = () => {
      setForm((prev) => ({
        ...prev,
        photo: reader.result,
      }));

      setPreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const submit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const body = {
        ...form,
        status: "Lost",
        date: form.date,
        location: form.location,
        city: form.city,
      };

      if (id) {
        await api.put(`/api/reports/${id}`, body);
      } else {
        await api.post("/api/reports", body);
      }

      navigate("/report-submitted", {
        state: {
          status: "Lost",
          editing: Boolean(id),
        },
      });
    } catch (err) {
      setError(err.message || "Unable to save report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReportForm
      title={id ? "Edit Lost Item Report" : "Report a Lost Item"}
      subtitle="Add accurate information so the community and matching engine can help."
      accent="red"
      form={form}
      change={change}
      image={image}
      preview={preview}
      error={error}
      loading={loading}
      onSubmit={submit}
      navigate={navigate}
      user={user}
    />
  );
}

export function ReportForm({
  title,
  subtitle,
  accent,
  form,
  change,
  image,
  preview,
  error,
  loading,
  onSubmit,
  navigate,
  user,
}) {
  const isGreen = accent === "emerald";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <div
          className={`rounded-3xl p-6 text-white shadow-xl sm:p-10 ${
            isGreen
              ? "bg-gradient-to-br from-emerald-700 to-teal-800"
              : "bg-gradient-to-br from-red-700 to-rose-800"
          }`}
        >
          <div className="flex items-center gap-2">
            <MapPin size={22} />
            <span className="text-sm font-bold uppercase tracking-widest">
              {isGreen ? "Found" : "Lost"} report
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            {title}
          </h1>

          <p className="mt-3 max-w-2xl text-white/80">
            {subtitle}
          </p>
        </div>

        {error && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 font-semibold text-red-700">
            {error}
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="mt-6 space-y-8 rounded-3xl border bg-white p-5 shadow-sm sm:p-8"
        >
          <section>
            <h2 className="text-xl font-black">Your information</h2>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                value={user?.name || ""}
                readOnly
              />

              <Field
                label="Email"
                value={user?.email || ""}
                readOnly
              />

              <Field
                name="phone"
                label="Phone"
                value={form.phone}
                onChange={change}
                placeholder="Phone number"
                required
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black">Item information</h2>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <Field
                name="itemName"
                label="Item name *"
                value={form.itemName}
                onChange={change}
                placeholder="iPhone, wallet, bag…"
                required
              />

              <label>
                <span className="mb-2 block text-sm font-bold">
                  Category *
                </span>

                <select
                  name="category"
                  value={form.category}
                  onChange={change}
                  required
                  className="w-full rounded-xl border bg-white px-4 py-3"
                >
                  <option value="">Select category</option>

                  {categories.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>

              <Field
                name="color"
                label="Color"
                value={form.color}
                onChange={change}
                placeholder="Black, blue…"
              />

              <Field
                name="brand"
                label="Brand"
                value={form.brand}
                onChange={change}
                placeholder="Apple, Samsung…"
              />

              <Field
                name="date"
                label="Lost date *"
                value={form.date}
                onChange={change}
                type="date"
                required
              />

              <Field
                name="location"
                label="Lost location *"
                value={form.location}
                onChange={change}
                placeholder="Station, college, mall…"
                required
              />

              <Field
                name="city"
                label="City *"
                value={form.city}
                onChange={change}
                placeholder="Mumbai"
                required
              />
            </div>

            <TextArea
              name="description"
              label="Description *"
              value={form.description}
              onChange={change}
              required
              placeholder="Describe the item clearly…"
            />

            <TextArea
              name="uniqueDetails"
              label="Unique identification details"
              value={form.uniqueDetails}
              onChange={change}
              placeholder="Scratches, stickers, serial clues, case…"
            />

            <TextArea
              name="additionalInfo"
              label="Additional information"
              value={form.additionalInfo}
              onChange={change}
              placeholder="Anything else that helps identify it…"
            />
          </section>

          <section>
            <h2 className="text-xl font-black">Photo</h2>

            <div className="mt-4 rounded-2xl border-2 border-dashed p-5 text-center">
              <Camera
                className="mx-auto text-slate-400"
                size={32}
              />

              <input
                type="file"
                accept="image/*"
                onChange={image}
                className="mt-3 block w-full text-sm"
              />

              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mx-auto mt-5 max-h-72 rounded-2xl object-contain"
                />
              )}
            </div>
          </section>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-xl border px-6 py-3 font-bold"
            >
              Cancel
            </button>

            <button
              disabled={loading}
              className={`rounded-xl px-7 py-3 font-bold text-white disabled:opacity-60 ${
                isGreen
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              <Save
                className="mr-2 inline"
                size={18}
              />

              {loading
                ? "Saving…"
                : "Submit report"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  readOnly = false,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </span>

      <input
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        readOnly={readOnly}
        className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 ${
          readOnly
            ? "bg-slate-100 text-slate-600"
            : "bg-white"
        }`}
      />
    </label>
  );
}

function TextArea({
  name,
  label,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <label className="mt-5 block">
      <span className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </span>

      <textarea
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={4}
        className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}