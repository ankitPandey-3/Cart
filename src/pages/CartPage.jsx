import React, { useState, useEffect } from "react";
import CartProducts from "../Component/CartProducts";
import { useSelector } from "react-redux";
import axios from "axios";
function CartPage() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((store) => store.cart);

  const calculateTotal = () => {
    let temp = 0;
    products.map((product) => {
      temp += product.quantity * product.price;
    });
    return temp;
  };

  useEffect(() => {
    setProducts(cartItems);
    setTotal(calculateTotal);
  }, [products, cartItems]);
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
    </div>
  );
}

export default CartPage;
