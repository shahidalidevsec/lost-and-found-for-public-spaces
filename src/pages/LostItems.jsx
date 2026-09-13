



import { useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import items from "../data/Items";

function LostItems() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [sort, setSort] = useState("newest");

  const categories = [
    "All",
    "Phones & Tablets",
    "Bags",
    "Jewelry",
    "Watches",
    "People",
    "Documents",
    "Keys",
    "Toys",
    "Laptop",
    "Fashion Accessories",
    "Clothes & Shoes",
    "Pets",
    "Sports Equipment",
    "Other",
    "Automobile",
  ];

  const locations = [
    "All",
    "Chembur",
    "Andheri",
    "Kurla",
    "Bandra",
    "Ghatkopar",
    "Dadar",
    "Powai",
    "Thane",
    "BKC",
    "Sion",
    "Vikhroli",
    "Mulund",
    "Vile Parle",
    "Mumbai Central",
    "Colaba",
  ];

  const filteredItems = useMemo(() => {
    let result = items.filter(
      (item) => item.status === "Lost"
    );

    if (search.trim()) {
      const searchText = search.toLowerCase().trim();

      result = result.filter((item) =>
        `${item.name} ${item.category} ${item.location}`
          .toLowerCase()
          .includes(searchText)
      );
    }

    if (category !== "All") {
      result = result.filter(
        (item) => item.category === category
      );
    }

    if (location !== "All") {
      result = result.filter(
        (item) => item.location === location
      );
    }

    result.sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.date) - new Date(a.date);
      }

      if (sort === "oldest") {
        return new Date(a.date) - new Date(b.date);
      }

      if (sort === "name") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

    return result;
  }, [search, category, location, sort]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setLocation("All");
    setSort("newest");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

          <div>
            <p className="text-red-600 font-semibold">
              LOST ITEMS
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mt-1">
              What have people lost?
            </h1>

            <p className="text-gray-500 mt-2">
              Browse publicly reported lost items.
            </p>
          </div>

          <div className="text-gray-600">
            <strong>{filteredItems.length}</strong>{" "}
            items found
          </div>

        </div>

        {/* Search + Filters */}
        <div className="mt-8 bg-white border border-gray-200 p-5">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search item, category or location..."
            className="
              w-full
              h-12
              border
              border-gray-300
              px-4
              outline-none
              focus:border-red-600
            "
          />

          <div className="grid md:grid-cols-3 gap-4 mt-4">

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                h-11
                border
                border-gray-300
                px-3
                bg-white
                outline-none
                focus:border-red-600
              "
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  Category: {item}
                </option>
              ))}
            </select>

            {/* Location */}
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="
                h-11
                border
                border-gray-300
                px-3
                bg-white
                outline-none
                focus:border-red-600
              "
            >
              {locations.map((item) => (
                <option key={item} value={item}>
                  Location: {item}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                h-11
                border
                border-gray-300
                px-3
                bg-white
                outline-none
                focus:border-red-600
              "
            >
              <option value="newest">
                Newest first
              </option>

              <option value="oldest">
                Oldest first
              </option>

              <option value="name">
                Name A-Z
              </option>
            </select>

          </div>

          <button
            onClick={resetFilters}
            className="
              mt-4
              text-red-700
              font-semibold
              hover:underline
            "
          >
            Reset filters
          </button>

        </div>

        {/* Items */}
        {filteredItems.length > 0 ? (

          <div className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
            mt-8
          ">

            {filteredItems.map((item) => (

              <div
                key={item.id}
                className="
                  bg-white
                  border
                  border-gray-200
                  overflow-hidden
                  hover:shadow-lg
                  transition
                "
              >

                {/* Image */}
                <div className="
                  h-48
                  bg-gray-100
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                ">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        hover:scale-105
                        transition
                        duration-300
                      "
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                            Image unavailable
                          </div>
                        `;
                      }}
                    />
                  ) : (
                    <div className="
                      w-full
                      h-full
                      flex
                      items-center
                      justify-center
                      text-gray-400
                      text-sm
                    ">
                      No Image Available
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">

                  <div className="
                    flex
                    justify-between
                    items-start
                    gap-3
                  ">

                    <h2 className="
                      text-xl
                      font-semibold
                      text-gray-900
                    ">
                      {item.name}
                    </h2>

                    <span className="
                      text-xs
                      font-bold
                      bg-red-100
                      text-red-700
                      px-2
                      py-1
                      whitespace-nowrap
                    ">
                      LOST
                    </span>

                  </div>

                  <p className="
                    text-sm
                    text-gray-500
                    mt-3
                  ">
                    {item.category}
                  </p>

                  <p className="
                    text-sm
                    text-gray-600
                    mt-1
                  ">
                    📍 {item.location}
                  </p>

                  <p className="
                    text-sm
                    text-gray-500
                    mt-1
                  ">
                    📅 {item.date}
                  </p>

                  <p className="
                    text-gray-600
                    text-sm
                    mt-3
                    line-clamp-2
                  ">
                    {item.description}
                  </p>

                  <button
                    onClick={() =>
                      navigate(`/item/${item.id}`)
                    }
                    className="
                      w-full
                      mt-5
                      border
                      border-red-700
                      text-red-700
                      py-2
                      font-semibold
                      hover:bg-red-700
                      hover:text-white
                      transition
                    "
                  >
                    View Details
                  </button>

                </div>

              </div>
            ))}

          </div>

        ) : (

          <div className="
            bg-white
            border
            border-gray-200
            text-center
            py-20
            mt-8
          ">

            <h2 className="
              text-2xl
              font-semibold
            ">
              No lost items found
            </h2>

            <p className="
              text-gray-500
              mt-2
            ">
              Try changing your search or filters.
            </p>

            <button
              onClick={resetFilters}
              className="
                mt-5
                bg-red-700
                hover:bg-red-800
                text-white
                px-6
                py-3
                transition
              "
            >
              Clear Filters
            </button>

          </div>

        )}

      </div>
    </main>
  );
}

export default LostItems;