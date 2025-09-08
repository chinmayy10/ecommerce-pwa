import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, dispatch } = useCart();

  const remove = (id) => dispatch({ type: 'REMOVE', id });

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 ? <p>Empty</p> : cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => remove(item.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>}
    </div>
  );
}
