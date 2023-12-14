import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/products/${product.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
