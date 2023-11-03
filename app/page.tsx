import Product from "@/components/products/Product";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { getCart, getItems } from "@/utils/prisma-actions";
import axios from "axios";

const prisma = new PrismaClient();

export default async function Home() {
  let cartId = cookies().get("cartId")?.value;

  let products = await axios.get("http://127.0.0.1:1337/api/products", {
    params: {
      populate: {
        picture: {
          fields: ["url"],
        },
      },
    },
    // headers: {
    //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_APIKEY}`,
    // },
  });

  const items = await getItems();
  const cartItems = await getCart(cartId);

  return (
    <div className="mx-5">
      <h1>Best Seller</h1>

      <p>Elavate your beauty routine with our all-time fan favorites.</p>

      <div className="flex gap-2 my-2">
        <button className="px-4 py-2">Sort by</button>
        <button className="px-4 py-2">Filter</button>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 justify-center gap-4">
        {products.data.data.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
