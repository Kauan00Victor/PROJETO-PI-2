import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../App.css';

export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ravel.com.br/blog/wp-content/uploads/2020/01/componentes-computador.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>TECH SYSTEMS</h3>
            <p>A Tech Systems: Transformando o futuro com tecnologia de ponta!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ravel.com.br/blog/wp-content/uploads/2020/01/componentes-computador.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ravel.com.br/blog/wp-content/uploads/2020/01/componentes-computador.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="game-store-info">
        <h1>Bem-vindo à Nossa Loja de Jogos</h1>
        <p>
          Na nossa loja, você encontrará uma ampla seleção de jogos para todas as plataformas populares,
          incluindo PC, consoles e dispositivos móveis. Oferecemos os melhores títulos do mercado e estamos
          sempre atualizados com os lançamentos mais recentes.
        </p>
        <p>
          Nossa equipe está aqui para ajudá-lo a encontrar o jogo perfeito. Se você precisa de recomendações,
          suporte técnico ou informações adicionais sobre qualquer jogo, não hesite em entrar em contato conosco.
        </p>
        <p>
          Além disso, oferecemos promoções especiais e descontos exclusivos para nossos clientes fiéis.
          Fique de olho em nossas ofertas e aproveite para adquirir os seus jogos favoritos com preços incríveis.
        </p>
        <p>Explore nossa loja online e mergulhe na diversão dos melhores jogos do mercado!</p>
      </div>
    </div>
  );
}