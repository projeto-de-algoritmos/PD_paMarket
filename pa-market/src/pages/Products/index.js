import React, { useState, useEffect } from 'react';
import './styles.css';
import Modal from 'react-modal';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import ResultCard from '../../components/ResultCard';
import { products } from '../../data/products.js';
import { mergeSort } from '../../dataStructure/mergeSort.js';
import { knapsack } from '../../dataStructure/knapsack.js';
import { formatPrice } from '../../utils/formatPrice.js';

const Products = () => {
  const [clientValue, setClientValue] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemsSorted, setItemsSorted] = useState(products);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="products-container">
      <Header filterVisible onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Ordenar por"
      >
        <div className="filter-button-container">
          <h2 className="filter-title">Escolha um Método de Ordenação</h2>

          <button
            className="filter-button"
            onClick={() => {
              setItemsSorted(products);
              closeModal();
            }}
          >
            <h3 className="modal-options">Todos os produtos</h3>
          </button>
          <button
            className="filter-button"
            onClick={() => {
              const response = mergeSort(products, 'price');
              setItemsSorted(response);
              closeModal();
            }}
          >
            <h3 className="modal-options">Menor preço</h3>
          </button>
        </div>
      </Modal>
      <div className="products-content">
        <div className="products-list">
          {itemsSorted.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={formatPrice(product.price)}
            />
          ))}
        </div>

        <div className="products-resume">
          <ResultCard
            total={products.length}
            value={clientValue}
            onChange={(event) => setClientValue(event.target.value)}
            onClick={() => {
              if (clientValue > 0) {
                const response = knapsack(products, clientValue);
                localStorage.setItem(
                  '@PA:productsList',
                  JSON.stringify(response.subset)
                );
                localStorage.setItem('@PA:productsAmount', response.maxValue);
                localStorage.setItem('@PA:clientValue', clientValue.toString());
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
