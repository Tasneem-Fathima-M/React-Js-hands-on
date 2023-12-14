import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

const ShoppingCartPage = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Shopping Cart Page</h1>
      {cart.length > 0 ? (
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCartPage;
