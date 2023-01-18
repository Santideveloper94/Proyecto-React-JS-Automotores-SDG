import React,{useState,useEffect} from 'react'
import Data from '../Data/Data.json'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router'

const ItemListContainer = () => {
    const [producto, setproducto] = useState({})
    const {id} = useParams();
    const getProducts = () => {
        return new Promise ((res) => {
            setTimeout(() => {
                res(Data)
            }, 2000);
        });
    }
    const getProductsByCategory = (categoria) => {
        return new Promise((res) => {
            const productos = Data.filter(producto => producto.categoria === categoria);
            setTimeout(() => {
                res(productos);
            }, 2000);
        });
    }
    useEffect(() => {
        if(id){
            getProductsByCategory(id).then((producto) => {
                setproducto(producto)
            })
        }else{
            getProducts().then((producto) => {
                setproducto(producto);
            })
        }
    },[id])
    
    return (
        <div>
            <ItemList productos={producto}/>
        </div>
    )
}

export default ItemListContainer