import Item from "./Item";
import { Col, Button } from "react-bootstrap";
import { CartContext, cartItems } from "../context/CartContext";
import { useContext } from "react";


const Cart = () => {
    const { getCartItemsSize, items } =useContext(CartContext)


    return (

        <>
        <h2>
        {items.map((product) => 
        (<Col key={product.item.id} className="d-flex justify-content-center">
            <h3> {product.item.title} -  </h3> 
            <h3> {product.item.price} - </h3>
            <h3> {product.qty} </h3>
        </Col>))}
        </h2>

    </>
    )
}

export default Cart


