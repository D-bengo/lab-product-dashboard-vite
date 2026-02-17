import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  // Check if list is empty or undefined
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
};

export default ProductList;
