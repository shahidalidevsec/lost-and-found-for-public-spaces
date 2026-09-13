


import { Link, useNavigate, useParams } from "react-router-dom";
import items from "../data/Items";

function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = items.find(
    (item) => item.id === Number(id)
  );

  if (!item) {
    return (
      <main className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-50
      ">
        <div className="text-center">

          <h1 className="
            text-4xl
            font-bold
            text-gray-900
          ">
            Item Not Found
          </h1>

          <p className="
            text-gray-500
            mt-3
          ">
            The item you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate("/")}
            className="
              mt-5
              bg-red-700
              hover:bg-red-800
              text-white
              px-6
              py-3
              rounded
              font-semibold
              transition
            "
          >
            Go Home
          </button>

        </div>
      </main>
    );
  }

  const isLost = item.status === "Lost";

  return (
    <main className="
      min-h-screen
      bg-gray-50
      py-12
    ">

      <div className="
        max-w-5xl
        mx-auto
        px-6
      ">

        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          className="
            text-gray-600
            font-bold
            text-2xl
            hover:text-black
            mb-6
          "
        >
          ← Back
        </button>

        {/* Main Card */}

        <div className="
          bg-white
          border
          border-gray-200
          grid
          md:grid-cols-2
          overflow-hidden
        ">

          {/* Image */}

          <div className="
            min-h-[450px]
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
                  min-h-[450px]
                  object-cover
                  hover:scale-105
                  transition
                  duration-300
                "
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML = `
                    <div class="w-full h-full min-h-[450px] flex items-center justify-center text-gray-400">
                      Image unavailable
                    </div>
                  `;
                }}
              />

            ) : (

              <div className="
                w-full
                min-h-[450px]
                flex
                items-center
                justify-center
                text-gray-400
              ">
                No Image Available
              </div>

            )}

          </div>

          {/* Details */}

          <div className="p-8">

            {/* Status */}

            <span
              className={`
                inline-block
                px-3
                py-1
                text-sm
                font-bold
                ${
                  isLost
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }
              `}
            >
              {item.status.toUpperCase()}
            </span>

            {/* Name */}

            <h1 className="
              text-4xl
              font-bold
              mt-5
              text-gray-900
            ">
              {item.name}
            </h1>

            {/* Information */}

            <div className="
              mt-7
              space-y-5
            ">

              {/* Category */}

              <div>
                <p className="
                  text-sm
                  text-gray-500
                ">
                  Category
                </p>

                <p className="
                  font-semibold
                  text-gray-900
                  mt-1
                ">
                  {item.category}
                </p>
              </div>

              {/* Location */}

              <div>
                <p className="
                  text-sm
                  text-gray-500
                ">
                  Location
                </p>

                <p className="
                  font-semibold
                  text-gray-900
                  mt-1
                ">
                  📍 {item.location}
                </p>
              </div>

              {/* Date */}

              <div>
                <p className="
                  text-sm
                  text-gray-500
                ">
                  Date
                </p>

                <p className="
                  font-semibold
                  text-gray-900
                  mt-1
                ">
                  📅 {item.date}
                </p>
              </div>

              {/* Description */}

              <div>
                <p className="
                  text-sm
                  text-gray-500
                ">
                  Description
                </p>

                <p className="
                  text-gray-700
                  mt-1
                  leading-relaxed
                ">
                  {item.description}
                </p>
              </div>

              {/* Contact */}

              <div>
                <p className="
                  text-sm
                  text-gray-500
                ">
                  Contact Information
                </p>

                <p className="
                  font-semibold
                  text-gray-900
                  mt-1
                ">
                  Mobile No:
                </p>

                <span className="
                  font-serif
                  text-gray-700
                ">
                  xxxxx89898
                </span>
              </div>

            </div>

            {/* Contact Person */}

            <Link
              to="/login"
              className={`
                block
                w-full
                mt-7
                py-3
                text-white
                font-semibold
                rounded
                text-center
                transition
                ${
                  isLost
                    ? "bg-red-700 hover:bg-red-900"
                    : "bg-green-700 hover:bg-green-900"
                }
              `}
            >
              Contact Person
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ItemDetails;