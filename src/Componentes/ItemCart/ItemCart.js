import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../Contexto/ContextoCarrito'

const ItemCart = (item) => {

	const {producto:{item:{marca, precio, imagen, alt,id, offer }, quantity}} = item
    const {borrarProducto} = useContext(cartContext)

    return (
        <>
			<div className='link__cart'>
				<section className='box__cart'>
					<div className='cart__quantity'>
							<h4 className='cart__quantity--number'>{quantity}u</h4>
					</div>  
					<div className='card'>
						<img src={imagen} className='card__image' alt={alt || 'Imagen del producto'}/>
						<div className='cart__header'>
							<h3 className='cart__marca'>
								{marca}
							</h3>
							<div className='cart__footer'>
								<div className='cart__footer--precio'>
									{offer===true? <p className='text__offer--item'>ARS ${Math.round(precio/1.10)} Unidad</p> : <p className='text__precio--item'>ARS ${precio} unidad</p>}
									{offer ===true? <p className='text__offer--quantity'>Total <span>ARS ${quantity * Math.round(precio/1.10)}</span></p>: <p className='text__offer--quantity'>Total <span>ARS ${quantity * precio}</span></p>}
								</div>
								<button className='btn__cart btn__cart--delete ' onClick={() => borrarProducto(id)}>Eliminar</button>
							</div>
						</div>	
					</div>	
				</section>
			</div>
        </>
    )
}

export default ItemCart