import React from "react";
import ImageSlider from "./ImageSlider";
import BeforeAfterSelector from "./BeforeAfterSelector";

function BeforeAfter() {
  return (
    <div>
      <h1>Before & After</h1>
      <div className="mb-2">
        <ImageSlider />
      </div>
      <p className="text-center mb-5 text-secondary-800">sub-title</p>
      <BeforeAfterSelector />
    </div>
  );
}

export default BeforeAfter;
