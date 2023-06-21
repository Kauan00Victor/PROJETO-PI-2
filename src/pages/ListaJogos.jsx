import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import './ListaJogos.css';

import forza from '../img/FORZA.jpg';
import forza1 from '../img/FORZA1.jpg';
import street from '../img/STREET.jpg';
import st from '../img/ST.jpg';
import VALORANT from '../img/VALORANT.jpg';

function ListaJogos() {
  const cardsPerPage = 9; // Quantidade de cards por página
  const [currentPage, setCurrentPage] = useState(1);
  const cards = [
    { image: forza, title: 'Card Title 1', text: 'Some quick example text 1' },
    { image: forza1, title: 'Card Title 2', text: 'Some quick example text 2' },
    { image: street, title: 'Card Title 3', text: 'Some quick example text 3' },
    { image: st, title: 'Card Title 4', text: 'Some quick example text 4' },
    { image: VALORANT, title: 'Card Title 5', text: 'Some quick example text 5' },
    { image: street, title: 'Card Title 6', text: 'Some quick example text 3' },
    { image: st, title: 'Card Title 7', text: 'Some quick example text 4' },
    { image: VALORANT, title: 'Card Title 8', text: 'Some quick example text 5' },
    { image: street, title: 'Card Title 9', text: 'Some quick example text 3' },
    { image: st, title: 'Card Title 10', text: 'Some quick example text 4' },
    { image: VALORANT, title: 'Card Title 11', text: 'Some quick example text 5' },
    { image: forza, title: 'Card Title 12', text: 'Some quick example text 1' },
    { image: forza1, title: 'Card Title 13', text: 'Some quick example text 2' },
    { image: street, title: 'Card Title 14', text: 'Some quick example text 3' },
    { image: st, title: 'Card Title 15', text: 'Some quick example text 4' },
    { image: VALORANT, title: 'Card Title 16', text: 'Some quick example text 5' },
    { image: street, title: 'Card Title 17', text: 'Some quick example text 3' },
    { image: st, title: 'Card Title 18', text: 'Some quick example text 4' },
    { image: VALORANT, title: 'Card Title 19', text: 'Some quick example text 5' },
    { image: street, title: 'Card Title 20', text: 'Some quick example text 3' },
    { image: st, title: 'Card Title 21', text: 'Some quick example text 4' },
    { image: VALORANT, title: 'Card Title 22', text: 'Some quick example text 5' },
    { image: forza, title: 'Card Title 23', text: 'Some quick example text 1' },
    { image: forza1, title: 'Card Title 24', text: 'Some quick example text 2' },
    { image: street, title: 'Card Title 25', text: 'Some quick example text 3' },
    { image: st, title: 'Card Title 26', text: 'Some quick example text 4' },
    { image: VALORANT, title: 'Card Title 27', text: 'Some quick example text 5' },
    { image: street, title: 'Card Title 28', text: 'Some quick example text 3' },
    { image: st, title: 'Card Title 29', text: 'Some quick example text 4' },
    { image: VALORANT, title: 'Card Title 30', text: 'Some quick example text 5' },
    { image: street, title: 'Card Title 31', text: 'Some quick example text 3' },
    { image: st, title: 'Card Title 32', text: 'Some quick example text 4' },
    { image: VALORANT, title: 'Card Title 33', text: 'Some quick example text 5' },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cards.slice(startIndex, endIndex);

    return currentCards.map((card, index) => (
      <Card className="Card" key={index}>
        <Card.Img src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <button>Go.</button>
        </Card.Body>
      </Card>
    ));
  };

  const renderPaginationItems = () => {
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const paginationItems = [];

    for (let number = 1; number <= totalPages; number++) {
      paginationItems.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return paginationItems;
  };

  return (
    <div className="container">
      <div className="column">
        <div className="cards-container">{renderCards()}</div>
      </div>
      <Pagination className="pagination">{renderPaginationItems()}</Pagination>
    </div>
  );
}

export default ListaJogos;
