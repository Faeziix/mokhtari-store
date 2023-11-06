import Product from "@/components/products/Product";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { getCart, getItems } from "@/utils/prisma-actions";
import ProductPic from "@/public/product-pic.jpg";
import axios from "axios";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Product 1",
    brand: "Brand 1",
    description: "Description 1",
    price: 100,
    picture: ProductPic,
  },
];

const prisma = new PrismaClient();

export default async function Home() {
  // let cartId = cookies().get("cartId")?.value;

  // let products = await axios.get("http://127.0.0.1:1337/api/products", {
  //   params: {
  //     populate: {
  //       picture: {
  //         fields: ["url"],
  //       },
  //     },
  //   },
  //   // headers: {
  //   //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_APIKEY}`,
  //   // },
  // });

  // const items = await getItems();
  // const cartItems = await getCart(cartId);

  return (
    <div className="mx-5">
      <Link href="/products">
        <button>
          <h1 className="text-3xl font-bold">Products</h1>
        </button>
      </Link>
    </div>
  );
}
