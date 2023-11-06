import React from "react";
import HeroPic from "@/public/hero-pic.png";
import Image from "next/image";
import styles from "./style.module.scss";

function Hero() {
  return (
    <div className="">
      <div
        style={{
          background: "linear-gradient(180deg, #fef8f5 0%, #e49975 86.83%)",
        }}
        className="flex mb-6 flex-col justify-center items-center gap-6 pt-5"
      >
        <h1 className="text-[#6a4233] font-extrabold text-3xl text-center">
          We make your skin shine
        </h1>
        <Image src={HeroPic} alt="hero" />
      </div>

      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
      </p>

      <div className="flex justify-center items-center gap-4 px-5">
        <button className="w-full bg-gray-300 py-2">free consultation</button>
        <button className="w-full bg-gray-300 py-2">Our Store</button>
      </div>
    </div>
  );
}

export default Hero;
