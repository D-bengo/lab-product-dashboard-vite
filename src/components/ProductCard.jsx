import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div
      className={
        product.inStock ? styles.card : styles.outOfStock
      }
      data-testid="product-card"
    >
      <h2>{product.name}</h2>

      <p>Price: {product.price}</p>

      {product.inStock ? (
        <p>In Stock</p>
      ) : (
        <p>Out of Stock</p>
      )}
    </div>
  );
};

export default ProductCard;
