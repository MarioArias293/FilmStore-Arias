
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import {getMockedItems, getMockedItem} from './resources/productMock';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  
  return (
    <div className="App">
      <NavBar />      
      {/* <ItemListContainer /> */}
      <ItemDetailContainer/>
      
    </div>
  );
}


export default App;

