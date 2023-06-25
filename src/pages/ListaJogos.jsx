import React, { useState } from 'react';
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import './ListaJogos.css';
import { imagens } from '../components/Imagens';

function ListaJogos() {
  const cardsPerPage = 21; // Quantidade de cards por página
  const [currentPage, setCurrentPage] = useState(1);
  const { userId } = useContext(UserContext) // Estado para verificar se o usuário está logado

  const cards = [
    { image: imagens.forza, alt:"Forza", id: 0, title: 'titulo jogo', description: 'Some quick example text 1' },
    { image: imagens.forza2, alt:"Forza2",  id: 1, title: 'FORZAA', description: 'Some quick  1' },
    { image: imagens.st, alt:"ST", id: 2, title: 'FIFAAAA', description: 'Some quick  1' },
    { image: imagens.st2, alt:"ST2", id: 3, title: 'GTA V FODA D+', description: 'Some quick  1' },
    { image: imagens.valorant, alt:"valorant", id: 4, title: 'vava', description: 'Some quick  1' },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleButtonClick = () => {
    if (userId !== null) {
      // O usuário está logado, prossiga 
    } else {
      // O usuário não está logado, exiba a mensagem de login
      window.alert('Por favor, faça login para continuar');
    }
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
          <Card.Text>{card.description}</Card.Text>
          <Link to={`/jogo/${startIndex + index}`}>
            {userId !== null ? (
              <button onClick={() => handleButtonClick()}>Go!</button>
            ) : (
              <button disabled>Go!</button>
            )}
          </Link>
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
      <Pagination className="pagination">{renderPaginationItems()}</Pagination>
      <div className="column">
        <div className="cards-container">{renderCards()}</div>
      </div>
      <Pagination className="pagination">{renderPaginationItems()}</Pagination>
    </div>
  );
}

export default ListaJogos;
