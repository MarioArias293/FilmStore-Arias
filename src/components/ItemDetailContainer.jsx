import { Container, Row } from "react-bootstrap"
import { getItem } from "../resources/firebase"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    const [loading, setLoading] = useState()
    const [item, setItem] = useState({})
    const { id } = useParams();
    useEffect(() => {
        setLoading(true)
        getItem(id).then((item) => {
            setItem(item)
            setLoading(false)
        })



    }, [id])


    return (
        <Container>
            {loading ? <Loading /> : (<Row xs={1.5} md={1.5} className="g-4 mt-2">
                <span className="border rounded" id="boxShadow" >
                    <ItemDetail item={item} />
                </span>

            </Row>)}

        </Container>

    )
}

export default ItemDetailContainer;