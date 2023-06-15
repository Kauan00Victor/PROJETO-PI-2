import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import forza from '../img/FORZA.jpg'
import forza1 from '../img/FORZA1.jpg'
import street from '../img/STREET.jpg'
import st from '../img/ST.jpg'
import VALORANT from '../img/VALORANT.jpg'
import styles from './Produtos.css'
import { Navigate } from 'react-router-dom';

function BasicExample() {

    function handleClick(){
        Navigate('/')
    }

  return (
    <Card style={{ width: '18rem', styles }}>
      <Card.Img variant="top" src={forza}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go.</Button>
      </Card.Body>
      <Card.Img variant="top" src={forza1}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
      <Card.Img variant="top" src={street}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
      <Card.Img variant="top" src={st}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
      <Card.Img variant="top" src={VALORANT}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
      <Card.Img variant="top" src={forza}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;