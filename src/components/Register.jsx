import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Password check
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      // Save only email for OTP verification page
      localStorage.setItem(
        "pendingEmail",
        data.email
      );

      // Go to OTP page
      navigate("/verify-otp");
    } catch (error) {
      console.error("Registration error:", error);
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
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join our Lost & Found community
            </p>

          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md mb-5">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-md font-semibold transition"
            >
              {loading ? "Sending OTP..." : "Register"}
            </button>

          </form>

          <p className="text-center text-gray-500 mt-6 text-sm">
            Already have an account?{" "}

            <Link
              to="/login"
              className="text-red-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;