import React, { createContext, useState,useContext } from 'react'
export const cartContext = createContext();
export const CartProvider = () => useContext(cartContext);

const ContextoCarrito = ({children}) => {
    const [cart, setcart] = useState([])
    const agregarAlCarrito = (producto,cantidad) => {
        if(isInCart(producto.id)){
            setcart(cart.map(product => {
                return product.id === producto.id ? { ...product,cantidad: product.cantidad + cantidad} : product
            }));
        }else{
            setcart({...producto,cantidad})
        }
        }
        const isInCart = (id) => cart.find(product => product.id === id ) ? true : false
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
        borrarElemento,
        isInCart
    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}

export default ContextoCarrito