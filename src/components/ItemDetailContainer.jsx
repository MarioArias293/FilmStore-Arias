import { Container, Row } from "react-bootstrap"
import { getMockedItem } from "../resources/productMock"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    useEffect(() => {
        getMockedItem().then((mocked) => {
            setItem(mocked)
        })
        

    }, [])   


    return(
    <Container>
            
            <Row xs={1.5} md={1.5} className="g-4 mt-2">
                <ItemDetail item={item} />
                
            </Row>
        </Container>

)}

export default ItemDetailContainer;