import type { CartItem } from "@prisma/client";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function transformCart(cart: CartItem[]) {
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.item.price * item.quantity,
    0
  );
  return { items: cart, totalQuantity, totalPrice };
}

/* -------------- Tailwind -------------------- */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
