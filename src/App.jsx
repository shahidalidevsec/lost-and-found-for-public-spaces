import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbaar";
import Home from "./components/Home";
import About from "./components/About";
import Business from "./components/Business";
import Terms from "./components/Terms";

import Privacy from "./pages/Privacy";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import ItemDetails from "./pages/ItemsDetails";

import Register from "./components/Register";
import Login from "./components/Login";
import VerifyOTP from "./components/VerifyOTP";
import Dashboard from "./components/Dashboard";

import ReportLostItem from "./pages/ReportLostItem";
import ReportFoundItem from "./pages/ReportFoundItem";
import MyLostReports from "./pages/MyLostReports";
import MyReports from "./pages/MyReports";

import LostReportDetails from "./pages/LostReportDetails";
import FoundReportDetails from "./pages/FoundReportDetails";

import ReportSubmitted from "./pages/ReportSubmitted";
import Matches from "./pages/Matches";
import MatchCompare from "./pages/MatchCompare";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>

          {/* ================= PUBLIC ROUTES ================= */}

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/business" element={<Business />} />

          <Route path="/lost-items" element={<LostItems />} />

          <Route path="/found-items" element={<FoundItems />} />

          <Route path="/item/:id" element={<ItemDetails />} />

          <Route
            path="/lost-report/:id"
            element={<LostReportDetails />}
          />

          <Route
            path="/found-report/:id"
            element={<FoundReportDetails />}
          />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/verify-otp" element={<VerifyOTP />} />

          <Route path="/terms" element={<Terms />} />

          <Route path="/privacy" element={<Privacy />} />


          {/* ================= PROTECTED ROUTES ================= */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/report-lost-item"
            element={
              <ProtectedRoute>
                <ReportLostItem />
              </ProtectedRoute>
            }
          />

          <Route
            path="/report-lost-item/edit/:id"
            element={
              <ProtectedRoute>
                <ReportLostItem />
              </ProtectedRoute>
            }
          />

          <Route
            path="/report-found-item"
            element={
              <ProtectedRoute>
                <ReportFoundItem />
              </ProtectedRoute>
            }
          />

          <Route
            path="/my-lost-reports"
            element={
              <ProtectedRoute>
                <MyLostReports />
              </ProtectedRoute>
            }
          />

          <Route
            path="/my-reports"
            element={
              <ProtectedRoute>
                <MyReports />
              </ProtectedRoute>
            }
          />

          <Route
            path="/report-submitted"
            element={
              <ProtectedRoute>
                <ReportSubmitted />
              </ProtectedRoute>
            }
          />

          <Route
            path="/matches"
            element={
              <ProtectedRoute>
                <Matches />
              </ProtectedRoute>
            }
          />

          <Route
            path="/compare"
            element={
              <ProtectedRoute>
                <MatchCompare />
              </ProtectedRoute>
            }
          />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}