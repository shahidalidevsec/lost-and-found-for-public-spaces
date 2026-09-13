
import { Link } from "react-router-dom";

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const userName = user?.name || "User";

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="max-w-3xl">

            <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-3">
              Lost & Found Dashboard
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Welcome back, {userName}! 
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Report something you lost, post something you found,
              or search through lost and found items.
            </p>

          </div>

        </div>

      </section>


      {/* ================= MAIN ================= */}

      <main className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-10">

          <h2 className="text-3xl font-bold text-slate-900">
            What would you like to do?
          </h2>

          <p className="text-slate-600 mt-2">
            Choose an option below to get started.
          </p>

        </div>


        {/* ================= CARDS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">


          {/* REPORT LOST */}

          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition duration-300">


            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Report Lost Item
            </h3>

            <p className="text-slate-600 leading-relaxed mb-7">
              Lost your phone, wallet, documents, keys or another
              important item? Report it here so people can help you
              find it.
            </p>

            <Link
              to="/report-lost-item"
              className="block text-center w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-xl transition"
            >
              Report Lost Item →
            </Link>

          </div>


          {/* POST FOUND */}

          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition duration-300">

            
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Post Found Item
            </h3>

            <p className="text-slate-600 leading-relaxed mb-7">
              Found something that belongs to someone else?
              Post the details and help the owner get it back.
            </p>

            <Link
              to="/my-lost-reports"
              className="block text-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-xl transition"
            >
              Post Found Item →
            </Link>
        

        
            <Link
              to="/lost-report/:id"
              className="block text-center w-full bg-green-600 mt-3 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-xl transition"
            >
              My lost items details
            </Link>

          </div>


          {/* VIEW ITEMS */}

          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition duration-300">

          
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              View Lost & Found
            </h3>

            <p className="text-slate-600 leading-relaxed mb-7">
              Browse items reported by other users. Search for
              something you may have lost or check recently found items.
            </p>

            <Link
              to="/lost-items"
              className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-xl transition"
            >
              View Lost items→
            </Link>
            
<Link
              to="/found-items"
              className="block text-center w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-xl transition"
            >
              View  Found →
            </Link>
            
          </div>

        </div>


        {/* ================= QUICK INFO ================= */}

        <section className="mt-16">

          <div className="bg-white border border-slate-200 rounded-2xl p-8">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              How Lost & Found works
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


              <div className="flex gap-4">

                <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  1
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Report an item
                  </h3>

                  <p className="text-sm text-slate-600 mt-1">
                    Tell the community about an item you lost or found.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  2
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Search & connect
                  </h3>

                  <p className="text-sm text-slate-600 mt-1">
                    Search reported items and find possible matches.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  3
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Get it back
                  </h3>

                  <p className="text-sm text-slate-600 mt-1">
                    Contact the person who reported the matching item.
                  </p>
                </div>

              </div>


            </div>

          </div>

        </section>


      </main>

    </div>
  );
};

export default Dashboard;