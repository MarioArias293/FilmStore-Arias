import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);
    const add = () => { if (count < stock) { setCount(count + 1) } }
    const sus = () => { if (count > 0) { setCount(count - 1) } };
    const addToCartHandler = (count) => { if (count > 0) onAdd(count)}


    return (

        <div>
            <ButtonGroup variant="secondary">
                <Button variant="light" onClick= {sus}>  - </Button>
                <div>{count}</div>
                <Button variant="light" onClick={add}>  + </Button>
            </ButtonGroup>
            <div><button type="button" class="btn btn-primary" onClick={ () => addToCartHandler(count)} >Agregar al carrito</button></div>

        </div>

    )
}

export default ItemCount;