import{useParams, Link} from 'react-router-dom';
import {useEffect,useState,useContext} from 'react'
import ItemCount from '../components/itemCount';
import CartContext from '../context/context'

export default function ProductoDetalle(){
    const {id } = useParams();

    const [ producto, setProducto] = useState([])
    const[loading, setLoading]= useState(false)
    const {listaProductos, setListaProductos, carrito, setCarrito}= useContext(CartContext)
    
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

    const handleClick=()=>{
        const carritoBorrador=[...carrito];
        carritoBorrador.push(producto);
        setCarrito(carritoBorrador)
        
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
                    <ItemCount stock ='5' initial ='0'/>
                    <button onCLick={handleClick}>a Carrito</button>
                    <button><Link to="/carrito" >Terminar Compra</Link></button>
                    <button><Link to="/productos">Continuar Comprando</Link></button>
                </div>
                
            </div>

            
    
        </>)
    }