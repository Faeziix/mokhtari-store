"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import CartButton from "./CartIcon";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
import CloseCart from "../icons/CloseCart";

function CartModal({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  if (!cart.length) return <></>;

  return (
    <>
      <button onClick={openCart}>
        <CartButton />
      </button>

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
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">My Cart</p>

                <CloseCart />
              </div>

              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <CldImage
                      src={item.item.imageUrl}
                      alt={item.item.name}
                      width={64}
                      height={64}
                    />
                    <div>
                      <p className="text-lg font-semibold">{item.item.name}</p>
                      <p className="text-base font-normal">{item.item.brand}</p>
                    </div>
                  </div>

                  <div className="flex basis-1/4 items-center gap-2">
                    <p>{item.quantity}</p>
                    <p>x</p>
                    <p>{item.item.price} T</p>
                  </div>
                </div>
              ))}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default CartModal;
