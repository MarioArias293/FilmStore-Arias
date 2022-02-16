import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/order.json';
import { Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const OrderReview = () => {
  const { id } = useParams();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    initialSegment: [0, 60],
    speed: 0.5,
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
            speed={0.3}
            isStopped={false}
            isPaused={false}
          />
        </div>

        <Container className="mt-4 mb-5 textContainer">
          ¡Excelente! <br /> Tu orden ha sido generada con el id:
          <br />
          {id}
        </Container>
        <br />
        <Link to={'/'}>
          <Button
            variant="light"
            id="bigHomeButton"
            className="btn-lg rounded-pill mb-5"
          >
            {' '}
            Seguir comprando{' '}
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default OrderReview;
