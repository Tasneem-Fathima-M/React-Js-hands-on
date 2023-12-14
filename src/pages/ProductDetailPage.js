// pages/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from your JSON Server
    fetch(`http://localhost:3001/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ maxWidth: '300px', marginBottom: '10px', marginLeft: '37%' }}
          />
          <ProductDetail product={product} addToCart={addToCart} />
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
