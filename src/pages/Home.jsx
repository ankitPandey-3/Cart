import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Component/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="mt-10 bg-gray-100 min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
        D-CART
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
