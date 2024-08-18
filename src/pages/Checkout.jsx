import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Checkout() {
  const products = useSelector((state) => state.cart.items);
  const [total, setTotal] = useState(0);
  const calculateTotal = () => {
    let temp = 0;
    products.map((product) => {
      temp += product.quantity * product.price;
    });
    return temp;
  };
  useEffect(() => {
    setTotal(calculateTotal);
  }, [products]);
  return (
    <div className="mt-10 bg-gray-100 min-h-screen py-10 px-5">
      <div className="flex justify-between">
        <h1 className="relative lg:text-3xl font-bold text-gray-900 mb-10  order-1">
          CHECKOUT
        </h1>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left text-xs md:text-sm lg:text-base">
                  S No
                </th>
                <th className="p-2 text-left text-xs md:text-sm lg:text-base">
                  Image
                </th>
                <th className="p-2 text-left text-xs md:text-sm lg:text-base">
                  Title
                </th>
                <th className="p-2 text-left text-xs md:text-sm lg:text-base">
                  Quantity
                </th>
                <th className="p-2 text-left text-xs md:text-sm lg:text-base">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2 text-xs md:text-sm lg:text-base">
                    {index + 1}
                  </td>
                  <td className="p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
                    />
                  </td>
                  <td className="p-2 text-xs md:text-sm lg:text-base">
                    {item.title}
                  </td>
                  <td className="p-2 text-xs md:text-sm lg:text-base">
                    {item.quantity}
                  </td>
                  <td className="p-2 text-xs md:text-sm lg:text-base">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-4">
          Total: ${total.toFixed(2)}
        </h3>
      </div>

      <div className="flex justify-end">
        <button
          className="flex bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition-colors text-md"
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default Checkout;
