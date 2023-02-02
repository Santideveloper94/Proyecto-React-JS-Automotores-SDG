import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Contexto/ContextoCarrito'
import useFirebase from '../../Hooks/UseFirebase'
import Swal from 'sweetalert2'



const Formulario = ({total, compra}) => {
        // const [ error, setError ] = useState({})

    const { getTicket } = useFirebase()
    const { limpiarCarrito, validarFormulario } = useContext(cartContext)
    const [formData, setFormData] = useState({        
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            mensaje: '',
        // total: total,
        // items: compra,
        });

        const handleChange = (event) => {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }

        const onSubmit = (e) => {
            e.preventDefault();
            console.log("form", formData.nombre)
            if (validarFormulario([formData.nombre, formData.apellido, formData.email, formData.telefono, formData.mensaje])) {
                Swal.fire({
                title: "Oops!",
                text: "Faltan campos por completar",
                icon: "error",
                });
                return;
            }
            Swal.fire({
                title: "Felicidades!",
                text: `Su orden de compra ha sido generada correctamente!`,
                timerProgressBar: true,
                showConfirmButton: true, 
                confirmButtonText: 'Ver mi orden de compra',
                // timer: 5000,
                icon: "success",
            });
            getTicket({ datos: formData });
            limpiarCarrito();
        };
    
    return (
    <>
        <form className='form__cart' onSubmit={onSubmit}>
            <input
                className='form__text'
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
            />
            <input
                className='form__text'
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleChange}
            />
            <input
                className='form__text'
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                className='form__text'
                type="text"
                name="telefono"
                placeholder="Telefono"
                value={formData.telefono}
                onChange={handleChange}
            />
            <textarea
                className='form__text'
                type="text"
                name="mensaje"
                placeholder="Escriba su mensaje"
                value={formData.mensaje}
                onChange={handleChange}
            />
            <button className='btn__cart' type="submit">Finalizar mi compra</button><br />
            <Link to="/" className="btn__volver">Volver a comprar</Link>
        </form>
    </>
    );
}

export default Formulario