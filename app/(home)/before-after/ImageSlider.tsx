"use client";
import React from "react";
import ReactCompareImage from "react-compare-image";
import Before from "@/public/before.png";
import After from "@/public/after.png";

function ImageSlider({ leftImage = Before, rightImage = After }) {
  return (
    <div>
      <ReactCompareImage
        leftImage={leftImage.src}
        rightImage={rightImage.src}
        sliderLineWidth={5}
        sliderLineColor="#F7EEDA"
      />
    </div>
  );
}

export default ImageSlider;
