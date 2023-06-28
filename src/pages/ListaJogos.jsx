import React, { useState,useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import './ListaJogos.css';
import { imagens } from '../components/Imagens';

function ListaJogos() {
  const cardsPerPage = 6; // Quantidade de cards por página
  const [currentPage, setCurrentPage] = useState(1);
  const { userId } = useContext(UserContext); // Estado para verificar se o usuário está logado

  const handleGoButtonClick = () => {
    window.alert("Disponivel somente para usuarios registrados, realize login ou cadastre-se para continuar!");
  }

  const cards = [
    { image: imagens.gta, alt: 'gta', id: 0, title: 'GTA:', description: 'GTA, abreviação de Grand Theft Auto, é uma famosa série de jogos de mundo aberto desenvolvida pela Rockstar Games. Os jogos da série GTA são conhecidos por sua liberdade de exploração, narrativas envolventes e gameplay não linear. Os jogadores podem assumir o papel de personagens criminosos e mergulhar em vastas cidades virtuais, onde podem completar missões, realizar atividades paralelas, dirigir veículos, interagir com personagens e experimentar ação intensa.' },
    { image: imagens.forza2, alt: 'Forza2', id: 1, title: 'FORZA:', description: 'Forza é uma franquia de jogos de corrida exclusiva para os consoles Xbox. Com uma ênfase em gráficos realistas, jogabilidade envolvente e uma vasta coleção de carros licenciados, Forza permite que os jogadores experimentem a adrenalina e a emoção das corridas automobilísticas. Os jogos da série apresentam uma ampla variedade de modos de jogo, desde corridas de circuito até desafios de rally, e oferecem uma experiência completa de simulação de corrida.' },
    { image: imagens.fifa1, alt: 'fifa', id: 2, title: 'FIFA:', description: 'FIFA é uma popular série de jogos de futebol desenvolvida pela Electronic Arts. O jogo oferece uma experiência realista e imersiva de simulação de futebol, permitindo que os jogadores controlem times e jogadores famosos de todo o mundo. Com gráficos impressionantes, mecânica de jogo refinada e modos de jogo diversos, FIFA cativa os fãs do esporte com partidas emocionantes e competições online.' },
    { image: imagens.st2, alt: 'ST2', id: 3, title: 'Street Fighter:', description: 'Street Fighter é uma icônica série de jogos de luta criada pela Capcom. Com personagens carismáticos e um sistema de combate profundo, Street Fighter é um dos jogos de luta mais influentes e populares da história. Os jogadores escolhem lutadores de uma variedade de estilos de luta e participam de combates emocionantes contra oponentes controlados pelo computador ou outros jogadores. Street Fighter é conhecido por sua mecânica de combos, movimentos especiais e torneios competitivos ao redor do mundo.' },
    { image: imagens.valorant1, alt: 'valorant', id: 4, title: 'VALORANT:', description: 'Valorant é um jogo de tiro em primeira pessoa tático desenvolvido pela Riot Games. Combinando elementos de jogos de tiro tradicionais com habilidades únicas dos personagens, Valorant oferece partidas competitivas 5x5 cheias de ação. Os jogadores escolhem agentes com habilidades distintas e trabalham em equipe para completar objetivos. Valorant é conhecido por seu foco em estratégia, trabalho em equipe e mecânica de tiro precisa.' },
    { image: imagens.mario, alt: 'mario', id: 5, title: 'MARIO::', description: 'O jogo do Mario é uma série de videogames desenvolvida pela Nintendo, protagonizada pelo icônico personagem Mario. Conhecido por suas aventuras em plataformas coloridas, o jogo do Mario oferece uma experiência divertida e envolvente. Os jogadores assumem o papel de Mario, um encanador corajoso, e embarcam em missões para resgatar a Princesa Peach das garras do vilão Bowser. Saltando em cima de inimigos, coletando moedas e power-ups, os jogadores exploram níveis repletos de desafios e segredos. Com gráficos vibrantes, trilha sonora cativante e jogabilidade acessível, o jogo do Mario conquistou o coração de jogadores de todas as idades, se tornando um verdadeiro clássico dos videogames.' },
    { image: imagens.aranha, alt: 'aranha', id: 6, title: 'Homem Aranha:', description: 'Homem-Aranha: Este jogo é baseado no famoso super-herói Homem-Aranha. Nele, você assume o papel do Homem-Aranha e enfrenta vilões enquanto patrulha a cidade de Nova York, usando suas habilidades de aranha e combatendo o crime.' },
    { image: imagens.avg, alt: 'avg', id: 7, title: 'AVENGERS:', description: '"Avengers" é um jogo baseado na equipe de super-heróis da Marvel, os Vingadores. Os jogadores podem controlar diferentes personagens icônicos dos quadrinhos, como o Homem de Ferro, Capitão América, Thor, Hulk e Viúva Negra, enquanto lutam contra ameaças globais.' },
    { image: imagens.bully, alt: 'bully', id: 8, title: 'BULLY:', description: 'Desenvolvido pela Rockstar Games, "Bully" é um jogo ambientado em um ambiente escolar. Nele, você joga como Jimmy Hopkins, um estudante travesso que deve navegar pela hierarquia social da escola, enfrentar valentões e participar de diversas atividades.' },
    { image: imagens.cdw3, alt: 'CDW3', id: 9, title: 'Call of Duty: Modern Warfare 3:', description: ' Parte da famosa série de jogos de tiro em primeira pessoa, "Call of Duty: Modern Warfare 3" é um jogo de ação e combate intenso. Nele, os jogadores participam de missões militares em várias partes do mundo para derrotar inimigos e proteger a paz global.' },
    { image: imagens.cod2, alt: 'COD2', id: 10, title: 'Call of Duty: Black Ops 2:', description: 'Outro título da série "Call of Duty", "Black Ops 2" se passa em duas épocas diferentes e conta com uma campanha emocionante e um modo multiplayer competitivo. O jogo apresenta uma narrativa ramificada e escolhas do jogador que afetam o enredo.' },
    { image: imagens.donkey, alt: 'donkey', id: 11, title: 'Donkey:', description: 'Donkey Kong é um clássico personagem da Nintendo. Os jogos do Donkey Kong geralmente envolvem plataformas, onde o jogador controla o macaco Donkey Kong ou outros personagens da franquia, superando obstáculos e derrotando inimigos.' },
    { image: imagens.crash, alt: 'crash', id: 12, title: 'Crash:', description: '"Crash" pode se referir a diferentes jogos, mas provavelmente está relacionado à série "Crash Bandicoot". Estes são jogos de plataforma onde o protagonista Crash Bandicoot enfrenta inimigos, supera obstáculos e coleta itens em aventuras divertidas.' },
    { image: imagens.csgo, alt: 'CS:GO', id: 13, title: 'CS:GO:', description: '(Counter-Strike: Global Offensive): "CS:GO" é um popular jogo de tiro em primeira pessoa baseado em equipes. Os jogadores se dividem em terroristas e contra-terroristas e competem em vários modos de jogo, como eliminação de inimigos ou plantio/desativação de bombas.' },
    { image: imagens.fortnite, alt: 'Fortnite:', id: 14, title: 'Fortnite:', description: '"Fortnite" é um jogo de batalha real online extremamente popular. Os jogadores são colocados em um mapa onde devem coletar recursos, construir estruturas e lutar contra outros jogadores até que apenas um permaneça como vencedor.' },
    { image: imagens.mine, alt: 'minecraft', id: 15, title: 'Minecraft:', description: '"Minecraft" é um jogo de construção e exploração em um mundo aberto. Os jogadores podem criar e destruir blocos, construir estruturas, explorar paisagens geradas aleatoriamente e enfrentar perigos como monstros. O jogo oferece liberdade criativa e é conhecido por sua jogabilidade única.' },
    { image: imagens.mortalkombat, alt: 'Mortal Kombat:', id: 16, title: 'Mortal Kombat:', description: '"Mortal Kombat" é uma popular série de jogos de luta conhecida por sua violência e combates brutais. Os jogadores controlam personagens com habilidades especiais e participam de torneios onde enfrentam oponentes em lutas intensas.' },
    { image: imagens.nba, alt: 'NBA 2K23', id: 18, title: 'NBA 2K23', description: '"NBA 2K23" é um jogo de simulação de basquete que oferece uma experiência autêntica da NBA. Os jogadores podem controlar times da NBA, criar seus próprios jogadores e participar de partidas emocionantes com gráficos realistas e mecânicas de jogo sofisticadas.' },
  ];


  const handlePageChange = (pageNumber) => {
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
              <button>Go!</button>
            </Link>
          ) : (
            <button onClick={handleGoButtonClick}>Go!</button>
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
