import React from 'react'
import Item from '../Item/Item'
const ItemList = ({productos}) => {
    
    

    
    
    return (
        <div style={{width:'100%', display:'flex', justifyContent: "space-around", alingItems:'center', flexWrap:'wrap'}}>
        {productos.map(producto => 
        <div key={producto.id}>
            <Item producto={producto}/>
        </div>)}
        </div>
    )
}

export default ItemList