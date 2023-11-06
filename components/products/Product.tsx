"use client";
import React from "react";
import { addItem } from "../cart/actions";
import type { Item as Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/stores/cart-store";
import Tags from "./Tags";

type ItemProps = {
  data: {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    // image url
    picture: string;
    tags: string[];
  };
};

function Product({ data }: ItemProps) {
  const { addToCart, cart } = useCartStore();
  const { name, description, price, tags } = data;

  const router = useRouter();

  function onClick() {
    addItem(data);
    router.refresh();
  }

  return (
    <div className="text-left h-full rounded-md p-4 md:max-w-[300px] w-full flex flex-col gap-4 justify-between shadow-[rgba(149,157,165,0.2)_0px_4px_24px]">
      <div className=" flex flex-col gap-2 w-full">
        <Link className="w-full" href="#">
          <div className="mx-auto">
            <Image
              src={data.picture}
              width={250}
              height={250}
              alt={name}
              className="object-contain max-h-48 mx-auto w-fit"
            />
          </div>
          <div>
            <h3 className="text-base mb-1">{name}</h3>
            <div className="mb-1">
              <Tags tags={tags} />
            </div>
            <p className="text-xxs">{description}</p>
          </div>
        </Link>
      </div>

      <div>
        <div className="flex text-[8px] justify-center items-center mb-4 gap-1 text-center">
          <div className="bg-black text-white px-1 py-1 ">100ml</div>
          <div className="px-1 py-1 border border-black  border-solid">
            100ml
          </div>
          <div className="px-1 py-1 border border-black  border-solid">
            100ml
          </div>
        </div>
        <button
          onClick={() => addToCart(data)}
          className="bg-gray-300 py-2 w-full"
        >
          <span className="font-bold text-sm">ADD TO BAG</span>
          <div className="flex flex-col gap-2 ">
            <p className="text-xs">
              {Number(price).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}{" "}
              T
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Product;
