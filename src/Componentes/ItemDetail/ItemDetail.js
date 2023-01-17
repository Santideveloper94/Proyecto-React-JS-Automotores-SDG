import React from 'react'

const ItemDetail = ({producto}) => {

    const agregarAlCarrito = (cantidad) =>{
        console.log(cantidad)
    }
    agregarAlCarrito();
    return (
        <div>
            <img src={producto.imagen} alt={producto.modelo} width={300}/>
            <p>{producto.marca} {producto.modelo}</p>
            <p>u$s{producto.precio}</p>
        </div>
    )
}

export default ItemDetail