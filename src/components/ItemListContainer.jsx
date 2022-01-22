import ItemList from "./ItemList";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getMockedItems } from "../resources/productMock";




const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getMockedItems().then((mocked) => {
            setProducts(mocked)
        })

    }, [])
    return (
        <Container>
            <Row xs={2} md={4} className="g-4 mt-1">
                <ItemList products={products} />
            </Row>

        </Container>

    )
}

export default ItemListContainer;