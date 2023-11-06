import React from "react";
import WhyUsCard from "./WhyUsCard";

const cards = [
  {
    title: "State of the art Equipment",
    direction: 1,
  },
  {
    title: "Cleansiness",
    direction: 2,
  },
  {
    title: "Experienced Staff",
    direction: 3,
  },
];

function WhyUsGrid() {
  return (
    <div className="grid-cols-1 grid gap-2">
      {cards.map((card) => (
        <WhyUsCard
          key={card.title}
          title={card.title}
          direction={card.direction}
        />
      ))}
    </div>
  );
}

export default WhyUsGrid;
