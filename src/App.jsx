import './App.css';
import NavBar from './components/NavBar/NavBar';
///import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Catalogo de Ropa deportiva' />
    </div>
  );
}
export default App;