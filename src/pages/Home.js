import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Welcome to our E-Commerce Store</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
