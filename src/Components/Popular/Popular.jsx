import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./Popular.css";

const Popular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []); 
  return (
    <div className="popular">
      <h1>POPULAR </h1>
      <hr />
      <div className="popular-item">
        {products.slice(0, 4).map((product, i) => (
          <Item
            key={i}
            id={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
