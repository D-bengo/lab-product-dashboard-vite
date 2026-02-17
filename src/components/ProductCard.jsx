import React from "react";
import "../styles/ProductCard.css"; // Import CSS file

const ProductCard = ({ product, onRemove }) => {
  return (
    <div
      className={product.inStock ? "productCard" : "outOfStockClass"}
      data-testid="product-card"
    >
      <h2>{product.name}</h2>

      <p>Price: {product.price}</p>

      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>

      {/* Remove button */}
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
