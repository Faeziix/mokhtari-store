"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import CartButton from "./CartIcon";
import { Dialog, Transition } from "@headlessui/react";
import { CldImage } from "next-cloudinary";
import CloseCart from "../icons/CloseCart";
import { useCartStore } from "@/stores/cart-store";
import Image from "next/image";

function CartModal() {
  const { cart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  // const quantityRef = useRef(cart?.totalQuantity);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  // useEffect(() => {
  //   // Open cart modal when quantity changes.
  //   if (cart?.totalQuantity !== quantityRef.current) {
  //     // But only if it's not already open (quantity also changes when editing items in cart).
  //     if (!isOpen) {
  //       setIsOpen(true);
  //     }
  //
  //     // Always update the quantity reference
  //     quantityRef.current = cart?.totalQuantity;
  //   }
  // }, [isOpen, cart?.totalQuantity, quantityRef]);

  // if (!cart.length) return <></>;

  return (
    <>
      <button onClick={openCart}>
        <CartButton />
        {/* {cart.length} */}
      </button>

      <div className="fixed">
        <Transition show={isOpen}>
          <Dialog onClose={closeCart} className="relative z-50">
            <Transition.Child
              as={Fragment}
              enter="transition-all ease-in-out duration-300"
              enterFrom="opacity-0 backdrop-blur-none"
              enterTo="opacity-100 backdrop-blur-[.5px]"
              leave="transition-all ease-in-out duration-200"
              leaveFrom="opacity-100 backdrop-blur-[.5px]"
              leaveTo="opacity-0 backdrop-blur-none"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition-all ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition-all ease-in-out duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[500px]">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">My Cart</p>

                  <CloseCart onClick={closeCart} />
                </div>

                {cart?.map((item) => {
                  const {
                    id,
                    name,
                    brand,
                    description,
                    price,
                    picture,
                    quantity,
                  } = item.attributes;

                  return (
                    <div
                      key={id}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={
                            "http://127.0.0.1:1337" +
                            picture.data[0].attributes.url
                          }
                          alt={name}
                          width={64}
                          height={64}
                        />
                        <div>
                          <p className="font-semibold">{name}</p>
                          <p className="font-normal">{brand}</p>
                        </div>
                      </div>

                      <div className="flex basis-1/4 items-center gap-2">
                        <p>{quantity}</p>
                        <p>x</p>
                        <p>{price} T</p>
                      </div>
                    </div>
                  );
                })}
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

export default CartModal;
