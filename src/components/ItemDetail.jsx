import { Badge, Row, Container, Col, Button } from 'react-bootstrap';
import ControlledCarousel from './Carousell';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const { title, price, description, stock, urls } = item;
  const [showButtons, setShowButtons] = useState(false);

  const onAdd = (i) => {
    setShowButtons(true);

    addItem(item, i);
  };

  return (
    <>
      <Container className="pb-4 ">
        <Row className="justify-content-md-center g-4">
          <Col lg="4" className="mt-5">
            <ControlledCarousel urls={urls} />
          </Col>

          <Col lg="6" className="mt-5">
            <div className="text-start pb-2 pt-2 mb-1 borderBottomLine">
              <Container className="ps-0 d-flex pb-2 align-items-end borderBottomLine">
                <Row>
                  <Col>
                    <h2>{title} </h2>{' '}
                  </Col>
                  <Col lg={{ span: 2 }}>
                    <Badge pill bg="dark">
                      Disponibles: {stock}
                    </Badge>
                  </Col>
                </Row>
              </Container>

              <div
                className="pb-1 pt-1 borderBottomLine"
                style={{
                  fontSize: '2rem',
                }}
              >
                $ {Intl.NumberFormat('en-US').format(price)}{' '}
              </div>

              <p className="pb-1 pt-1">{description}</p>
            </div>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} title={title} />

            {showButtons ? (
              <Container className="ps-0 pb-1  pt-2 mb-2 text-end">
                <Link to={'/'}>
                  <Button variant="dark">Volver al inicio</Button>
                </Link>{' '}
                <Link to={'/cart'}>
                  <Button variant="light" id="orangeButton">
                    Finalizar compra
                  </Button>
                </Link>
              </Container>
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
