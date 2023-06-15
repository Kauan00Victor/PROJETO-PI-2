import HomeList from "./HomeList";
import Carousel from 'react-bootstrap/Carousel';
import vava from '../img/VAVA.jpg'
import forza2 from '../img/FORZA2.jpg'
import gta from '../img/GTA.jpg'

export default function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gta}
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
          src={forza2}
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
          src={vava}
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