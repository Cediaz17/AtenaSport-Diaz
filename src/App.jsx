import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/catalogo/:catalogoid' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </div>
  );
}
export default App;