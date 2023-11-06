import React from "react";
import WhyUsPic from "@/public/why-us.png";
import Image from "next/image";

type WhyUsCardProps = {
  title: string;
  direction: number;
};

function WhyUsCard({ title, direction }: WhyUsCardProps) {
  return (
    <div
      style={{
        flexDirection: direction % 2 === 0 ? "row" : "row-reverse",
      }}
      className="flex gap-2"
    >
      <div className="rounded-lg bg-gray-300 flex items-center justify-center w-full">
        <h2 className="text-xl text-center">{title}</h2>
      </div>
      <div className="rounded-lg w-full">
        <Image src={WhyUsPic} alt="why-us" className="w-full" />
      </div>
    </div>
  );
}

export default WhyUsCard;
