import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cart";
import toast from "react-hot-toast";

function CartProducts({ product }) {
  const { title, price, image, quantity } = product;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
    toast.success("Removed");
  };
  useEffect(() => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: count,
      })
    );
  }, [count]);
  return (
    <div className="w-full mx-auto my-4 flex flex-col md:flex-row justify-center">
      <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-300 rounded-xl overflow-hidden items-center md:items-start justify-between h-auto md:h-60 w-full md:w-2/3 p-4 space-y-4 md:space-y-0 md:space-x-4 hover:scale-105 hover:shadow-sm transition-transform transform">
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
          <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-200 px-2 py-1 rounded"
                onClick={() => setCount((prev) => prev - 1)}
                disabled={count <= 1}
              >
                -
              </button>
              <p className="font-semibold md:text-sm">{count}</p>
              <button
                className="bg-gray-200 px-2 py-1 rounded"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <p className="font-semibold md:text-sm">
              Price: ${price * quantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
