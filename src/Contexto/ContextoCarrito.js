import React, { createContext, useState,useContext } from 'react'
export const cartContext = createContext();
export const CartProvider = () => useContext(cartContext);

const ContextoCarrito = ({children}) => {
    const [cart, setCart] = useState([])
    const agregarAlCarrito = (producto, quantity) => {
        const newObj = {
            ...producto,
            quantity
            }
            if(isInCart(newObj.id)){
                cart.map(el => {
                if(el.id === newObj.id)  {
                    el.quantity += newObj.quantity
                }
                return(el)
                })
        
            }else {
                setCart([...cart, newObj])
                
            }
            }
        const isInCart = (id) => {
            return cart.some(el => el.id === id)
        }

    const removerTodoElCarrito = () => {
        setCart([])
    }
    const borrarElemento = (id) => {
        let nuevoCarrito = cart.filter((e) => e.id !== id);
        setCart(nuevoCarrito)
    }
    const precioTotal = () => {
        return cart.reduce((prev,act) => prev + act.quantity * act.price,0);
    }
    const totalProductos = () => {
        return cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantity,0);
    }
    const value = {
        cart,
        agregarAlCarrito,
        removerTodoElCarrito,
        borrarElemento,
        isInCart,
        precioTotal,
        totalProductos
    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}

export default ContextoCarrito