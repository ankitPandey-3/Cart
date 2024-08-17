import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cart";
import toast from "react-hot-toast";

function CartProducts({ product }) {
  const { title, price, image, quantity } = product;
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
    toast.success("Removed");
  };
  const hadleChangeQuantity = (e) => {
    e.preventDefault();
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: e.target.value,
      })
    );
  };
  return (
    <div className="w-full mx-auto my-4 flex flex-col md:flex-row justify-center hover:scale-105 hover:shadow-sm transition-transform transform">
      <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-300 rounded-xl overflow-hidden items-center md:items-start justify-between h-auto md:h-60 w-full md:w-2/3 p-4 space-y-4 md:space-y-0 md:space-x-4">
        {/* Image Section */}
        <div className="w-full md:w-1/4 h-48 md:h-full flex-shrink-0">
          <img
            className="w-full h-full object-contain"
            loading="lazy"
            src={image}
            alt={title}
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between w-full md:w-3/4 h-full ">
          {/* Title and Remove Button */}
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">{title}</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-full p-2 transition-colors md:mr-5"
              onClick={handleRemove}
            >
              <Trash2 size={20} />
            </button>
          </div>

          {/* Price and Quantity */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="font-semibold md:text-sm">Quantity: {quantity}</p>
            <input
              type="range"
              name="quantity"
              min="1"
              max="10"
              className="flex-1 cursor-pointer"
              value={quantity}
              onChange={hadleChangeQuantity}
            />
            <p className="font-semibold md:text-sm">Price: ${price * quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
