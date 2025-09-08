import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD', item: product });
    if (window.Notification && Notification.permission === "granted") {
      new Notification('Added to cart', { body: `${product.name} added to cart` });
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}
