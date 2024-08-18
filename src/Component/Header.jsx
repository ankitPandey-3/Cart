import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/iconCart.png";
import { useSelector } from "react-redux";
function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    setQuantity(cartItems.length);
  }, [cartItems]);

  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 border-red-600 border-2">
      <div className="bg-red-500 px-4 lg:px-6 py-2.5 text-white  flex justify-between">
        <div className="h-max w-max bg-red-500 order-1 text-yellow-400 text-center text-4xl font-extrabold font-mono">
          <Link to="/">D-CART</Link>
        </div>
        <div className="w-10 h-10rounded-full flex justify-center items-center relative order-2">
          <Link to="/cart-list">
            <img src={iconCart} alt="" className="w-10" />
            <span
              className="absolute top-1/2 right-1/2 bg-yellow-500 text-white text-sm
            w-6 h-6 rounded-full flex justify-center items-center"
            >
              {quantity}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
