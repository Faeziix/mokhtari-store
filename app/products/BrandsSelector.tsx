import React, { useState } from "react";

const brands = ["Anubis", "Bioderma", "Cetaphil", "CeraVe", "COSRX", "Curel"];
function BrandsSelector() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  return (
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
                  setSelectedBrands(selectedBrands.filter((b) => b !== brand));
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
  );
}

export default BrandsSelector;
