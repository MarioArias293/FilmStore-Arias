import ItemList from "./ItemList";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getMockedItemsByCat } from "../resources/productMock";
import { useParams } from "react-router-dom";
import Loading from "./Loading";



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState()
    
    useEffect(() => {
        setLoading(true)
        getMockedItemsByCat(id).then((mocked) => {
            setProducts(mocked)
            setLoading(false)
            
        })

    }, [id])

    return (
        
        <Container>
            {loading ? <Loading/> : <Row xs={1} md={2} lg={4}  className="g-4 mt-1 mb-1" >
                <ItemList className="justify-content-center" products={products} />
            </Row> }    
            

        </Container>

    )
}

export default ItemListContainer;