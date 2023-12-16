import React, { useEffect, useState } from 'react'
import "./NewCollection.css";
import Item from "../Item/Item";

const NewCollection = () => {
 const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []); 
  return (
    <div className="popular">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="popular-item">
        {products.slice(0, 8).map((product, i) => (
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


export default NewCollection
