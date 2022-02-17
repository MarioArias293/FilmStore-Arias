import {
  Col,
  Row,
  Button,
  Figure,
  Container,
  ButtonGroup,
  Form,
} from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../resources/firebase';

const Cart = () => {
  const {
    getCartItemsSize,
    items,
    removeItem,
    clearAll,
    getTotalPrice,
    getTotalItems,
    addItem,
    setId,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const itemsToBuy = items.map((product) => {
    return {
      id: product.item.id,
      title: product.item.title,
      price: product.item.price,
      qty: product.qty,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const buyer = {
      name: event.target.elements.name.value,
      phone: event.target.elements.num.value,
      email: event.target.elements.mail.value,
    };
    const order = {
      buyer: buyer,
      items: itemsToBuy,
      date: new Date().toISOString(),
      total: getTotalPrice(),
    };

    addDoc(collection(db, 'orders'), order)
      .then((doc) => {
        setId(doc.id);
        clearAll();
        navigate(`/OrderReview/${doc.id}`);
      })
      .catch((e) => {});
    addDoc();
  };

  return (
    <>
      {getCartItemsSize() ? (
        <Container className=" border rounded mt-4 " id="boxShadow">
          <Row className="justify-content-md-center g-4 ">
            <Col className="border-end">
              <div className="mt-2" id="cartLines">
                Carrito de compras
              </div>
              {items.map((product) => (
                <Col
                  key={product.item.id}
                  className="d-flex flex-wrap justify-content-center align-items-center"
                  id="cartLines"
                >
                  <Col>
                    <Figure>
                      <Figure.Image
                        width={120}
                        height={120}
                        alt="171x180"
                        src={product.item.urls[0]}
                        onClick={() => {
                          navigate(`/item/${product.item.id}`);
                        }}
                        id="cartLinkStyle"
                      />
                    </Figure>
                  </Col>

                  <Col
                    onClick={() => {
                      navigate(`/item/${product.item.id}`);
                    }}
                    id="cartLinkStyle"
                  >
                    {product.item.title} <br />
                  </Col>
                  <Col className="justify-content-end">
                    <ButtonGroup variant="secondary">
                      <Button
                        variant="light"
                        onClick={() => {
                          addItem(product.item, -1);
                        }}
                      >
                        {' '}
                        -{' '}
                      </Button>
                      <div className="mx-4 fs-4"> {product.qty} </div>
                      <Button
                        variant="light"
                        onClick={() => {
                          addItem(product.item, 1);
                        }}
                      >
                        {' '}
                        +{' '}
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col style={{ fontSize: '1.4rem' }}>
                    $
                    {Intl.NumberFormat('en-US').format(
                      product.item.price * product.qty
                    )}
                  </Col>
                  <Col>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeItem(product.item.id)}
                    >
                      Eliminar{' '}
                    </Button>
                  </Col>
                </Col>
              ))}

              <Container className="d-flex justify-content-around mb-3">
                <Link to={'/'}>
                  <Button variant="dark">← Seguir comprando </Button>
                </Link>

                <Button variant="outline-danger" onClick={clearAll}>
                  Vaciar Carrito{' '}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-cart-x"
                  >
                    <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>{' '}
                </Button>
              </Container>
            </Col>
            <Col md={4} className=" mt-5 mb-5 ">
              <Col
                style={{
                  backgroundColor: '#E5E5E5',
                  position: 'sticky',
                  top: '5rem',
                }}
                className=" border rounded d-flex flex-column align-items-center"
              >
                <div className="mt-2">
                  <div id="cartSummary" className="mt-4">
                    Resumen de tu compra
                  </div>
                </div>

                <Form onSubmit={handleSubmit} style={{ width: '80%' }}>
                  <Form.Group className="mb-1 ">
                    <Form.Label>Tu nombre</Form.Label>
                    <Form.Control
                      id="name"
                      type="text"
                      placeholder="Nombre"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      id="mail"
                      type="email"
                      placeholder="example@mail.com"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-1">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      id="num"
                      type="tel"
                      placeholder="Teléfono"
                      required
                    />
                  </Form.Group>

                  <div className="mt-2">
                    {' '}
                    Total de productos: {getTotalItems()}{' '}
                  </div>
                  <div className="mt-4" style={{ fontSize: '1.4rem' }}>
                    {' '}
                    Total $ {Intl.NumberFormat('en-US').format(
                      getTotalPrice()
                    )}{' '}
                  </div>

                  <Button
                    type="submit"
                    variant="light"
                    id="goToPayButton"
                    className="mb-4 mt-2"
                  >
                    {' '}
                    Ir a pagar{' '}
                  </Button>
                </Form>
              </Col>
            </Col>
          </Row>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
