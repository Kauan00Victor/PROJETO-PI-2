import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../App.css';
import { FaArrowDown } from 'react-icons/fa'
import { IoGameController, IoInformationCircle, IoHome } from "react-icons/io5";
import { imagens } from '../components/Imagens'
import { NavLink } from 'react-router-dom';


export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagens.halo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>RAZOR</h3>
            <p>Desperte o seu poder de jogador na loja Razor e mergulhe em aventuras épicas que vão desafiar seus limites e liberar a sua paixão pelos jogos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagens.forza3}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>RAZOR</h3>
            <p>A loja dos jogadores, onde a diversão nunca tem fim.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagens.payday}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>RAZOR</h3>
            <p>
              onde a diversão ganha vida.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="alingicons">
        <div className="icons">
          <NavLink to="/jogos" className="icone">
            <IoGameController />
            <h1>Jogos</h1>
          </NavLink>
        </div>
      </div>
      <div className="responsive-div">
        <img src={imagens.mario} alt="Imagem" />
        <p>
          Bem-vindo à Razor, a sua loja virtual especializada em downloads de jogos online!

          Na Razor, estamos comprometidos em proporcionar a melhor experiência de compra e diversão para os entusiastas de jogos. Nossa extensa coleção de jogos abrange uma ampla variedade de gêneros, desde aventuras épicas até desafios estratégicos, passando por emocionantes jogos de ação e muito mais.

          Nossa plataforma intuitiva e fácil de usar permite que você navegue e descubra novos títulos, além de encontrar seus jogos favoritos em apenas alguns cliques. Com uma interface amigável e informações detalhadas, você terá acesso a descrições, capturas de tela e avaliações dos jogos, garantindo que você faça a escolha certa para sua próxima aventura virtual.
        </p>
      </div>
      <div className="responsive-div1">
        <img src={imagens.st} alt="Imagem" />
        <p>
          Além disso, a Razor está em constante atualização, trazendo as últimas novidades e lançamentos da indústria de jogos. Mantenha-se sempre atualizado com os melhores jogos do mercado, aproveitando as vantagens exclusivas oferecidas pela nossa loja.

          Nossa equipe dedicada está pronta para ajudá-lo em todas as etapas, desde o momento da compra até o suporte pós-venda. Valorizamos a satisfação do cliente acima de tudo, buscando sempre superar suas expectativas e proporcionar uma experiência memorável.

          Então, prepare-se para mergulhar em um mundo de entretenimento virtual. Explore a Razor e descubra os jogos mais empolgantes e cativantes disponíveis para download imediato. Sua próxima grande aventura começa aqui!

          Bem-vindo à Razor. Junte-se à comunidade de jogadores apaixonados e desfrute de horas de diversão sem limites.
        </p>
      </div>

      <h1 className='h1'> <FaArrowDown /> Lançamentos <FaArrowDown /></h1>

      <div className="container1">
        <div className="item">
          <div className="quote">
            <p>FIFA: "Entre em campo e viva a emoção do futebol virtual como nunca antes."<span>FIFA</span></p>
          </div>
        </div>
        <div className="item">
          <div className="quote">
            <p>GTA: "Explore um mundo aberto repleto de possibilidades e ação frenética."&nbsp;<span>GTA</span></p>
          </div>
        </div>
        <div className="item">
          <div className="quote">
            <p>Vingadores: "Junte-se aos heróis mais poderosos da Terra e proteja o mundo da ameaça iminente."<span>VINGADORES</span></p>
          </div>
        </div>
        <div className="item">
          <div className="quote">
            <p>God of War: "Embarque em uma jornada épica de vingança e poder divino."<span>GOD OF WAR</span></p>
          </div>
        </div>
        <div className="item">
          <div className="quote">
            <p>Homem-Aranha: "Balance pelos arranha-céus e proteja a cidade como o herói que o mundo precisa."<span>HOMEM ARANHA</span></p>
          </div>
        </div>
        <div className="item">
          <div className="quote">
            <p>
              Assassin's Creed: "Mergulhe em uma jornada através da história, desvendando segredos ancestrais e dominando as habilidades dos assassinos."<span>Assassin's Creed</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}