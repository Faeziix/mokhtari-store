import React from "react";
import ServicesPic from "@/public/services.png";
import ServiceCard from "./ServiceCard";

const cards = [
  {
    title: "Special Skincare Package",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    pic: ServicesPic,
  },
  {
    title: "Special Skincare Package",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    pic: ServicesPic,
  },
  {
    title: "Special Skincare Package",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    pic: ServicesPic,
  },
];

function ServiceCards() {
  return (
    <div className="flex flex-col gap-3">
      {cards.map((card, i) => (
        <ServiceCard key={i} {...card} />
      ))}
    </div>
  );
}

export default ServiceCards;
