import items from "../data/Items";

function Statistics() {

  const totalItems = items.length;

  const totalUsers = 4967;

  const totalLocations = new Set(
    items.map((item) => item.location)
  ).size;

  return (
    <section className="max-w-6xl mx-auto px-6 mt-6 mb-10">

      <div className="bg-gray-50 border border-gray-100 grid grid-cols-1 md:grid-cols-3">

        {/* Cases */}
        <div className="h-28 flex items-center justify-center gap-5">

          <div className="text-5xl text-gray-400">
            
          </div>

          <div>
            <p className="text-4xl font-bold text-gray-400">
              {totalItems}
            </p>

            <p className="text-gray-500 font-bold">
              Lost & Found cases
            </p>
          </div>

        </div>

        {/* Users */}
        <div className="h-28 flex items-center justify-center gap-5">

          <div className="text-5xl text-gray-400">
            
          </div>

          <div>
            <p className="text-4xl font-bold text-gray-400">
              {totalUsers}
            </p>

            <p className="text-gray-500 font-bold">
              Users
            </p>
          </div>

        </div>

        {/* Locations */}
        <div className="h-28 flex items-center justify-center gap-5">

          <div className="text-5xl text-gray-400">
            
          </div>

          <div>
            <p className="text-4xl font-bold text-gray-400">
              {totalLocations}
            </p>

            <p className="text-gray-500 font-bold">
              Locations
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Statistics;