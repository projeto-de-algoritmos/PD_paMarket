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
          <p className="home-description">
            Não sabe o que comprar com o dinheiro que você tem disponível? Nós
            fazemos isso para você! Basta nos informa quanto que você pretende
            gastar com suas compras!
          </p>

          <Link className="home-button" to="/products">
            <h1 className="home-button-title">Ver produtos</h1>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
