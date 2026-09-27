
import { Link } from "react-router-dom";

function Business() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-red-600 font-semibold uppercase tracking-wider mb-3">
            For Businesses
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lost & Found Solutions for Businesses
          </h1>

          <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-8">
            Help your customers, employees and visitors report, manage and
            recover lost items through our centralized Lost & Found platform.
          </p>

          <div className="w-12 h-1 bg-purple-600 mx-auto mt-8"></div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <Link
              to="/register"
              className="px-7 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition"
            >
              Get Started
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-md font-semibold transition"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>

              <p className="text-red-600 font-semibold mb-3">
                BUSINESS SOLUTION
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Make Lost & Found Management Easier
              </h2>

              <p className="text-gray-500 leading-8 mb-5">
                Businesses such as hotels, shopping malls, colleges, offices,
                restaurants, transport companies and residential communities
                handle lost items every day.
              </p>

              <p className="text-gray-500 leading-8 mb-5">
                Instead of maintaining paper records or scattered spreadsheets,
                businesses can use a centralized platform to record found
                items and help people recover their belongings.
              </p>

              <p className="text-gray-500 leading-8">
                Our platform makes the entire process organized, searchable
                and easier to manage.
              </p>

            </div>


            {/* Right */}
            <div className="bg-gray-50 rounded-xl p-10">

              <h3 className="text-2xl font-bold text-gray-900 mb-7">
                Who can use it?
              </h3>

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="text-3xl "> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6xArOlSNMfLIjNYi-RDegj3SnohewoHXi1MEE3koJA&s" alt="" /></div>
                  <h4 className="font-semibold mt-2 text-gray-900">
                    Hotels
                  </h4>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="text-3xl mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJYLqybGi3gPgPn7PsURJhRXre6TU-tISB4IHKcdfTQ&s=10" alt="" /></div>
                  <h4 className="font-semibold text-gray-900">
                    Offices
                  </h4>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="text-3xl mb-3"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiLnoJxgPeHZRCMMHOPsmcORvixJT0shQOOTrCpTYtw&s" alt="" /></div>
                  <h4 className="font-semibold text-gray-900">
                    Colleges
                  </h4>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="text-3xl mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopzVosvuIJNd2B0-V0fRw5dw_KomtiEYwLUsJEb4Epg&s=10" alt="" /></div>
                  <h4 className="font-semibold text-gray-900">
                    Shopping Malls
                  </h4>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="text-3xl mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcu3Wsq0uRjIWv3OZhgncc7KK4J8x_mXPrayFsv9tMQ&s=10" alt="" />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    Societies
                  </h4>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="text-3xl mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7Ry9VxN5HF7BDJ-sIUWaDlLUrNlA47ttzaMefuWHZA&s=10" alt="" /></div>
                  <h4 className="font-semibold text-gray-900">
                    Transport
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-red-600 font-semibold mb-3">
              FEATURES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Everything Your Business Needs
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {/* Feature 1 */}
            <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100">

            
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Manage Found Items
              </h3>

              <p className="text-gray-500 leading-7">
                Record and organize items that have been found inside your
                business premises.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100">

           
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Search
              </h3>

              <p className="text-gray-500 leading-7">
                Quickly search items using names, categories, locations and
                other details.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100">

          
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Location Tracking
              </h3>

              <p className="text-gray-500 leading-7">
                Keep track of where an item was lost or where it was found.
              </p>

            </div>


            {/* Feature 4 */}
            <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100">

           
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customer Assistance
              </h3>

              <p className="text-gray-500 leading-7">
                Give customers an easier way to report missing belongings and
                search for found items.
              </p>

            </div>


            {/* Feature 5 */}
            <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100">

             

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Notifications
              </h3>

              <p className="text-gray-500 leading-7">
                Keep users informed when relevant updates are available for
                their reports.
              </p>

            </div>


            {/* Feature 6 */}
            <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-100">

            
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Organized Records
              </h3>

              <p className="text-gray-500 leading-7">
                Keep your lost and found records organized in one centralized
                platform.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-red-600 font-semibold mb-3">
            HOW IT WORKS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Start Managing Lost & Found in 3 Steps
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Step 1 */}
            <div>

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-5">
                1
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Create Your Account
              </h3>

              <p className="text-gray-500 leading-7">
                Register your business and create an account on the platform.
              </p>

            </div>


            {/* Step 2 */}
            <div>

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-5">
                2
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Report Found Items
              </h3>

              <p className="text-gray-500 leading-7">
                Add details whenever an item is found at your location.
              </p>

            </div>


            {/* Step 3 */}
            <div>

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-5">
                3
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Help Return Items
              </h3>

              <p className="text-gray-500 leading-7">
                Connect the item with the person who reported it missing.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}
      <section className="bg-gray-900 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-red-400 font-semibold mb-3">
              WHY BUSINESSES CHOOSE US
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Better Lost & Found Management
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Save Time
              </h3>

              <p className="text-gray-400 leading-7">
                Reduce manual work involved in maintaining lost and found
                records.
              </p>
            </div>


            <div className="border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Improve Service
              </h3>

              <p className="text-gray-400 leading-7">
                Provide customers with a better way to recover their belongings.
              </p>
            </div>


            <div className="border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Stay Organized
              </h3>

              <p className="text-gray-400 leading-7">
                Keep all lost and found information in one place.
              </p>
            </div>


            <div className="border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Build Trust
              </h3>

              <p className="text-gray-400 leading-7">
                Show customers that your organization takes lost property
                seriously.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Ready to improve your Lost & Found process?
          </h2>

          <p className="text-gray-500 text-lg mb-8">
            Join the platform and make it easier for your customers and
            community to recover lost belongings.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/register"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition"
            >
              Register Your Business
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-md font-semibold transition"
            >
              Talk to Us
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Business;