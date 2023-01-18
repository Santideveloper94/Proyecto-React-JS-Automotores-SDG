import React from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../Contexto/ContextoCarrito";
import { Total } from "../../helpers";
import CartElement from "../CartElement/CartElement";
import Formulario from "../Formulario/Formulario";

const CartBody = () => {
    const { cart, removerTodoElCarrito,borrarElemento} = CartProvider();

    return (
        <div className="container-fluid">
        <div className={` ${cart.length > 0 && " d-flex justify-content-between aling-items-center"} px-4`}>
            <h1 className="text-center text-uppercase my-5">checkout</h1>
        {cart.length > 0 && <i onClick={borrarElemento} className="fas fa-trash-alt pointer btn my-5 fs-3 text-danger text-center"></i>}
        </div>

        {cart.length > 0 && (
            <div className="container border m-lg-5 ">
            <div className="row">
                <div className="container  col col-12 col-md-6 my-4 py-2 container-scroll">
                {cart.map((item,index) => (
                    <CartElement key={index} item={item} quitar={removerTodoElCarrito} />
                ))}
                </div>
                <div className="col col-12 col-md-6 py-2 my-4">
                <Formulario total={Total(cart)} compra={cart} />
                </div>
            </div>
            </div>
        )}
        {cart.length < 1 && (
            <div className="container full-height d-flex align-items-center justify-content-center ">
            <div className="w-50">
                <h3 className="text-center text-uppercase">
                el carrito esta vacio
                </h3>

                <div className="my-5 d-flex">
                <Link to="/" className="btn btn-primary w-100 text-uppercase">
                    volver a realizar una compra
                </Link>
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default CartBody;