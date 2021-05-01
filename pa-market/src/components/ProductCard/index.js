import React from 'react';
import './styles.css';

const ProductCard = () => {
  return (
    <div className="product-container">
      <div className="product-image-container">
        <h1>Imagem</h1>
      </div>

      <div className="product-info">
        <h1 className="product-title">Nome</h1>
        <h2 className="product-price">R$ 200,00</h2>
      </div>
    </div>
  );
};

export default ProductCard;
