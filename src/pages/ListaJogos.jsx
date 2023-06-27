import React, { useState,useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import './ListaJogos.css';
import { imagens } from '../components/Imagens';

function ListaJogos() {
  const cardsPerPage = 21; // Quantidade de cards por página
  const [currentPage, setCurrentPage] = useState(1);
  const { userId } = useContext(UserContext); // Estado para verificar se o usuário está logado

  const handleGoButtonClick = () => {
    window.alert("Disponivel somente para usuarios registrados, realize login ou cadastre-se para continuar!");
  }

  const cards = [
    { image: imagens.forza, alt: 'Forza', id: 0, title: 'Título do jogo', description: 'Algum texto de exemplo 1' },
    { image: imagens.forza2, alt: 'Forza2', id: 1, title: 'FORZAA', description: 'Algum texto rápido 1' },
    { image: imagens.st, alt: 'ST', id: 2, title: 'FIFAAAA', description: 'Algum texto rápido 1' },
    { image: imagens.st2, alt: 'ST2', id: 3, title: 'GTA V FODA D+', description: 'Algum texto rápido 1' },
    { image: imagens.valorant, alt: 'valorant', id: 4, title: 'vava', description: 'Algum texto rápido 1' },
  ];

  const handlePageChange = (pageNumber) => {      //volta para o topo da pagina quando clicar em uma pagina 
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
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
          {userId !== null ? (
            
            <Link to={`/jogo/${startIndex + index}`}>
              <button>Ir!</button>
            </Link>
          ) : (
            <button onClick={handleGoButtonClick}>Requer login</button>
          )}
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
