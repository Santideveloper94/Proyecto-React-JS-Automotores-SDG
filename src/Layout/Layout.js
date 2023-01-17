import React from 'react'
import Spinner from '../Componentes/Spinner/Spinner'
import Toast from '../Componentes/Toast/Toast'

const Layout = ({children}) => {

    return (
        <>
        <Spinner/>
        <Toast/>
        {children}
        </>
    )
}

export default Layout