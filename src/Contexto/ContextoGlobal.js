import React, { createContext, useContext, useState } from 'react'

const ContextoGlobal = createContext()

export const ProveedorGlobal = () => useContext(ContextoGlobal)

const EstadoGlobal = ({children}) => {

    const [buscar,setBuscar] = useState("");
    const [mostrarAlerta,setMostrarAlerta] = useState(false);
    const [loading,setLoading] = useState(false)

    return (
        <ContextoGlobal.Provider value={{
            buscar,
            mostrarAlerta,
            setBuscar,
            setMostrarAlerta,
            loading,
            setLoading
            }}>
            {children}
        </ContextoGlobal.Provider>
    )
}

export default EstadoGlobal