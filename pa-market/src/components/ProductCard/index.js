import React from 'react';
import './styles.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          src={`/products/${image}`}
          alt="product"
        />
      </div>

      <div className="product-info">
        <h1 className="product-title">{name}</h1>
        <h2 className="product-price">{price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
