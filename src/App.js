import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Casual Shirt', price: 20, description: 'Casual Beige Solid Shirt - Mandy' },
    { id: 2, name: 'Formal Shirt', price: 30, description: 'Men White Classic Solid Formal Shirt' },
    { id: 3, name: 'Formal Shirt 1', price: 40, description: 'Men Blue Regular Fit Solid Sustainable Casual Denim Shirt' },
    { id: 4, name: 'HERE&NOW', price: 50, description: 'Men White & Red Slim Fit Checked Casual Shirt' },
    { id: 5, name: 'HIGHLANDER', price: 60, description: 'Men Blue & White Slim Fit Checked Cotton Linen Casual Shirt' },
    { id: 6, name: 'Roadster', price: 70, description: 'Men Black Pure Cotton Solid Sustainable Casual Shirt' },
    { id: 7, name: 'Temptech', price: 80, description: 'Formal White Solid Shirt - Antony' },
    { id: 8, name: 'Fitted poplin shirt', price: 90, description: 'Lyst - Polo Ralph Lauren Long Sleeve Linen Shirt in Orange for Men' },
    { id: 9, name: 'Formal Wine Striped Shirt', price: 100, description: 'Polo Ralph Lauren Casual shirts and button-up shirts for Men' },
    { id: 10, name: 'Casual Shirt 1', price: 110, description: 'Temptech Formal White Solid Shirt - Antony' },
    
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route
            path="/products/:id"
            element={<ProductDetailPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<ShoppingCartPage cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
