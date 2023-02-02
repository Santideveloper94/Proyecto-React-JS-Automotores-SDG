import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../Contexto/ContextoCarrito'

const ItemCart = ({producto}) => {
	console.log(producto)
	const {marca, precio, imagen, alt,id, offer,quantity }= producto
    const {borrarElemento} = useContext(cartContext)
	const {removerTodoElCarrito} = useContext(cartContext)

    return (
        <>
			<div className='link__cart'>
				<section className='box__cart'>
					<div className='cart__quantity'>
							<h4 className='cart__quantity--number'>{quantity} unidades</h4>
					</div>  
					<div className='card'>
						<img src={imagen} className='card__image' alt={alt || 'Imagen del producto'}/>
						<div className='cart__header'>
							<h3 className='cart__marca'>
								{marca}
							</h3>
							<div className='cart__footer'>
								<div className='cart__footer--precio'>
									{offer===true? <p className='text__offer--item'>u$s{Math.round(precio/1.10)} Unidad</p> : <p className='text__precio--item'>u$s{precio}</p>}
									{offer ===true? <p className='text__offer--quantity'>Total <span>u$s{quantity * Math.round(precio/1.10)}</span></p>: <p className='text__offer--quantity'>Total <span>u$s{quantity * precio}</span></p>}
								</div>
								<button className='btn__cart btn__cart--delete ' onClick={() => borrarElemento(id)}>Eliminar</button>
								<button className='btn__cart btn__cart--delete ' onClick={() => removerTodoElCarrito()}>Vaciar Carrito</button>
							</div>
						</div>	
					</div>	
				</section>
			</div>
        </>
    )
}

export default ItemCart