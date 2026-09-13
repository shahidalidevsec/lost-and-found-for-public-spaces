import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const email = localStorage.getItem("pendingEmail");

  const handleVerify = async (e) => {
    e.preventDefault();

    setError("");

    if (!email) {
      setError("Email not found. Please register again.");
      return;
    }

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            otp: otp,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "OTP verification failed.");
        return;
      }

      // OTP successfully verified
      localStorage.removeItem("pendingEmail");

      alert("Email verified successfully!");

      // Go to login
      navigate("/login");
    } catch (error) {
      console.error("OTP verification error:", error);

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        <div className="bg-white shadow-lg rounded-xl p-8">

          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold text-gray-900">
              Verify Your Email
            </h1>

            <p className="text-gray-500 mt-2">
              Enter the 6-digit OTP sent to your email
            </p>

            {email && (
              <p className="text-sm text-gray-600 mt-3 font-medium">
                {email}
              </p>
            )}

          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md mb-5 text-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={handleVerify}
            className="space-y-5"
          >

            <div>

              <label className="block mb-2 text-sm font-medium">
                Enter OTP
              </label>

              <input
                type="text"
                inputMode="numeric"
                maxLength="6"
                value={otp}
                onChange={(e) =>
                  setOtp(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                placeholder="Enter 6-digit OTP"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-center text-xl tracking-[0.5em] focus:ring-2 focus:ring-red-500"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-md font-semibold transition"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

          </form>

          <p className="text-center text-gray-500 mt-6 text-sm">
            Wrong email?{" "}

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-red-600 font-semibold hover:underline"
            >
              Register again
            </button>
          </p>

        </div>

      </div>

    </div>
  );
}

export default VerifyOTP;