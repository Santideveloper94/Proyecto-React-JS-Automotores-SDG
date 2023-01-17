import React, { useEffect } from "react";
import { ProveedorGlobal } from "../../Contexto/ContextoGlobal";

const Toast = () => {
    const mostrarAlerta = ProveedorGlobal();
    const setMostrarAlerta = ProveedorGlobal();

    useEffect(() => {
        if (mostrarAlerta) {
        setTimeout(() => {
            setMostrarAlerta(false);
        }, 2000);
        }
    },);

    return (
        <>
        {mostrarAlerta && (
            <div
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            className="alert position-fixed top-0"
            style={{ zIndex: "20" }}
            >
            <div className="toast-body fs-6 bg-success text-light rounded ">
                El producto fue agregado al carrito exitosamente
            </div>
            </div>
        )}
        </>
    );
};

export default Toast;