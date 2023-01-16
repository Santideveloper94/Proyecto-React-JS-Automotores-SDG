import React,{useState,useEffect} from 'react'
import Data from '../Data/Data.json'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = () => {
        const [productos, setproductos] = useState([])
        const promise = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(Data);
                },2000);
                })
            }
        useEffect(() => {
            promise().then((Data) => {
                setproductos(Data);
            })
        }, [
            
        ])
        
    
    
    return (
        <div>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer