import ItemList from "./ItemList";
import { Row, Container } from "react-bootstrap";

const ItemListContainer = ({products}) => (
    <Container>
            <Row xs={2} md={4} className="g-4 mt-1">
                <ItemList products={products} />
            </Row>
        </Container>

)

export default ItemListContainer;