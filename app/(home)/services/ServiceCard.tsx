import React from "react";
import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  pic: StaticImageData;
};

function ServiceCard({ title, description, pic }: ServiceCardProps) {
  return (
    <div className="px-3 py-4 flex flex-col gap-2 rounded-xl border border-secondary-500 shadow-[2px_2px] shadow-secondary-500">
      <Image src={pic} alt="service" className="rounded-xl w-full" />
      <div className="px-2">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
