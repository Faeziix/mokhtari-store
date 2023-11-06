import React, { useState } from "react";
const categories = ["Cleanser", "Moisturizer", "Serum", "Toner"];

function CategorySelector() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  return (
    <div>
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
  );
}

export default CategorySelector;
