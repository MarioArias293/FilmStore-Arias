import { useState, useContext } from 'react';
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
  Modal,
} from 'react-bootstrap';
import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/added.json';
import * as animationData2 from '../assets/animations/noStock.json';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ stock, initial = 1, onAdd, title }) => {
  const { enoughStock } = useContext(CartContext);
  const [count, setCount] = useState(initial);
  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const sus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const addToCartHandler = (count) => {
    if (count >= initial) {
      handleShow();
      onAdd(count);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    initialSegment: [0, 100],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const noStockOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData2,
    initialSegment: [0, 100],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col className="justify-content-end">
          <ButtonGroup variant="secondary">
            <Button variant="light" onClick={sus}>
              {' '}
              -{' '}
            </Button>
            <div className="mx-4 fs-4"> {count} </div>
            <Button variant="light" onClick={add}>
              {' '}
              +{' '}
            </Button>
          </ButtonGroup>
        </Col>
        <Col className="justify-content-end">
          <Button
            type="button"
            variant="light"
            id="orangeButton"
            onClick={() => addToCartHandler(count)}
          >
            Agregar al carrito
          </Button>
        </Col>
        {enoughStock === true ? (
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
              {' '}
              <Lottie
                options={defaultOptions}
                height={250}
                width={250}
                isStopped={false}
                isPaused={false}
              />
              <p className="alertStyle">
                Has agregado {count} {title} al carrito!{' '}
              </p>
            </Modal.Body>
          </Modal>
        ) : (
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
              {' '}
              <Lottie
                options={noStockOptions}
                height={250}
                width={250}
                speed={2}
                isStopped={false}
                isPaused={false}
              />
              <p className="alertStyle"> No hay suficiente stock 😞 </p>
            </Modal.Body>
          </Modal>
        )}
      </Row>
    </Container>
  );
};

export default ItemCount;
