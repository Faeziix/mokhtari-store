import React from "react";
import ServiceCards from "./ServiceCards";
import styles from "./services.module.scss";

function Services() {
  return (
    <div>
      <h1 className="">We Find a Special Way to Your Shiny Skin</h1>
      <p className="mb-4">
        All works are made with Spain's Anubis brand, Germany's Jannssen,
        Arcana; Poland, Klapp Germany, Forever America, Fiderm Turkey and
        Italian products.
      </p>

      <div className="">
        <div className="mb-4">
          <ServiceCards />
        </div>
        <button className={`${styles.button} font-bold w-full`}>
          See All Services
        </button>
      </div>
    </div>
  );
}

export default Services;
