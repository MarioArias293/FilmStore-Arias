import { Badge, Row, Container, Col } from "react-bootstrap"
import ControlledCarousel from "./Carousell";
import ItemCount from "./ItemCount";

const onAdd = (i) => {alert(`Has agregado ${i} productos a la canasta`)} 
const ItemDetail = ({ item }) => {
    const { title, price, description, stock, urls } = item


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
                            <Col lg={{ span:2 }}><Badge pill bg="secondary">
                                Disponibles: {stock}
                            </Badge></Col>
                            </Row>
                        </Container>
                        <hr/>
                        <h3>$ {Intl.NumberFormat('en-US').format(price)}  </h3>
                        <hr/>
                        <p>{description}</p>
                    
                    </div>


                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                </Col>
            </Row>
        </Container>

    </>



}

export default ItemDetail;