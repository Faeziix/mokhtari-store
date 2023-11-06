import React, { useState } from "react";

function PriceRange() {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });

  return (
    <div className="mb-4 w-full">
      <h2 className="text-lg font-bold mb-2">Price Range</h2>
      <div className="inline-flex items-center gap-1">
        <input
          type="number"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange({ ...priceRange, min: e.target.value })
          }
          className="border p-2 block text-xs w-full"
        />
        <span>-</span>
        <input
          type="number"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({ ...priceRange, max: e.target.value })
          }
          className="border p-2 block text-xs w-full"
        />
      </div>
    </div>
  );
}

export default PriceRange;
