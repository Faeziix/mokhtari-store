import React from "react";
import Cart from "../cart";

function Header() {
  return (
    <div className="flex py-4 items-center justify-between border-b px-5">
      <h1 className="m-0">Logo</h1>
      <Cart />
    </div>
  );
}

export default Header;
