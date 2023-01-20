import React from 'react'
import "./CartWidget.css"
import {Link} from 'react-router-dom'
import {CartProvider} from "../../Contexto/ContextoCarrito"
const CartWidget = () => {
    const {totalProductos} = CartProvider();
    return (
        <Link>
            <div className="iconoCart">
                <i className="bi bi-cart"></i>
                {totalProductos()>0 && <span>totalProducts()</span>}
            </div>
        </Link>
    )
    }

export default CartWidget