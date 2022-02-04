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
            preserveAspectRatio: 'xMidYMid slice'

        }
    };

    return (
        <>
<Container style={{ width: "80%", boxShadow: "0 13px 27px -5px rgba(92, 93, 50, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)" }} className=" mb-2 mt-2 border rounded d-flex flex-column align-items-center">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.85)" }}>
                <Lottie options={defaultOptions}
                    height={250}
                    width={250}
                    isStopped={false}
                    isPaused={false} />


            </div>
            
            <Container className="mt-4 mb-5" style={{ fontSize: "2rem" }} >
                Tu carrito esta vacio
            
            </Container>
            <br/>
            <Link to={"/"}>
                <Button variant="light"   style={{ backgroundColor: "#ffa600", boxShadow: "0 13px 27px -5px rgba(92, 93, 50, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)" }} className='btn-lg rounded-pill mb-5'> Compra ahora </Button>
            </Link>
            </Container>
        </>
    )
}

export default EmptyCart