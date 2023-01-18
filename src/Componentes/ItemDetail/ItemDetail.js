import React from 'react'
import ItemCount from "../../Componentes/ItemCount/ItemCount"
const ItemDetail = ({producto}) => {

    const agregarAlCarrito = (cantidad) =>{
        console.log(cantidad)
    }
    agregarAlCarrito();
    return (
        <div>
            <img src={producto.imagen} alt={producto.modelo} width={300}/>
            <p>{producto.marca} {producto.modelo}</p>
            <p>{producto.color}</p>
            <p>{producto.anio}</p>
            <p>u$s{producto.precio}</p>
            <p>{producto.categoria}</p>
            <ItemCount stock={producto.cantidad} onAdd={agregarAlCarrito}/><br />
        </div>
    )
}

export default ItemDetail