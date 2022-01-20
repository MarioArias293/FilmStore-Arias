import Item from "./Item";
import { Col } from "react-bootstrap";


// const letras = ["a", "b", "c" ];
// const impLetras = (str) => (<div>{str}</div>)
// console.log(letras.map(impLetras))

const ItemList = ({products}) => (
    <>
        {products.map((product) => 
        (<Col key={product.id}>
            <Item key={product.id} item={product}/>
        </Col>))}
           



    </>

)

export default ItemList