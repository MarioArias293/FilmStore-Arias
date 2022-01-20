const itemMock = [{
    id: '1',
    title: 'Producto1',
    price: 1000,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  }, {
    id: '2',
    title: 'Producto2',
    price: 2000,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  }, {
    id: '3',
    title: 'Producto3',
    price: 3000,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  }]

const getMockedItems= async() => {
    await new Promise(resolve=> setTimeout( resolve , 2000))
    return itemMock;
}

export default getMockedItems