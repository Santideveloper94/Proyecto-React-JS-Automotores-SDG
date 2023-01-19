import './App.css';
import Navbar from "./Componentes/Navbar/Navbar"
import Carousel from "./Componentes/Carousel/Carousel"
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import ContextoCarrito from "./Contexto/ContextoCarrito";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <ContextoCarrito>
    <Router>
    <NavLink/>
    <Navbar/>
    <h1>Automotores SDG</h1>
    <h2>Tienda Virtual</h2>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:id' element={<ItemListContainer/>}></Route>
      <Route path={`/Item/:productoId`} element={<ItemDetailContainer/>}></Route>
      <Route path={`/category/Nosotros`} element={<Carousel/>}></Route>
    </Routes><br />
    </Router>
    </ContextoCarrito>
    </div>
  );
}

export default App;
