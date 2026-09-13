import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await fetch(
        "/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed.");
        return;
      }

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Save logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Login status
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");

      // Redirect to Dashboard after successful login
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="bg-white shadow-lg rounded-xl p-8">

          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Login to your Lost & Found account
            </p>

          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md mb-5 text-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>

              <label className="block mb-2 text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />

            </div>

            <div>

              <label className="block mb-2 text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-md font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="text-center text-gray-500 mt-6 text-sm">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-red-600 font-semibold hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;