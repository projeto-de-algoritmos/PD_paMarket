import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import LogoShop from '../../assets/logo-shop.svg';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <img className="home-image" src={LogoShop} alt="LogoShop" />

        <section className="home-instructions">
          <Link className="home-button" to="/products">
            <h1 className="home-button-title">Ver produtos</h1>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
