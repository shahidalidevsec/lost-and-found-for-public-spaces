import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReportForm } from "./ReportLostItem";
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

export default function ReportFoundItem() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm] = useState(blank);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

    setLoading(true);
    setError("");

    try {
      await api.post("/api/reports", {
        ...form,
        status: "Found",
      });

      navigate("/report-submitted", {
        state: {
          status: "Found",
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
      title="Report a Found Item"
      subtitle="Post the real item you found. The system will compare it with lost reports."
      accent="emerald"
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