import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = ({ product, addToCart }) => {
  return (
    <div className="product-detail">
      <h2>Product Detail</h2>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
