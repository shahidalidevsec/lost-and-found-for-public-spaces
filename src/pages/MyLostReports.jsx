import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyLostReports() {
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = () => {
    const savedReports = JSON.parse(
      localStorage.getItem("lostReports") || "[]"
    );

    setReports(savedReports);
  };

  // Delete report
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lost item report?"
    );

    if (!confirmDelete) return;

    const updatedReports = reports.filter(
      (report) => report.id !== id
    );

    localStorage.setItem(
      "lostReports",
      JSON.stringify(updatedReports)
    );

    setReports(updatedReports);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              My Lost Reports
            </h1>

            <p className="text-gray-600 mt-2">
              View and manage all your reported lost items.
            </p>
          </div>

          <button
            onClick={() => navigate("/report-lost-item")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            + Report Lost Item
          </button>

        </div>


        {/* Empty State */}
        {reports.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <div className="text-6xl mb-5">
              🔍
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              No Lost Reports Yet
            </h2>

            <p className="text-gray-500 mt-2 mb-6">
              You haven't reported any lost items yet.
            </p>

            <button
              onClick={() => navigate("/report-lost-item")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Report Your First Item
            </button>

          </div>
        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {reports.map((report) => (

              <div
                key={report.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >

                {/* Image */}
                {report.photo ? (
                  <img
                    src={report.photo}
                    alt={report.itemName}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-100 flex items-center justify-center">

                    <span className="text-gray-400 text-5xl">
                      📦
                    </span>

                  </div>
                )}


                {/* Content */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-3">

                    <h2 className="text-xl font-bold text-gray-900">
                      {report.itemName}
                    </h2>

                    <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                      LOST
                    </span>

                  </div>


                  <p className="text-gray-600 mt-3 line-clamp-2">
                    {report.description}
                  </p>


                  <div className="mt-5 space-y-2 text-sm text-gray-600">

                    <p>
                      📍 <strong>Location:</strong>{" "}
                      {report.lostLocation}
                    </p>

                    <p>
                      🏙️ <strong>City:</strong>{" "}
                      {report.city}
                    </p>

                    <p>
                      📅 <strong>Date:</strong>{" "}
                      {report.lostDate}
                    </p>

                    <p>
                      🏷️ <strong>Category:</strong>{" "}
                      {report.category}
                    </p>

                  </div>


                  {/* Buttons */}
                  <div className="grid grid-cols-3 gap-2 mt-6">

                    <button
                      onClick={() =>
                        navigate(`/lost-report/${report.id}`)
                      }
                      className="bg-blue-100 text-blue-700 hover:bg-blue-200 py-2 rounded-lg font-medium"
                    >
                      View
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/report-lost-item/edit/${report.id}`)
                      }
                      className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 py-2 rounded-lg font-medium"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(report.id)
                      }
                      className="bg-red-100 text-red-700 hover:bg-red-200 py-2 rounded-lg font-medium"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default MyLostReports;