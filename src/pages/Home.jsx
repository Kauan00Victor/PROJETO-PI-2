import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa'
import { IoGameController } from "react-icons/io5";
import { imagens } from '../components/Imagens'
import '../App.css';



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
            <p>Onde a diversão nunca tem fim.</p>
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
        A Razor 1911 é um grupo de cracking e demoscene de renome na cena dos jogos de computador. 
        A história da Razor 1911 remonta ao início da década de 1980, quando foi fundada por um grupo de piratas de software. 
        Seu nome é inspirado na lâmina de barbear "Gilette Razor" e no ano 1911, que é fictício e simboliza 
        uma época anterior à era dos computadores
        </p>
      </div>
      <div className="responsive-div1">
        <img src={imagens.st} alt="Imagem" />
        <p>
        No início, a Razor 1911 era conhecida principalmente por criar cracks, que são programas modificados para 
        contornar medidas de proteção de cópia em jogos. Esses cracks permitiam que os usuários jogassem jogos sem ter que 
        inserir chaves de ativação ou usar discos originais, tornando-os 
        populares entre aqueles que não podiam pagar pelos jogos.
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