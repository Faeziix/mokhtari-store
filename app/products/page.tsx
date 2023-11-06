import Product from "@/components/products/Product";
import React from "react";
import ProductPic from "@/public/product-pic.jpg";
import FilterSidebar from "@/components/products/FilterSidebar";
import SearchInput from "@/components/products/SearchInput";

const products = [
  {
    id: 1,
    name: "Triglyceride",
    brand: "Brand 1",
    description: "Strenghthes your skin,Whiter skin, Healthier skin",
    tags: [],
    price: 100,
    picture: ProductPic,
  },
  {
    id: 2,
    name: "Product 2",
    tags: ["All skin types", "Sensitive skin"],
    brand: "Brand 2",
    description: "Description 2",
    price: 10000,
    picture: ProductPic,
  },
  {
    id: 3,
    name: "Product 3",
    brand: "Brand 3",
    description: "Description 3",
    tags: ["All skin types"],
    price: 10000,
    picture: ProductPic,
  },
  {
    id: 4,
    name: "Product 4",
    brand: "Brand 4",
    description: "Description 4",
    tags: [],
    price: 100,
    picture: ProductPic,
  },
];

async function Page() {
  return (
    <div className="w-full px-5">
      <div className="mb-4">
        <SearchInput />
      </div>
      <div className="mb-10">
        <p className="font-light text-sm">
          Home Page / Products / Best Sellers
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-4xl">
          <span className="font-bold">Best Sellers</span>
        </h1>
        <h2 className="text-sm font-extralight">
          Elavate your beauty routine with our all-time fan favorites.
        </h2>
      </div>
      <div className="relative grid md:grid-cols-[15rem_1fr] grid-cols-1">
        <div className="md:sticky top-0 md:h-screen overflow-y-auto">
          <FilterSidebar />
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            {products.map((item) => (
              <div key={item.id} className="h-full w-full">
                <Product key={item.id} data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
