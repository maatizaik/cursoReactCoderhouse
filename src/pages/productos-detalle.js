import{useParams, Link} from 'react-router-dom';
import {useEffect,useState} from 'react'

export default function ProductoDetalle(){
    const {id } = useParams();

    const [ producto, setProducto] = useState([])
    const[loading, setLoading]= useState(false)
    
    const getProducto= async ()=>{
        try{
            setLoading(true)
            const response = await fetch(
                `https://fakestoreapi.com/products/${id}`
              );

            const data= await response.json()
            setProducto(data)
            setLoading(false)
            console.log(data)

        }catch(error){
            alert(error)

        }
    }
    useEffect(()=>{
        getProducto()
    },[])
    if (loading){
        return(
            <h1>Cargando...</h1>)
        }


    return (
        <>
            <Link to="/productos">Volver a Productos</Link>
            <div>
                <h1>Usted está viendo la categoría {producto.category}</h1>
                <h3>Detalles del producto {producto.name}</h3>
                <h3>{producto.price}</h3>
                <div style={{ border: '1px solid black', margin:'10px', padding:"20%"}}>
                    <img src={producto.image} />
                    <p>{producto.description}</p>
                </div>
                
            </div>
            
    
        </>)
    }