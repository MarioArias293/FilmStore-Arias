import { Badge, Row, Container, Col, Button} from "react-bootstrap"
import ControlledCarousel from "./Carousell";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext"





const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const { title, price, description, stock, urls } = item
    const [showButtons, setShowButtons] = useState(false);
    

   

    const onAdd = (i) => {
        setShowButtons(true)
        
        addItem(item, i)


    };


    return <>
        <Container className="pb-4 ">
            <Row className="justify-content-md-center g-4">
                <Col lg="4" className="mt-5" >
                    <ControlledCarousel urls={urls} />

                </Col>

                <Col lg="6" className="mt-5">

                    <div className="text-start" style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem", marginBottom: "1rem", borderBottom: "1px solid", borderImage: "linear-gradient(to right, #E97B0E, #EA9E0F) 1" }}>
                        <Container className="ps-0 d-flex align-items-end" style={{ paddingBottom: "1rem", borderBottom: "1px solid", borderImage: "linear-gradient(to right, #E97B0E, #EA9E0F) 1" }}>
                            <Row>
                                <Col><h2 >{title} </h2> </Col>
                                <Col lg={{ span: 2 }}><Badge pill bg="dark">
                                    Disponibles: {stock}
                                </Badge></Col>
                            </Row>
                        </Container>

                        <div style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem", fontSize: "2rem", borderBottom: "1px solid", borderImage: "linear-gradient(to right, #E97B0E, #EA9E0F) 1" }}>$ {Intl.NumberFormat('en-US').format(price)}  </div>

                        <p style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem" }}>{description}</p>

                    </div>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} title={title}  />


                    


                    {showButtons ? (
                        <Container className="ps-0  text-end" style={{ paddingBottom: "0.5rem", paddingTop: "1rem", marginBottom: "1rem" }}  >

                            <Link to={"/"}>
                                <Button variant="dark" >Volver al inicio</Button>
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