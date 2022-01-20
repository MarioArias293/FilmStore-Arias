
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import getMockedItems from './resources/productMock';



function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    getMockedItems().then((mocked)=>{
      setProducts(mocked)
    }) 
    
  }, [])
  return (
    <div className="App">
      <NavBar />      
      <ItemListContainer products={products} />
      
      
    </div>
  );
}

export default App;

