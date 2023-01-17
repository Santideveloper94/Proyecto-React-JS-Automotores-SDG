import React from "react";
import { ProveedorGlobal } from "../../Contexto/ContextoGlobal";

const Spinner = () => {
    const loading  = ProveedorGlobal();
    return (
        <>
        {loading && (
            <div className="w-100
                            position-fixed
                            top-0 
                            left-0
                            bg-light
                            d-flex 
                            align-items-center 
                            justify-content-center 
                            full-height"
                    style={{zIndex:100}}
                >
                <div
                className="spinner-grow"
                style={{ width: "3rem", height: "3rem" }}
                >
                <span className="visually-hidden">Cargando...</span>
                </div>
            </div>

        )}
        </>
    );
};

export default Spinner;