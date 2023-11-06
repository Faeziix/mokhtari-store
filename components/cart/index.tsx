import React from "react";
import CartModal from "./Modal";
import { cookies } from "next/headers";
import { getCart } from "@/utils/prisma-actions";

export default async function Cart() {
  let cartId = cookies().get("cartId")?.value;
  const cart = await getCart(cartId);

  return (
    <>
      {" "}
      <CartModal cart={cart} />
    </>
  );
}
