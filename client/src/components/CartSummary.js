import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { CartIcon } from "./Icons";

export default function CartSummary() {
  const { formattedTotalPrice, cartCount } = useShoppingCart()

  return (
    <>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <span className="mr-5 hover:text-white flex items-center">
          <CartIcon />
          <span className="ml-3">{formattedTotalPrice} ({cartCount})</span>
        </span>
      </nav>
    </>
  );
}
