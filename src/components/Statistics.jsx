import { useEffect, useState } from "react";
import { fetchCommunityItems } from "../utils/lostFound";

function Statistics() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCommunityItems().then(setItems).catch(() => setItems([]));
  }, []);

  const totalItems = items.length;
  const lostItems = items.filter((item) => item.status === "Lost").length;
  const foundItems = items.filter((item) => item.status === "Found").length;
  const totalLocations = new Set(items.map((item) => item.location).filter(Boolean)).size;

  return (
    <section className="mx-auto mt-6 mb-10 max-w-6xl px-6">
      <div className="grid grid-cols-2 border border-gray-100 bg-gray-50 md:grid-cols-4">
        <div className="flex h-28 items-center justify-center gap-3 border-b md:border-r md:border-b-0">
          <div>
            <p className="text-3xl font-bold text-gray-500">{totalItems}</p>
            <p className="text-sm font-bold text-gray-500">Total cases</p>
          </div>
        </div>
        <div className="flex h-28 items-center justify-center gap-3 border-b md:border-r md:border-b-0">
          <div>
            <p className="text-3xl font-bold text-red-500">{lostItems}</p>
            <p className="text-sm font-bold text-gray-500">Lost items</p>
          </div>
        </div>
        <div className="flex h-28 items-center justify-center gap-3 border-r">
          <div>
            <p className="text-3xl font-bold text-green-600">{foundItems}</p>
            <p className="text-sm font-bold text-gray-500">Found items</p>
          </div>
        </div>
        <div className="flex h-28 items-center justify-center gap-3">
          <div>
            <p className="text-3xl font-bold text-gray-500">{totalLocations}</p>
            <p className="text-sm font-bold text-gray-500">Locations</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
