import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")  // API call to the backend
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
