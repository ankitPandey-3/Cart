import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart";
import { ShoppingCart, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const { title, price, image, description, id } = product;
  const cartItems = useSelector((store) => store.cart.items);
  const isInCart = cartItems.some((item) => item.id === id);
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("Added");
  };

  const handleRemovingFromCart = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
    toast.success("Removed");
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img
          className="w-full h-48 object-contain p-2"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-lg text-gray-800">${price}</span>
          {isInCart ? (
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
              onClick={handleRemovingFromCart}
            >
              <Trash2 />
            </button>
          ) : (
            <button
              className="flex bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition-colors text-sm"
              onClick={handleAddToCart}
            >
              <ShoppingCart />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
