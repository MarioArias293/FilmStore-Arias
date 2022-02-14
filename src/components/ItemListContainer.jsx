import ItemList from "./ItemList";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getItemsByCat } from "../resources/firebase";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Welcome from "./Welcome";



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState()
    
    useEffect(() => {
        setLoading(true)
        getItemsByCat(id).then((items) => {
            setProducts(items)
            setLoading(false)
            
        })

    }, [id])

    return (
        <><Welcome  cat={id}  /><Container>
            {loading ? <Loading /> : <Row xs={1} md={2} lg={4} className="g-4 mt-1 mb-1">
                <ItemList className="justify-content-center" products={products} />
            </Row>}


        </Container></>

    )
}

export default ItemListContainer;