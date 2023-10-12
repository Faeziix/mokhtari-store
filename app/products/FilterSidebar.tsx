"use client";
// FilterSidebar.js
import React, { useState } from "react";

const brands = ["Anubis", "Bioderma", "Cetaphil", "CeraVe", "COSRX", "Curel"];
const categories = ["Cleanser", "Moisturizer", "Serum", "Toner"];

const FilterSidebar = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });

  return (
    <div className="p-4 bg-white">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Brands</h2>
        {brands.map((brand) => (
          <div key={brand}>
            <label className="block mb-2">
              <input
                type="checkbox"
                name="brand"
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => {
                  if (selectedBrands.includes(brand)) {
                    setSelectedBrands(
                      selectedBrands.filter((b) => b !== brand)
                    );
                  } else {
                    setSelectedBrands([...selectedBrands, brand]);
                  }
                }}
                className="mr-2"
              />
              {brand}
            </label>
          </div>
        ))}
        <button
          className="border rounded p-1 shadow-sm active:bg-neutral-100 hover:shadow-md transition-shadow duration-300"
          onClick={() => setSelectedBrands([])}
        >
          Clear
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Categories</h2>
        {categories.map((category) => (
          <div key={category}>
            <label className="block mb-2">
              <input
                type="checkbox"
                name="category"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  setSelectedCategories([...selectedCategories, category])
                }
                className="mr-2"
              />
              {category}
            </label>
          </div>
        ))}
        <button
          className="border rounded p-1 shadow-sm active:bg-neutral-100 hover:shadow-md transition-shadow duration-300"
          onClick={() => setSelectedCategories([])}
        >
          Clear
        </button>
      </div>

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
    </div>
  );
};

export default FilterSidebar;
