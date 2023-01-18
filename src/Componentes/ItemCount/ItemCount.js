import React, {useState} from 'react'

const ItemCount = ({stock,onAdd}) => {
    const [contador, setcontador] = useState(1)

    const sumar = () =>{
        if(contador < stock){
            setcontador(contador + 1)
        }
    }  
    const restar = () => {
        if(contador > 1 ){
            setcontador(contador - 1)
        }
    }



    return (
        <div>
        <p>{contador}</p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={() => setcontador(1)}>Reset</button>
            <button onClick={() => onAdd(contador)}>Agregar Al Carrito</button>
        </div>
    )
}

export default ItemCount