import { Badge, Row, Container, Col, Button } from "react-bootstrap"
import ControlledCarousel from "./Carousell";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext"




const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const { title, price, description, stock, urls } = item
    const [ showButtons, setShowButtons ] = useState(false);
    const onAdd = (i) => {
        setShowButtons(true)
        addItem(item, i)

    };


    return <>
        <Container className="pb-2">
            <Row className="justify-content-md-center g-4">
                <Col lg="4">
                    <ControlledCarousel urls={urls} />

                </Col>

                <Col lg="6" className="mt-5">

                    <div className="text-start">
                        <Container className="ps-0 d-flex align-items-end">
                            <Row>
                                <Col><h2 >{title} </h2> </Col>
                                <Col   lg={{ span: 2 }}><Badge  pill bg="secondary">
                                    Disponibles: {stock}
                                </Badge></Col>
                            </Row>
                        </Container>
                        <hr />
                        <h3>$ {Intl.NumberFormat('en-US').format(price)}  </h3>
                        <hr />
                        <p>{description}</p>

                    </div>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />

                    {showButtons ? (         
                        <Container className="ps-0  text-end"  >
                        <hr/>
                        <Link to={"/"}>
                            <Button variant="secondary" >Volver al inicio</Button> 
                        </Link>
                        {' '}
                        <Link to={"/cart"}>
                            <Button variant="light" style={{ backgroundColor: "#ffa600" }} >Finalizar compra</Button>
                        </Link>
                    </Container>
                    ) : (
                        null
                    )}


                    
                </Col>
            </Row>
        </Container>

    </>



}

export default ItemDetail;