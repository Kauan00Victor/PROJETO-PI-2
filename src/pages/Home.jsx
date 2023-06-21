import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
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
  );
}