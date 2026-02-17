import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onRemove }) => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={onRemove} // pass the remove function
        />
      ))}
    </>
  );
};

export default ProductList;
