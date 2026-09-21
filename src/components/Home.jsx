



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import items from "../data/Items";
import CategoryBrowser from "../components/CategoryBrowser";
import Statistics from "../components/Statistics";
import HowToPost from "../components/HowToPost";
import InfoMarquee from "../components/InfoMarquee";
import Footer from "./Footer";

function Home() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  const navigate = useNavigate();

  // Search box suggestions only
  const searchSuggestions = [
    "Search Electronics",
    "Search Jewellery",
    "Search Bags",
    "Search Watches",
    "Search Wallets",
    "Search Keys",
    "Search Mobile Phones",
    "Search Documents",
    "Search ID Cards",
    "Search Earphones",
  ];

  // Animation for search suggestions
  useEffect(() => {
    if (!showSuggestions || search.trim() !== "") return;

    const interval = setInterval(() => {
      setSuggestionIndex(
        (prev) => (prev + 1) % searchSuggestions.length
      );
    }, 2200);

    return () => clearInterval(interval);
  }, [showSuggestions, search]);

  const matchingItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5);

  const handleNext = () => {
    navigate(`/lost-items?search=${encodeURIComponent(search)}`);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* Only search animation CSS */}
      <style>{`
        @keyframes searchSuggestionUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          20% {
            opacity: 1;
            transform: translateY(0);
          }

          75% {
            opacity: 1;
            transform: translateY(0);
          }

          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .search-suggestion-animation {
          animation: searchSuggestionUp 2.2s ease-in-out;
        }
      `}</style>

      <InfoMarquee />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-orange-50">

        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-200/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">

          <div className="max-w-4xl mx-auto text-center">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-red-100 rounded-full shadow-sm mb-7">

              <span className="w-2 h-2 bg-green-500 rounded-full"></span>

              <span className="text-sm font-medium text-gray-700">
                Helping communities reconnect with what matters
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-gray-900">

              Lost something?

              <span className="block text-red-700 mt-2">
                Let's help you find it.
              </span>

            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Search through items reported lost and found in your society
              and nearby community.
            </p>

            {/* Search Area */}
            <div className="mt-10 max-w-3xl mx-auto">

              <div className="bg-white p-1 rounded-2xl shadow-xl shadow-gray-200/60 border-2 border-gray-300  flex flex-col md:flex-row gap-2">

                <div className="flex items-center flex-1 px-4">

                  {/* Search Icon */}
                  <svg
                    className="w-6 h-6 text-gray-400 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                    />
                  </svg>

                  {/* ================= SEARCH INPUT ================= */}
                  <div className="relative w-full">

                    <input
                      type="text"
                      value={search}

                      onFocus={() => {
                        // Click karte hi animation stop
                        setShowSuggestions(false);
                      }}

                      onChange={(e) => {
                        const value = e.target.value;

                        setSearch(value);

                        // Sab text delete kar diya
                        // to animation wapas start
                        if (value.trim() === "") {
                          setShowSuggestions(true);
                        } else {
                          // User type kar raha hai
                          setShowSuggestions(false);
                        }
                      }}

                      placeholder={
                        showSuggestions
                          ? ""
                          : "What did you lose? e.g. wallet, keys, phone..."
                      }

                      className="w-full h-14 text-base md:text-lg outline-none bg-transparent placeholder:text-gray-400"
                    />

                    {/* Animated suggestion */}
                    {!search && showSuggestions && (
                      <div
                        className="
                          absolute
                          left-0
                          top-1/2
                          -translate-y-1/2
                          pointer-events-none
                          text-base
                          md:text-lg
                          text-gray-400
                          overflow-hidden
                          h-7
                          bg-white
                          pr-2
                        "
                      >
                        <div
                          key={suggestionIndex}
                          className="search-suggestion-animation"
                        >
                          {searchSuggestions[suggestionIndex]}
                        </div>
                      </div>
                    )}

                  </div>

                </div>


                <button
                  onClick={handleNext}
                  className="h-14 px-8 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-200 cursor-pointer"
                >
                  Search Items
                </button>

              </div>

              <p className="mt-3 text-sm text-gray-500">
                Search by item name to find matching reports.
              </p>

            </div>


            {/* Live Matching Results */}
            {search && (
              <div className="max-w-3xl mx-auto mt-4 text-left">

                {matchingItems.length > 0 ? (

                  <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

                    <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-600">
                        Matching items
                      </p>
                    </div>


                    {matchingItems.map((item) => (

                      <button
                        key={item.id}
                        onClick={() => navigate(`/item/${item.id}`)}
                        className="w-full text-left px-5 py-4 hover:bg-gray-50 border-b last:border-b-0 transition cursor-pointer"
                      >

                        <div className="flex items-center justify-between gap-4">

                          <div>

                            <span className="font-semibold text-gray-900">
                              {item.name}
                            </span>

                            <span className="ml-3 text-sm text-gray-500">
                              {item.location}
                            </span>

                          </div>


                          <span
                            className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold ${
                              item.status === "Lost"
                                ? "bg-red-50 text-red-600"
                                : "bg-green-50 text-green-600"
                            }`}
                          >
                            {item.status}
                          </span>

                        </div>

                      </button>

                    ))}


                    <p className="px-5 py-3 text-xs text-gray-500 bg-gray-50">
                      {matchingItems.length} matching result
                      {matchingItems.length !== 1 && "s"}
                    </p>

                  </div>

                ) : (

                  <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg">

                    <p className="text-gray-500">
                      No matching items found.
                    </p>

                  </div>

                )}

              </div>
            )}

          </div>

        </div>

      </section>


      {/* ================= QUICK ACTIONS ================= */}
      <section className="py-15 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-sm font-bold tracking-widest uppercase text-red-600">
              Explore
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Find what you're looking for
            </h2>

            <p className="mt-4 text-gray-600">
              Browse reports from your community and check whether your
              missing item has already been reported.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">

            {/* Lost Items */}
            <button
              onClick={() => navigate("/lost-items")}
              className="group relative overflow-hidden text-left p-8 md:p-10 bg-gradient-to-br from-red-50 to-white hover:border-red-500 border border-red-200 rounded-3xl hover:shadow-xl hover:shadow-red-200 transition-all duration-300 cursor-pointer"
            >

              <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-400 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="relative">

                <div className="w-14 h-14 flex items-center justify-center bg-red-100 text-red-700 rounded-2xl mb-6">

                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-2a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>

                </div>


                <h3 className="text-2xl font-bold text-gray-900">
                  Lost Items
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Browse items that residents have reported as lost.
                </p>

                <span className="inline-flex items-center gap-2 mt-7 text-red-700 font-semibold group-hover:gap-3 transition-all">
                  View Lost Items
                  <span>→</span>
                </span>

              </div>

            </button>


            {/* Found Items */}
            <button
              onClick={() => navigate("/found-items")}
              className="group relative overflow-hidden text-left p-8 md:p-10 hover:shadow-green-200  hover:border-green-500 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-3xl hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 cursor-pointer"
            >

              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-300 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="relative">

                <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-700 rounded-2xl mb-6">

                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                </div>


                <h3 className="text-2xl font-bold text-gray-900">
                  Found Items
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Browse items that have been found by people in your
                  community.
                </p>

                <span className="inline-flex items-center gap-2 mt-7 text-green-700 font-semibold group-hover:gap-3 transition-all">
                  View Found Items
                  <span>→</span>
                </span>

              </div>

            </button>

          </div>

        </div>

      </section>


      {/* ================= CATEGORY SECTION ================= */}
      <section className="bg-gray-50 py-20">
        <CategoryBrowser />
      </section>


      {/* ================= STATISTICS ================= */}
      <Statistics />


      {/* ================= HOW TO POST ================= */}
      <HowToPost />


      {/* ================= FOOTER ================= */}
      <Footer />

    </main>
  );
}

export default Home;