import React from 'react';
import './styles.css';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="header-container">
      <FiShoppingCart size={26} color="#FFF" />
      <h1 className="header-title">paMarket</h1>
    </div>
  );
};

export default Header;
