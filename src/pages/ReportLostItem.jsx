import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ReportLostItem() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",

    itemName: "",
    category: "",
    description: "",

    lostDate: "",
    lostLocation: "",
    city: "",

    color: "",
    brand: "",
    uniqueDetails: "",

    additionalInfo: "",
    photo: ""
  });

  const [preview, setPreview] = useState("");

  // Load existing report when editing
  useEffect(() => {
    if (id) {
      const reports = JSON.parse(
        localStorage.getItem("lostReports") || "[]"
      );

      const existingReport = reports.find(
        (report) => report.id === id
      );

      if (existingReport) {
        setFormData(existingReport);
        setPreview(existingReport.photo || "");
      }
    }
  }, [id]);

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        photo: reader.result
      }));

      setPreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const reports = JSON.parse(
      localStorage.getItem("lostReports") || "[]"
    );

    if (id) {
      // Update existing report
      const updatedReports = reports.map((report) =>
        report.id === id
          ? {
              ...formData,
              id: id,
              updatedAt: new Date().toISOString()
            }
          : report
      );

      localStorage.setItem(
        "lostReports",
        JSON.stringify(updatedReports)
      );
    } else {
      // Create new report
      const newReport = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };

      reports.push(newReport);

      localStorage.setItem(
        "lostReports",
        JSON.stringify(reports)
      );
    }

    // navigate("/my-lost-reports");
    navigate("/report-submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            {id ? "Edit Lost Item Report" : "Report a Lost Item"}
          </h1>

          <p className="text-gray-600 mt-3">
            Provide accurate details to help find your lost item.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-10"
        >

          {/* USER INFORMATION */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Your Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>
          </div>


          {/* ITEM INFORMATION */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Lost Item Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Item Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Item Name *
                </label>

                <input
                  type="text"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. iPhone 15, Wallet, Bag"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category *
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Category</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Wallet">Wallet</option>
                  <option value="Bag">Bag</option>
                  <option value="Documents">Documents</option>
                  <option value="Keys">Keys</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Jewellery">Jewellery</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Item Color
                </label>

                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="e.g. Black"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Brand */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Brand
                </label>

                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="e.g. Apple, Nike, Samsung"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            {/* Description */}
            <div className="mt-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Item Description *
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Describe your lost item..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Unique Details */}
            <div className="mt-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Unique Identification Details
              </label>

              <textarea
                name="uniqueDetails"
                value={formData.uniqueDetails}
                onChange={handleChange}
                rows="3"
                placeholder="Any scratches, stickers, marks, serial number, case details etc."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>


          {/* LOCATION */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Where Did You Lose It?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Lost Date *
                </label>

                <input
                  type="date"
                  name="lostDate"
                  value={formData.lostDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Lost Location *
                </label>

                <input
                  type="text"
                  name="lostLocation"
                  value={formData.lostLocation}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Railway Station, Mall, Bus Stop"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City *
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Enter city"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

          </div>


          {/* PHOTO */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Item Photo
            </h2>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Item Photo
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            {preview && (
              <div className="mt-5">

                <p className="text-sm text-gray-600 mb-2">
                  Photo Preview
                </p>

                <img
                  src={preview}
                  alt="Lost item preview"
                  className="w-48 h-48 object-cover rounded-xl border"
                />

              </div>
            )}

          </div>


          {/* ADDITIONAL */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Additional Information
            </h2>

            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="4"
              placeholder="Anything else that can help identify your item..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              {id ? "Update Lost Report" : "Submit Lost Report"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/my-lost-reports")}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ReportLostItem;