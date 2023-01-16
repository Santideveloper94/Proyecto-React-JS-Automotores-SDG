import React, {useEffect,useState} from 'react'
import Data from '../Data/Data.json'
import ItemDetail from '../ItemDetail/ItemDetail'
const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})
    const promise = () =>{
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Data);
            },2000);
        })
    }
    useEffect(() => {
        promise().then((Data) => {
            const producto = Data.find(item => item.id === 1 )
            setproducto(producto);
        })    
    }, )
    
    return (
            <ItemDetail producto={producto}/>
    )
}
export default ItemDetailContainer