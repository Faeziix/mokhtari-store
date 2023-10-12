"use client";
import React from "react";
import { addItem } from "../cart/actions";
import type { Item as Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type ItemProps = {
  data: Product;
};

function Product({ data }: ItemProps) {
  const { id, name, brand, description, price, picture } = data.attributes;
  const router = useRouter();

  function onClick() {
    addItem(data);
    router.refresh();
  }

  return (
    <div className="text-left rounded-md p-4 max-w-[300px] w-full flex flex-col gap-4 justify-between shadow-[rgba(149,157,165,0.2)_0px_4px_24px]">
      <div className=" flex flex-col gap-2 w-full">
        <Link className="w-full" href="#">
          <div className="mx-auto">
            <Image
              src={"http://127.0.0.1:1337" + picture.data[0].attributes.url}
              width={250}
              height={250}
              alt={name}
              className="object-contain max-h-48 mx-auto w-fit"
            />
          </div>
          <div>
            <h4 className="text-sm mb-0 ">{name}</h4>
            <p className="text-sm">{description}</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <p>
          {Number(price).toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}{" "}
          T
        </p>
        {/* <button */}
        {/*   onClick={onClick} */}
        {/*   className="border font-bold px-2 py-2 rounded" */}
        {/* > */}
        {/*   Add to cart */}
        {/* </button> */}
      </div>
    </div>
  );
}

export default Product;
