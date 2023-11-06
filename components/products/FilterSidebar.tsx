"use client";

import React from "react";
import BrandsSelector from "./BrandsSelector";
import CategorySelector from "./CategorySelector";
import PriceRange from "./PriceRange";
import { Slider } from "@material-tailwind/react";

const FilterSidebar = () => {
  return (
    <div className="">
      <div className="mb-4 flex gap-2 items-center">
        {/*   <BrandsSelector /> */}
        {/*   <CategorySelector /> */}
        {/* <PriceRange /> */}
        <button className="px-8 text-[8px] max-w-[80px] py-2 bg-gray-200">
          Filter
        </button>
        <button className="px-8 text-[8px] max-w-[80px] py-2 bg-gray-200">
          Sort
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
