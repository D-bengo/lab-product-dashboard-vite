import React, { useState } from "react";
import ProductList from "./components/ProductList";
import productData from "./db.json";


const App = () => {
  // Manage products in state so we can remove them
  const [products, setProducts] = useState(productData.products);

  // Filter state
  const [filter, setFilter] = useState("all");

  // Function to remove a product by id
  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Filter products based on availability
  const filteredProducts =
    filter === "inStock"
      ? products.filter((p) => p.inStock)
      : filter === "outOfStock"
      ? products.filter((p) => !p.inStock)
      : products;

  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* Filter buttons */}
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("inStock")}>In Stock</button>
      <button onClick={() => setFilter("outOfStock")}>Out of Stock</button>

      {/* Render product list and pass remove function */}
      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;
