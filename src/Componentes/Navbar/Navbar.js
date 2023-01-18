import React from 'react'
import {NavLink} from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        <NavLink className="navbar-brand" to='/'>Automotores SDG</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="#">Nosotros</NavLink>
            </li>
            <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </NavLink>
            <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to='/category/Nuevo'>Nuevo</NavLink></li>
                <li><NavLink className="dropdown-item" to='/category/Usado'>Usado</NavLink></li>
            </ul>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <div className="carritoNavbar nav-link active" aria-current="page" href="#"><CartWidget /></div>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
        </div>
    )
}

export default Navbar