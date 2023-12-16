import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allProducts.length; index++) {
      cart[index] = 0;
    }
    return cart;
  };

  const getStoredCart = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  };

  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getStoredCart());

  useEffect(() => {
    // Fetch data from the API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const hardcodedPrice = 30; // Replace with your desired hardcoded price
        totalAmount += hardcodedPrice * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product: allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
