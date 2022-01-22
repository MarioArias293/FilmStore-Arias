import { ListGroupItem } from "react-bootstrap";

const itemMock = [{
  id: '1',
  title: 'Producto1',
  price: 1000,
  pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  stock: 10
}, {
  id: '2',
  title: 'Producto2',
  price: 2000,
  pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  stock: 5
}, {
  id: '3',
  title: 'Producto3',
  price: 3000,
  pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  stock: 3
}]

export const getMockedItems = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return itemMock;

}

const itemDetailMock = {
  id: '1',
  title: 'Kodak Color Plus ',
  price: 1000,
  urls: ["https://m.media-amazon.com/images/I/512whCXmlkL._AC_SS450_.jpg",
    "https://almacolor.com.co/wp-content/uploads/2021/06/Captura-de-pantalla-2021-06-25-a-las-12.08.51.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cO-vyg0QhWXcxkKbgqUYsoJTdObRQ3vBJ2QLqjqkYTQ-qhBUmml-4YY7qbVKggrc00g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST36Ychuxcdzax-q3M4TbwThpD6EvSCAmZ4w&usqp=CAUaw",],
  stock: 10, 
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
}

export const getMockedItem = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return itemDetailMock;
}