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
      <h1>Products</h1>

      <div className="grid grid-cols-4 gap-2">
        {products.data.data.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
