import React, { createContext, useState,useContext } from 'react'
import {verificarSiHayProductoEnCarrito,unificarItems} from '../Helpers/Helpers';
import { ProveedorGlobal } from "./ContextoGlobal"

export const cartContext = createContext();
export const CartProvider = () => useContext(cartContext);

const ContextoCarrito = ({children}) => {
    const setMostrarAlerta  = ProveedorGlobal();
    const [cart, setcart] = useState([])
    const agregarAlCarrito = (producto,cantidad) => {
        
            if(verificarSiHayProductoEnCarrito(producto,cantidad)){
                setcart(unificarItems(producto,cantidad));
                setMostrarAlerta(true);
                return;
            }else{
                setcart(...cart,{...producto,cantidad})
                setMostrarAlerta(true);
            }
        
        }
    const removerTodoElCarrito = () => {
        setcart([])
    }
    const borrarElemento = (id) => {
        let nuevoCarrito = cart.filter((e) => e.id !== id);
        setcart(nuevoCarrito)
    }
    const value = {
        cart,
        agregarAlCarrito,
        removerTodoElCarrito,
        borrarElemento
    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}

export default ContextoCarrito