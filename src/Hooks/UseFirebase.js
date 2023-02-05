import { useEffect, useState } from 'react'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { Db } from '../Firebase/Firebase';
import Swal from 'sweetalert2'

const UseFirebase = () => {

const [productos, setProductos] = useState([])
const [producto, setProducto] = useState(null)
const [loading , setLoading] = useState(false)

useEffect(() => {
    getProducts()

    return () => {
    }
}, [])

useEffect(() => {

}, [productos])


const getProducts = async () => {

    try {
        setLoading(true)
        const prodCol = collection(Db,'Vehiculos')
        await getDocs(prodCol).then((snapshot) => {
            if(snapshot.size === 0) {
                console.log('Base de datos esta vacio')
            }
            setLoading(false)
            setProductos(snapshot.docs.map((doc) =>  {
                return {
                    id:doc.id,
                    ...doc.data()
                }
            }))
        })
    } catch (error) {
    }
}

const getProduct =  async (id) => {

    try {
        setLoading(true)
        const document = doc(Db,"Vehiculos",id)
        const response = await getDoc(document)
        setProducto({id:response.id,...response.data()})
        setLoading(false)
    } catch (error) {
    }

};

const getTicket = async({datos}) => {
    try {
        const col = collection(Db, "Ordenes")
        const order = await addDoc(col, datos)
        return (
            setTimeout(() => {
                Swal.fire({
                    title: "Genial!",
                    text: `Su orden es ${order.id}`,
                    icon: "success",
                    timerProgressBar: true,
                })
            }, 2000));
    } catch (error) {
    }
}




    return {
        loading,
        productos,
        producto,
        getProducts,
        getProduct,
        getTicket
    }
}

export default UseFirebase