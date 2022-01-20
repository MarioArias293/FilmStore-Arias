import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
const onAddHandler = (num) =>  {alert(`Añadiste ${num} productos al carrito`)}

const Item = ({item})  => {
    const {id, title, price, pictureUrl} = item;
    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Precio: {price}</Card.Text>
            <Card.Text> Id: {id}</Card.Text>
            <Button> Detalles </Button>
            <ItemCount stock={6} onAdd={onAddHandler} initial={1} />
            
        </Card.Body>

    </Card>
    )

    }

export default Item;