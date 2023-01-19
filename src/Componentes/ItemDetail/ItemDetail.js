import React from 'react'
import ItemCount from "../../Componentes/ItemCount/ItemCount"
import { CartProvider } from  "../../Contexto/ContextoCarrito"
const ItemDetail = ({producto}) => {
    const { agregarAlCarrito } = CartProvider();
            const vehiculosAvender = (cantidad) =>{
        agregarAlCarrito(producto,cantidad)
    }
    console.log(producto)
    console.log(cantidad)
    return (
        <div>
            <img src={producto.imagen} alt={producto.modelo} width={300}/>
            <p>{producto.marca} {producto.modelo}</p>
            <p>{producto.color}</p>
            <p>{producto.anio}</p>
            <p>u$s{producto.precio}</p>
            <p>{producto.categoria}</p>
            <ItemCount stock={producto.cantidad} onAdd={vehiculosAvender}/><br />
        </div>
    )
}

export default ItemDetail