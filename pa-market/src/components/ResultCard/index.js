import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ResultCard = () => {
  return (
    <div className="result-container">
      <div className="result-quantity">
        <h1>Produtos em estoque:</h1>
        <h1>XX</h1>
      </div>

      <h1>Digite seu valor:</h1>
      <input className="result-input" placeholder="R$ 1000" />

      <Link className="result-button" to="/">
        <h1 className="result-button-title">Calcular melhor compra</h1>
      </Link>
    </div>
  );
};

export default ResultCard;
