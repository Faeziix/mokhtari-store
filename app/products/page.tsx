import Product from "@/components/products/Product";
import axios from "axios";
import Image from "next/image";
import React from "react";
import FilterSidebar from "./FilterSidebar";

async function Page() {
  const products = await axios.get("http://127.0.0.1:1337/api/products", {
    params: {
      populate: "*",
    },
  });
  console.log(products.data.data);
  return (
    <div className="w-full">
      <div className="relative grid grid-cols-[15rem_1fr]">
        <div className="sticky top-0 h-screen overflow-y-auto">
          <FilterSidebar />
        </div>
        <div className="px-4">
          <h1 className="px-4 mt-4">Products</h1>
          <div className="flex flex-wrap gap-8 items-center w-full">
            {products.data.data.map((item) => (
              <>
                <Product key={item.id} data={item} />
                <Product key={item.id} data={item} />
                <Product key={item.id} data={item} />
                <Product key={item.id} data={item} />
                <Product key={item.id} data={item} />
                <Product key={item.id} data={item} />
                <Product key={item.id} data={item} />
                <Product key={item.id} data={item} />
                <Product key={item.id} data={item} />
                <Product key={item.id} data={item} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
