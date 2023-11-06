"use server";

import { addToCart, createCart, getCart } from "@/utils/prisma-actions";
import { cookies } from "next/headers";

export const addItem = async (item): Promise<String | undefined> => {
  let cartId = cookies().get("cartId")?.value;
  let cart;

  if (cartId) {
    console.log("getting");
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.sessionId;
    cookies().set("cartId", cartId);
  }

  if (!item.id) {
    return "Missing product ID";
  }

  try {
    console.log("adding");
    await addToCart(cartId, item);
  } catch (e) {
    return "Error adding item to cart";
  }
};

export const removeItem = async (
  lineId: string
): Promise<String | undefined> => {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }
  try {
    await removeFromCart(cartId, [lineId]);
  } catch (e) {
    return "Error removing item from cart";
  }
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity,
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<String | undefined> => {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }
  try {
    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
      },
    ]);
  } catch (e) {
    return "Error updating item quantity";
  }
};
