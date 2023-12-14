import React from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="shopping-cart-item">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
