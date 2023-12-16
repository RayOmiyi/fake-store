import React, { useState, useEffect } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
 fetch("https://fakestoreapi.com/products/categories")
   .then((res) => res.json())
   .then((categories) => {
     // Log the categories to the console
     console.log("Categories:", categories);
     // For simplicity, let's choose the first category
     const selectedCategory = categories[0];
     // Update state with the categories
     setCategories(categories);
     // Step 2: Fetch products of the selected category
     fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
       .then((res) => res.json())
       .then((products) => setRelatedProducts(products));
   });
  }, []); 

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.slice(0,4).map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.title}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
