import HomeList from "./HomeList";
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img  width="800px" heigth="400px"
          className="d-block w-100"
          src="https://files.tecnoblog.net/wp-content/uploads/2015/10/dell_building-1060x660.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Razor 1911</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="800px" heigth="400px"
          className="d-block w-100"
          src="https://files.tecnoblog.net/wp-content/uploads/2023/01/razer-edge-hero-1060x596.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="800px" heigth="400px"
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