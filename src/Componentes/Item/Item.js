import React from 'react'
import {NavLink} from 'react-router-dom'
const Item = ({producto,id}) => {
    return (
        <div className="m-2">
            <div className="card" style={{width: "18rem", paddingBottom: "1rem"}}>
            <div
                style={{backgroundImage: `url(${producto.imagen})`, width:'100%', height:'10rem', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}/>
    <div className="card-body" style={{height:"15rem", padding:"1em"}}>
        <h5 className="card-title">{producto.marca} {producto.modelo}</h5>
        <h5 className="card-title">{producto.anio}</h5>
        <h6 className="card-title">{producto.color}</h6>
        <p className="card-text" style={{height:"5rem"}}>{producto.descripcion}</p>
        <NavLink to={`/item/:${id}`} className="btn btn-primary m-2">Comprar Vehiculo u$s{producto.precio}</NavLink>
    </div>
    </div>
        </div>
    )
}

export default Item