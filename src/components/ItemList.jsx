import Item from "./Item";
import { Col } from "react-bootstrap";
import Welcome from "./Welcome";

const ItemList = ({products}) => (
    <>
        
        {products.map((product) => 
        (<Col key={product.id} className="d-flex justify-content-center">
            <Item key={product.id} item={product}/>
        </Col>))}
           



    </>

)

export default ItemList