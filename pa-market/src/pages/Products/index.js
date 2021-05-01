import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import ResultCard from '../../components/ResultCard';
import { products } from '../../data/products.js';

const Products = () => {
  return (
    <div className="products-container">
      <Header />
      <div className="products-content">
        <div className="products-list">
          {products.map((product) => (
            <ProductCard />
          ))}
        </div>

        <div className="products-resume">
          <ResultCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
