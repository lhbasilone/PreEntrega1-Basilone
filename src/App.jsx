import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/products/NavBar';
import CardCart from './components/products/CardCart';
import ItemDetailContainer from './components/products/ItemDetailContainer';
import ItemListContainer from './components/products/ItemListContainer';
import ItemsList from './components/FromFireBase/ItemList';






function App() {

  return (
    
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/items' element={<ItemListContainer />} />
          <Route path='/category' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemDetailContainer />} />
          <Route path='/card/cart' element={<CardCart/>} />
          <Route path='/' element={<ItemsList/>} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
