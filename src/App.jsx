import React, { useState } from "react";
import ProductList from "./components/ProductList";
import productData from "./db.json";

const App = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "inStock"
      ? productData.products.filter((p) => p.inStock)
      : filter === "outOfStock"
      ? productData.products.filter((p) => !p.inStock)
      : productData.products;

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("inStock")}>In Stock</button>
      <button onClick={() => setFilter("outOfStock")}>
        Out of Stock
      </button>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
