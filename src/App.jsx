import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Terms from "./components/Terms";
import Navbar from "./components/Navbaar";
import About from "./components/About";
import Home from "./components/Home";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import ItemDetails from "./pages/ItemsDetails";
import Business from "./components/Business";
import Register from "./components/Register";
import Login from "./components/Login";
import VerifyOTP from "./components/VerifyOTP";
import Privacy from "./pages/Privacy";


import ReportLostItem from "./pages/ReportLostItem";
import MyLostReports from "./pages/MyLostReports";
import LostReportDetails from "./pages/LostReportDetails";

import ReportSubmitted from "./pages/ReportSubmitted";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/lost-items"
          element={<LostItems />}
        />

        <Route
          path="/found-items"
          element={<FoundItems />}
        />

        <Route
          path="/item/:id"
          element={<ItemDetails />}
        />
        
        <Route
         path="/about"
          element={<About />} />

          <Route
           path="/business"
            element={<Business />} />

          <Route
           path="/register"
            element={<Register />} />

 <Route
           path="/login"
            element={<Login />} />

<Route 
path="/verify-otp" 
element={<VerifyOTP />} />


<Route
 path="/dashboard"
  element={<Dashboard />} />

  <Route 
  path="/terms" element={<Terms />} />


  <Route path="/privacy" element={<Privacy />} />


  <Route
  path="/report-lost-item"
  element={<ReportLostItem />}
/>

<Route
  path="/my-lost-reports"
  element={<MyLostReports />}
/>

<Route
  path="/lost-report/:id"
  element={<LostReportDetails />}
/>

<Route
  path="/report-lost-item/edit/:id"
  element={<ReportLostItem />}
/>
  <Route
  path="/report-submitted"
  element={<ReportSubmitted />}
/>

  
      </Routes>

    </BrowserRouter>
  );
}

export default App;