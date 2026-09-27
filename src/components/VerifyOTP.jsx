import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const inputRef = useRef(null);

  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    const pendingEmail = localStorage.getItem("pendingEmail") || "";
    setEmail(pendingEmail);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email not found. Please register again.");
      return;
    }

    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      inputRef.current?.focus();
      return;
    }

    try {
      setLoading(true);
      const data = await api.post("/api/auth/verify-otp", { email, otp });
      localStorage.removeItem("pendingEmail");
      login(data);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Email not found. Please register again.");
      return;
    }

    try {
      setResending(true);
      const data = await api.post("/api/auth/resend-otp", { email });
      setMessage(data.message || "A new OTP has been sent to your email.");
      setOtp("");
      inputRef.current?.focus();
    } catch (err) {
      setError(err.message || "Unable to resend OTP.");
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 px-4 py-12 sm:px-6">
      <div className="mx-auto flex min-h-[75vh] max-w-md items-center">
        <div className="w-full rounded-3xl border bg-white p-6 shadow-2xl sm:p-8">
          <div className="text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-red-100 text-2xl">✉️</div>
            <h1 className="mt-5 text-3xl font-black text-slate-900">Verify Your Email</h1>
            <p className="mt-2 text-slate-500">We sent a 6-digit OTP to:</p>
            <p className="mt-2 break-all font-bold text-red-700">{email || "your email address"}</p>
          </div>

          {error && <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</div>}
          {message && <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">{message}</div>}

          <form onSubmit={handleVerify} className="mt-7 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">Enter OTP</span>
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="123456"
                className="h-16 w-full rounded-2xl border-2 border-slate-200 bg-slate-50 text-center text-3xl font-black tracking-[0.35em] outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100"
              />
            </label>

            <button type="submit" disabled={loading || otp.length !== 6} className="w-full rounded-2xl bg-red-700 py-4 font-black text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-red-300">
              {loading ? "Verifying…" : "Verify OTP & Continue"}
            </button>
          </form>

          <div className="mt-5 text-center">
            <button type="button" onClick={handleResend} disabled={resending} className="font-bold text-blue-600 hover:underline disabled:text-slate-400">
              {resending ? "Sending new OTP…" : "Didn't receive OTP? Send again"}
            </button>
          </div>

          <button type="button" onClick={() => navigate("/register")} className="mt-5 w-full rounded-xl border py-3 font-bold text-slate-600 hover:bg-slate-50">
            Use a different email
          </button>
        </div>
      </div>
    </main>
  );
}

export default VerifyOTP;
