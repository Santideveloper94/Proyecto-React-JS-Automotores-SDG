import React from 'react'
import "./CartWidget.css"
import {Link} from 'react-router-dom'
const CartWidget = () => {
    return (
        <Link>
            <div>
                <i className="bi bi-cart"></i>
            </div>
        </Link>
    )
    }

export default CartWidget