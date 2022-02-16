import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/emptyCart.json';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const EmptyCart = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    initialSegment: [0, 100],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Container
        id="containerShadow"
        className=" mb-2 mt-2 border rounded d-flex flex-column align-items-center"
      >
        <div className="containerStyle">
          <Lottie
            options={defaultOptions}
            height={250}
            width={250}
            isStopped={false}
            isPaused={false}
          />
        </div>

        <Container className="mt-4 mb-5 textContainer " id="2remSize">
          Tu carrito esta vacio
        </Container>
        <br />
        <Link to={'/'}>
          <Button
            variant="light"
            id="bigHomeButton"
            className="btn-lg rounded-pill mb-5"
          >
            {' '}
            Compra ahora{' '}
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default EmptyCart;
