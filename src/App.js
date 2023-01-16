import './App.css';
import Navbar from "./Componentes/Navbar/Navbar"
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
      <Route path='/Item/:id' element={<ItemDetailContainer/>}></Route>
    </Routes>
    </Router>
    </ContextoCarrito>
    </div>
  );
}

export default App;
