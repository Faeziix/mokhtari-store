import React from "react";
import Cart from "../cart";
import CartButton from "../cart/CartIcon";

function Header() {
  return (
    <div className="flex py-4 items-center justify-between border-b px-5">
      <div className="bg-gray-300 w-10 h-10"></div>
      <h1 className="m-0">Logo</h1>

      <Cart />
    </div>
  );
}

export default Header;
