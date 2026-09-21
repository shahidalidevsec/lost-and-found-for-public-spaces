import { useNavigate } from "react-router-dom";
import { categories } from "../data/Items";
import items from "../data/Items";

function CategoryBrowser() {
  const navigate = useNavigate();

  const getCategoryCount = (categoryName) => {
    return items.filter(
      (item) => item.category === categoryName
    ).length;
  };

  const handleCategory = (categoryName) => {
    navigate(
      `/lost-items?category=${encodeURIComponent(categoryName)}`
    );
  };

  return (
    <section className="max-w-7xl  mx-auto px-2 ">

      {/* Category Box */}
      <div className="border border-gray-300 rounded-md overflow-hidden bg-white">

        {/* Header */}
        <div className="h-14 px-4 flex items-center justify-between border-b border-gray-200">

          <h2 className="text-lg text-gray-800">
            Browse by{" "}
            <span className="font-bold">
              Category
            </span>
          </h2>

          <button
            onClick={() => navigate("/lost-items")}
            className="text-red-600 text-sm font-bold  hover:text-red-800"
          >
            VIEW MORE ☰
          </button>

        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

          {categories.map((category) => {

            const count = getCategoryCount(
              category.name
            );

            return (
              <button
                key={category.name}
                onClick={() =>
                  handleCategory(category.name)
                }
                className="
                  h-36
                  border-r
                  border-b
                  border-gray-200
                  flex
                  flex-col
                  items-center
                  justify-center
                  hover:bg-gray-50
                  transition
                  group
                "
              >

                {/* Icon */}
                <div
                  className="
                    text-5xl
                    mb-3
                    grayscale
                    group-hover:grayscale-0
                    transition
                  "
                >
                  {category.icon}
                </div>

                {/* Category Name */}
                <div className="text-sm font-medium text-gray-800 text-center px-2">

                  {category.name}

                  <span className="ml-1 text-gray-500">
                    ({count})
                  </span>

                </div>

              </button>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default CategoryBrowser;