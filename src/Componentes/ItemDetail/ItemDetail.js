import React from 'react'

const ItemDetail = ({producto}) => {

    const agregarAlCarrito = (cantidad) =>{
        console.log(cantidad)
    }
    agregarAlCarrito();
    return (
        <div>
            <img src={producto.imagen} alt={producto.modelo} width={200}/>
            <p>{producto.marca}</p>
            <p>${producto.precio}</p>
        </div>
    )
}

export default ItemDetail