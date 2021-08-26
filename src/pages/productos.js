import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function Productos(){
    const [ productos, setProductos] = useState([])
    const[loading, setLoading]= useState(false)
    const getProductos= async ()=>{
        try{
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            const data= await response.json()
            setProductos(data)
            console.log(data)
            setLoading(false)
            

        }catch(error){
            alert(error)

        }
    }
    useEffect(()=>{
        getProductos()
    },[])
    if (loading){
        return(
            <h1>Cargando...</h1>)
        }
    return (
        <>
            { productos.map((elemento)=> (
            <div style={{border: '1px solid black', margin:'10px', padding:"20%"}}>
                <h3>Categoria Producto: {elemento.category}</h3>
                <h3>Nombre Producto: {elemento.title}</h3>
                <Link to={`/producto-detalle/${elemento.id}`}>Ver detalle del producto</Link>
                
            </div>
            ))}
        </>
    );  
}