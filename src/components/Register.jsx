// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { api } from "../utils/api";

// function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     // Prevent any browser form submission/reload
//     e?.preventDefault();

//     // TEST: this must appear when Register is clicked
//     alert("REGISTER BUTTON CLICKED");

//     if (loading) return;

//     setError("");

//     const name = formData.name.trim();
//     const email = formData.email.trim().toLowerCase();
//     const password = formData.password;
//     const confirmPassword = formData.confirmPassword;

//     // Validation
//     if (!name) {
//       setError("Please enter your name.");
//       return;
//     }

//     if (!email) {
//       setError("Please enter your email.");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       setLoading(true);

//       console.log("REGISTER STARTED");
//       console.log("Email:", email);

//       const data = await api.post("/api/auth/register", {
//         name,
//         email,
//         password,
//       });

//       console.log("REGISTER SUCCESS:", data);

//       const registeredEmail = data?.email || email;

//       if (!registeredEmail) {
//         throw new Error(
//           "Registration succeeded but email was not returned by server."
//         );
//       }

//       // Save email for OTP page
//       localStorage.setItem("pendingEmail", registeredEmail);

//       console.log("PENDING EMAIL SAVED:", registeredEmail);
//       console.log("NAVIGATING TO OTP PAGE...");

//       // Go to OTP page without browser reload
//       navigate("/verify-otp", {
//         replace: true,
//       });
//     } catch (error) {
//       console.error("REGISTRATION ERROR:", error);

//       setError(
//         error.message ||
//           "Unable to register. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
//       <div className="w-full max-w-md">
//         <div className="bg-white shadow-lg rounded-xl p-8">

//           {/* Heading */}
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">
//               Create Account
//             </h1>

//             <p className="text-gray-500 mt-2">
//               Join our Lost & Found community
//             </p>
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md mb-5">
//               {error}
//             </div>
//           )}

//           {/* Fields */}
//           <div className="space-y-5">

//             {/* Name */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Full Name
//               </label>

//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 autoComplete="name"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Email Address
//               </label>

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 autoComplete="email"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Password
//               </label>

//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Create password"
//                 autoComplete="new-password"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
//               />
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>

//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Confirm password"
//                 autoComplete="new-password"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
//               />
//             </div>

//             {/* Register Button */}
//             <button
//               type="button"
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-md font-semibold transition cursor-pointer disabled:cursor-not-allowed"
//             >
//               {loading ? "Sending OTP..." : "Register"}
//             </button>

//           </div>

//           {/* Login */}
//           <p className="text-center text-gray-500 mt-6 text-sm">
//             Already have an account?{" "}

//             <Link
//               to="/login"
//               className="text-red-600 font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;




import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/api";

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
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (loading) return;

    setError("");

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const data = await api.post("/api/auth/register", {
        name,
        email,
        password,
      });

      const registeredEmail = data?.email || email;

      if (!registeredEmail) {
        throw new Error(
          "Registration succeeded but email was not returned by server."
        );
      }

      // Save email for OTP verification
      localStorage.setItem("pendingEmail", registeredEmail);

      // Directly open OTP page
      navigate("/verify-otp", {
        replace: true,
      });
    } catch (error) {
      console.error("Registration error:", error);

      setError(
        error.message ||
          "Unable to register. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-xl p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join our Lost & Found community
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md mb-5">
              {error}
            </div>
          )}

          <div className="space-y-5">

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                autoComplete="new-password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                autoComplete="new-password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Register */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-md font-semibold transition cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? "Sending OTP..." : "Register"}
            </button>

          </div>

          {/* Login */}
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