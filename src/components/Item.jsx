import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  let peso = Intl.NumberFormat('en-US');
  const { id, title, price, urls } = item;
  const navigate = useNavigate();

  return (
    <Card
      id="cardWidth"
      onClick={() => {
        navigate(`/item/${id}`);
      }}
    >
      <Card.Img variant="top" src={urls[0]} />
      <ListGroup variant="flush">
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text> $ {peso.format(price)} </Card.Text>
          <Link to={`/item/${id}`}>
            <Button variant="dark"> Detalles </Button>
          </Link>
        </Card.Body>
      </ListGroup>
    </Card>
  );
};

export default Item;
