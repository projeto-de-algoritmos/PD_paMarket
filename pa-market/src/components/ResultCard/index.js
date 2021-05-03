import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ResultCard = ({ total, value, onChange, onClick }) => {
  return (
    <div className="result-container">
      <div className="result-quantity">
        <h1 className="result-quantity-title">Produtos em estoque:</h1>
        <h1 className="result-quantity-value">{total}</h1>
      </div>

      <h1 className="result-target-value">Digite seu valor:</h1>
      <input
        className="result-input"
        placeholder="R$ 1000"
        value={value}
        onChange={onChange}
      />

      <Link
        className={value ? 'result-button-active' : 'result-button-disable'}
        onClick={onClick}
        to={value ? '/products/result' : null}
      >
        <h1 className="result-button-title">Calcular melhor compra</h1>
      </Link>
    </div>
  );
};

export default ResultCard;
