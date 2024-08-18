import React, { useState, useEffect } from "react";
import CartProducts from "../Component/CartProducts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const [total, setTotal] = useState(0);
  const products = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const calculateTotal = () => {
    let temp = 0;
    products.map((product) => {
      temp += product.quantity * product.price;
    });
    return temp;
  };

  useEffect(() => {
    setTotal(calculateTotal);
    window.scrollTo(0,0);
  }, [products]);
  
  return (
    <div className="mt-10 bg-gray-100 min-h-screen py-10 px-5">
      <div className="flex justify-between">
        <h1 className="relative lg:text-3xl font-bold text-gray-900 mb-10 lg:left-60">
          D-CART
        </h1>
        <h1 className="lg:text-3xl font-bold text-gray-900 mb-10 relative lg:right-36">
          Total-${total.toFixed(2)}
        </h1>
      </div>

      <div className="flex flex-col">
        {products.map((product, index) => (
          <CartProducts key={index} product={product} />
        ))}
      </div>
      <div className="flex justify-end">
        <button
          className="flex bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition-colors text-md"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
