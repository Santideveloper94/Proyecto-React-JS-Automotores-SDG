import React, {useEffect,useState} from 'react'
import Data from '../Data/Data.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router'
const ItemDetailContainer = () => {
    const {productoId} = useParams()
    const [producto, setproducto] = useState({})
    const promise = (id) =>{
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Data.find(Item => Item.id === parseInt(id)));
            },500);
        })
    }
    useEffect(() => {
        promise(productoId).then((producto) => {
            setproducto(producto);
        })
        .catch(error => {
            console.log(error)
        })    
    }, [productoId])
    
    return (
            <ItemDetail producto={producto}/>
    )
}
export default ItemDetailContainer