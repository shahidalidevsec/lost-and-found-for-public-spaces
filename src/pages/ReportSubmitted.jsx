import { useNavigate } from "react-router-dom";

function ReportSubmitted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">

      <div className="max-w-2xl w-full">

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">

          {/* Success Icon */}
          <div className="mx-auto w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-7">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">
                ✓
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Lost Item Has Been Reported!
          </h1>

          {/* Main Message */}
          <p className="text-gray-600 text-lg leading-8 mt-5">
            Thank you for taking the time to provide the details.
            Your lost item report has been successfully submitted.
          </p>

          {/* Emotional / Trust Message */}
          <div className="mt-7 bg-blue-50 border border-blue-100 rounded-2xl p-6">


            <h2 className="text-xl font-bold text-blue-900">
              Don't lose hope!
            </h2>

            <p className="text-blue-800 mt-3 leading-7">
              If your item is found or someone reports a matching item,
              we will make sure you are informed.
              Please keep checking your reports and stay connected with us.
            </p>

          </div>

          {/* Positive Message */}
          <div className="mt-6">

            <p className="text-gray-700 leading-7">
              <span className="font-semibold">
                Every lost item has a story,
              </span>{" "}
              and every found item has the power to bring that story
              to a happy ending.
            </p>

            <p className="text-gray-500 mt-3">
              We sincerely hope your belongings find their way back to you soon. 
            </p>

          </div>


          {/* Status */}
          <div className="mt-8 flex items-center justify-center gap-3">

            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

            <span className="text-sm font-semibold text-gray-600">
              Report successfully submitted
            </span>

          </div>


          {/* Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row gap-4">

            <button
              onClick={() => navigate("/my-lost-reports")}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition duration-200 shadow-md"
            >
              View My Report
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3.5 rounded-xl font-semibold transition duration-200"
            >
              Back to Home
            </button>

          </div>


          {/* Footer Message */}
          <div className="mt-9 pt-6 border-t border-gray-100">

            <p className="text-sm text-gray-500">
              Thank you for using our Lost & Found service.
            </p>

            <p className="text-sm font-medium text-blue-600 mt-2">
              Together, we can help lost belongings find their way home. 
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ReportSubmitted;