import React from "react";
import ServicesPic from "@/public/services.png";
import Image from "next/image";
import pic1 from "@/public/before-after/pic1.png";
import pic2 from "@/public/before-after/pic2.png";
import pic3 from "@/public/before-after/pic3.png";
import pic4 from "@/public/before-after/pic4.png";
import pic5 from "@/public/before-after/pic5.png";

const images = [pic1, pic2, pic3, pic4, pic5];

function BeforeAfterSelector() {
  return (
    <div className="flex gap-2 justify-center">
      {images.map((image, i) => (
        <div key={i}>
          <Image src={image} alt="service" className="w-10 h-10 rounded-md" />
        </div>
      ))}
    </div>
  );
}

export default BeforeAfterSelector;
