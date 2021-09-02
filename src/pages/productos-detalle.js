import{useParams, Link} from 'react-router-dom';
import {useEffect,useState,useContext} from 'react'
import ItemCount from '../components/itemCount';
import CartContext from '../context/context'

export default function ProductoDetalle(){
    const {id } = useParams();

    const [ producto, setProducto] = useState([])
    const[loading, setLoading]= useState(false)
    const {carrito, setCarrito}= useContext(CartContext)
    const [items, setItems]=useState(0)
    
    const getProducto= async ()=>{
        try{
            setLoading(true)
            const response = await fetch(
                `https://fakestoreapi.com/products/${id}`
              );

            const data= await response.json()
            setProducto(data)
            setLoading(false)

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
        carritoBorrador.push(producto.name)
        setCarrito(carritoBorrador)
        
    }

    return (
        <>
            <Link to="/productos">Volver a Productos</Link>
            <div>
                <h1>Usted está viendo la categoría {producto.category}</h1>
                <h2>Detalles del producto {producto.name}</h2>
                <h3>{producto.price}</h3>
                <h6>El stock del producto es: {producto.id+6}</h6>
                <div style={{ display:'flex',border: '1px solid black', margin:'10px', padding:"10%"}}>
                    <img src={producto.image} style={{width:'25%', height:'25%'}} />
                    <div style={{marginLeft:'12%'}}>
                        <p style={{widht:'30%',height:'25%', marginTop:'2%'}}>{producto.description}</p>
                        <ItemCount items={items} onAdd={setItems} stock ={producto.id+6}  initial='0' />
                        {items > 0 && <button onCLick={handleClick}><Link to="/carrito" >Terminar Compra</Link></button>}
                        <button><Link to="/productos">Continuar Comprando</Link></button>
                    </div>
                </div>
                
            </div>

            
    
        </>)
    }