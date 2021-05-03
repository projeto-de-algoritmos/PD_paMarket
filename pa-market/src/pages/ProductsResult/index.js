import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { formatPrice } from '../../utils/formatPrice.js';

const ProductsResult = () => {
  const productsList = JSON.parse(localStorage.getItem('@PA:productsList'));
  const productsAmount = JSON.parse(localStorage.getItem('@PA:productsAmount'));
  const balance = parseFloat(localStorage.getItem('@PA:clientValue'));

  return (
    <div className="products-list-container">
      <Header />
      <div className="products-list-content">
        <div className="products-list-resume-header">
          <h1 className="products-list-resume-title">
            Confira a melhor lista para a sua compra
          </h1>

          <div className="products-list-resume">
            <div className="products-list-resume-description">
              <h2 className="products-list-resume-description-title">
                Total de produtos:
              </h2>
              <h2 className="products-list-resume-description-value">
                {productsList.length}
              </h2>
            </div>

            <div className="products-list-resume-description">
              <h2 className="products-list-resume-description-title">
                Seu saldo inicial:
              </h2>
              <h2 className="products-list-resume-description-value">
                {formatPrice(balance)}
              </h2>
            </div>

            <div className="products-list-resume-description">
              <h2 className="products-list-resume-description-title">
                Valor total da compra:
              </h2>
              <h2 className="products-list-resume-description-value">
                {formatPrice(productsAmount)}
              </h2>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="products-list-items">
          {productsList.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsResult;
