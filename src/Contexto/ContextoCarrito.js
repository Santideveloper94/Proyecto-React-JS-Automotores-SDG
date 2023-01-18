import React, { createContext, useState,useContext } from 'react'

export const cartContext = createContext();
export const CartProvider = () => useContext(cartContext);

const ContextoCarrito = ({children}) => {
    const [cart, setcart] = useState([])
    const agregarAlCarrito = (producto,cantidad) => {
        setcart({...producto,cantidad})
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