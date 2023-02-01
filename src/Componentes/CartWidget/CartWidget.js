import React from 'react'
import "./CartWidget.css"
import {Link} from 'react-router-dom'
import {CartProvider} from "../../Contexto/ContextoCarrito"
const CartWidget = () => {
    const {totalProductos} = CartProvider();
    return (
        <Link to={`/cart`}>
            <div>
                <i className="bi bi-cart"></i>
                <span>TotalProductos:</span>{totalProductos()>0 && totalProductos()}
            </div>
        </Link>
    )
    }

export default CartWidget