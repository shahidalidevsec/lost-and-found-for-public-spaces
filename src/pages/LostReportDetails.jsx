import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function LostReportDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState(null);

  useEffect(() => {
    const reports = JSON.parse(
      localStorage.getItem("lostReports") || "[]"
    );

    const foundReport = reports.find(
      (item) => item.id === id
    );

    setReport(foundReport);
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;

    const reports = JSON.parse(
      localStorage.getItem("lostReports") || "[]"
    );

    const updatedReports = reports.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "lostReports",
      JSON.stringify(updatedReports)
    );

    navigate("/my-lost-reports");
  };

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Report Not Found
          </h1>

          <button
            onClick={() => navigate("/my-lost-reports")}
            className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Back to My Reports
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        <button
          onClick={() => navigate("/my-lost-reports")}
          className="mb-6 text-blue-600 font-semibold"
        >
          ← Back to My Reports
        </button>


        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Image */}
          {report.photo && (
            <img
              src={report.photo}
              alt={report.itemName}
              className="w-full h-80 object-cover"
            />
          )}


          <div className="p-8">

            <div className="flex flex-col md:flex-row md:justify-between gap-4">

              <div>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  LOST ITEM
                </span>

                <h1 className="text-4xl font-bold text-gray-900 mt-4">
                  {report.itemName}
                </h1>
              </div>

            </div>


            {/* Item Details */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-5">
                Item Details
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <Info
                  label="Category"
                  value={report.category}
                />

                <Info
                  label="Brand"
                  value={report.brand}
                />

                <Info
                  label="Color"
                  value={report.color}
                />

                <Info
                  label="Lost Date"
                  value={report.lostDate}
                />

                <Info
                  label="Lost Location"
                  value={report.lostLocation}
                />

                <Info
                  label="City"
                  value={report.city}
                />

              </div>

            </div>


            {/* Description */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">
                Description
              </h2>

              <p className="text-gray-600 leading-7">
                {report.description}
              </p>

            </div>


            {/* Unique Details */}
            {report.uniqueDetails && (
              <div className="mt-8">

                <h2 className="text-2xl font-bold mb-4">
                  Unique Identification Details
                </h2>

                <p className="text-gray-600 leading-7">
                  {report.uniqueDetails}
                </p>

              </div>
            )}


            {/* Additional */}
            {report.additionalInfo && (
              <div className="mt-8">

                <h2 className="text-2xl font-bold mb-4">
                  Additional Information
                </h2>

                <p className="text-gray-600 leading-7">
                  {report.additionalInfo}
                </p>

              </div>
            )}


            {/* User Details */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-5">
                Reporter Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <Info
                  label="Name"
                  value={report.userName}
                />

                <Info
                  label="Email"
                  value={report.email}
                />

                <Info
                  label="Phone"
                  value={report.phone}
                />

              </div>

            </div>


            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button
                onClick={() =>
                  navigate(`/report-lost-item/edit/${report.id}`)
                }
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold"
              >
                Edit Report
              </button>

              <button
                onClick={handleDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"
              >
                Delete Report
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


function Info({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="font-semibold text-gray-800 mt-1">
        {value || "Not provided"}
      </p>

    </div>
  );
}

export default LostReportDetails;