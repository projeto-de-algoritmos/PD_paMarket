import React from 'react';
import './styles.css';
import { FiShoppingCart, FiFilter } from 'react-icons/fi';

const Header = ({ filterVisible, onClick }) => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <FiShoppingCart size={26} color="#FFF" />
        <h1 className="header-title">paMarket</h1>
      </div>

      {filterVisible ? (
        <button className="header-filter" onClick={onClick}>
          <FiFilter size={26} color="#FFF" />
        </button>
      ) : null}
    </div>
  );
};

export default Header;
