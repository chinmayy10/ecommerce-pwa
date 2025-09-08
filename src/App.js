import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import './index.css';

function App() {
  const askPermission = async () => {
    if (!('Notification' in window)) return alert('Notifications not supported');
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      new Notification('Thanks!', { body: 'Notifications enabled' });
    } else {
      alert('Allow notifications to receive offers');
    }
  };

  return (
    <CartProvider>
      <div className="app">
        <header className="header">
          <h1>E-Shop — PWA</h1>
          <div>
            <button onClick={askPermission}>Enable Notifications</button>
          </div>
        </header>
        <main className="main">
          <ProductList />
          <Cart />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
