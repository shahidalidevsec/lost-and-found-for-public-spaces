import { useState } from "react";
import { useNavigate } from "react-router-dom";
import items from "../data/Items";
import CategoryBrowser from "../components/CategoryBrowser";
import Statistics from "../components/Statistics";
import HowToPost from "../components/HowToPost";
import InfoMarquee from "../components/InfoMarquee";

 import Footer from "./Footer";


function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const matchingItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5);

  const handleNext = () => {
    navigate(`/lost-items?search=${encodeURIComponent(search)}`);
  };

  return (
    <main className="min-h-screen bg-white mt-3">
      <InfoMarquee/>

      {/* Search Section */}
      <section className="min-h-[430px] flex items-center justify-center">

        <div className="w-full max-w-4xl px-6 text-center">

          <h1 className="text-5xl font-normal text-red-700 mb-7">
            What have you lost?
          </h1>

          <p className="text-xl text-gray-900 mb-5">
            Describe the item lost in one word
          </p>

          {/* Search Box */}
          <div className="flex justify-center">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Leave blank to show all items"
              className="
                w-[620px]
                h-[46px]
                border-2
                border-gray-300
                px-6
                text-lg
                outline-none
                focus:border-red-600
              "
            />

            <button
              onClick={handleNext}
              className="
                ml-3
                h-[46px]
                px-8
                bg-red-700
                text-white
                font-bold
                hover:bg-red-800
                transition
                cursor-pointer
}
              "
            >
              NEXT
            </button>

          </div>

          {/* Live Matching Results */}
          {search && (
            <div className="max-w-[620px] mx-auto mt-3 text-left">

              {matchingItems.length > 0 ? (
                <div className="border border-gray-200 bg-white shadow-sm">

                  <p className="px-4 py-3 text-sm text-gray-500 border-b">
                    Matching items:
                  </p>

                  {matchingItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() =>
                        navigate(`/item/${item.id}`)
                      }
                      className="
                        w-full
                        text-left
                        px-4
                        py-3
                        hover:bg-gray-50
                        border-b
                        last:border-b-0
                      "
                    >
                      <span className="font-semibold">
                        {item.name}
                      </span>

                      <span className="ml-3 text-sm text-gray-500">
                        {item.location}
                      </span>

                      <span
                        className={`ml-3 text-sm font-semibold ${
                          item.status === "Lost"
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </button>
                  ))}

                  <p className="px-4 py-3 text-sm text-gray-500">
                    {matchingItems.length} matching result
                    {matchingItems.length !== 1 && "s"}
                  </p>

                </div>
              ) : (
                <div className="border border-gray-200 p-4 text-gray-500">
                  No matching items found.
                </div>
              )}

            </div>
          )}

        </div>

      </section>

      {/* Quick Actions */}
      <section className="bg-gray-50 py-14">

        <div className="max-w-6xl mx-auto px-6 ">

          <h2 className="text-3xl font-semibold text-center">
            Browse Lost & Found Items
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <button
              onClick={() => navigate("/lost-items")}
              className="bg-white border border-gray-200 p-8 cursor-pointer hover:border-red-400 text-left hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold text-red-700">
                Lost Items
              </h3>

              <p className="mt-2 text-gray-600">
                Browse items reported as lost.
              </p>

              <span className="inline-block mt-5 text-red-700 font-semibold">
                View Lost Items →
              </span>
            </button>

            <button
              onClick={() => navigate("/found-items")}
              className="bg-white border border-gray-200 cursor-pointer hover:border-green-400 p-8 text-left hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold text-green-700">
                Found Items
              </h3>

              <p className="mt-2 text-gray-600">
                Browse items reported as found.
              </p>

              <span className="inline-block mt-5 text-green-700 font-semibold">
                View Found Items →
              </span>
            </button>

          </div>

        </div>

      </section>


      <CategoryBrowser />



<Statistics />
<HowToPost/>


<Footer/>
    </main>
  );
}

export default Home;