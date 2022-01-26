import { useState } from "react";
import { Button, ButtonGroup, Container, Row, Col } from "react-bootstrap";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);
    const add = () => { if (count < stock) { setCount(count + 1) } }
    const sus = () => { if (count > 0) { setCount(count - 1) } };
    const addToCartHandler = (count) => { if (count > 0) onAdd(count) }


    return (

        <Container className="mt-4" >
            <Row>
                <Col className="justify-content-end">
                    <ButtonGroup variant="secondary">
                        <Button variant="light" onClick={sus}>  - </Button>
                        <div className="mx-4 fs-4">  {count}  </div>
                        <Button variant="light" onClick={add}>  + </Button>
                    </ButtonGroup>
                </Col>
                <Col className="justify-content-end">
                <button type="button" class="btn btn-primary " onClick={() => addToCartHandler(count)} >Agregar al carrito</button>
                </Col>
            </Row>

        </Container>

    )
}

export default ItemCount;