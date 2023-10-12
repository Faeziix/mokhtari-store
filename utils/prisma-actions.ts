import { PrismaClient } from "@prisma/client";
import { transformCart } from ".";
import axios from "axios";

const prisma = new PrismaClient();

export async function getItems() {
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
  return products.data;
}

export async function getCart(cartId: string | undefined) {
  // let cart = await axios.get("http://127.0.0.1:1337/api/product-cart");
  // console.log("cart", cart.data);

  return [];
}

// export async function getCart(cartId: string | undefined) {
//   let cart = await prisma.cartItem.findMany({
//     where: {
//       session: {
//         sessionId: cartId,
//       },
//     },
//   });

//   return transformCart(cart);
// }

export function createCart() {
  return prisma.session.create({
    data: {
      sessionId: Math.random().toString(36).substring(7),
    },
  });
}

export async function addToCart(cartId: string, item) {
  console.log("addToCart", item);
  let cartItem;
  try {
    cartItem = await prisma.cartItem.findFirst({
      where: {
        session: {
          sessionId: cartId,
        },
        item: {
          id: item.id,
        },
      },
    });
    console.log("first", cartItem);
  } catch (e) {
    console.log(e);
  }

  if (cartItem) {
    cartItem = await prisma.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        quantity: cartItem.quantity + 1,
      },
    });
  } else {
    console.log("creating");
    let createdItem = await prisma.cartItem.create({
      data: {
        item: {
          connectOrCreate: {
            where: {
              id: item.id,
            },
            create: {
              id: item.id,
              name: item.attributes.name,
              brand: item.attributes.brand,
              // imageUrl: item.attributes.imageUrl,
              price: item.attributes.price,
            },
          },
        },
        quantity: 1,
        session: {
          create: {
            sessionId: cartId,
          },
        },
        // session: {
        //   connect: {
        //     sessionId: cartId,
        //   },
        // },
      },
    });
    console.log("created", createdItem);
  }
  return cartItem;
}

export async function removeFromCart(cartId: string, productId: number) {
  await prisma.cartItem.delete({
    where: {
      session: {
        sessionId: cartId,
      },
      item: {
        id: productId,
      },
    },
  });
}
