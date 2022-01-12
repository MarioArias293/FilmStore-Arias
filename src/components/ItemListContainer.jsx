import ItemCount from "./ItemCount";

const onAddHandler = (num) =>  {alert(`Añadiste ${num} productos al carrito`)}
const ItemListContainer = () => (
    <>
   
    <ItemCount stock={6} onAdd={onAddHandler} />

    </>
)

export default ItemListContainer;