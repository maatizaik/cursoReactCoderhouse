import{useParams, Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {doc, getDoc } from 'firebase/firestore';
import {getData} from '../firebase/index';
import ItemCount from '../components/itemCount';


export default function ProductoDetalle(){
    const {id } = useParams();
    const [ producto, setProducto] = useState([])
    const[loading, setLoading]= useState(false)
    const [items, setItems]=useState(0)
    
    const getProducto= async ()=>{
        try{
            setLoading(true)
            const productoRef = doc(getData(), "Productos", `${id}`);
            const productoSnap = await getDoc(productoRef);
            setProducto(productoSnap.data())
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
        
       

    return (
        <>
            
                <Link to="/productos">Volver a Productos</Link>
                <div>
                    <h1 style={{margin:'2%'}}>Usted está viendo la categoría {producto.category}. Si quiere ver más productos de esta categoría presione<Link to={`/categoria-producto/${producto.category}`}> aquí</Link></h1>
                    <div style={{ display:'flex',border: '1px solid black', margin:'10px', padding:"10%"}}>
                        <img src={producto.image} style={{width:'25%', height:'25%'}} />
                        <div style={{marginLeft:'12%'}}>
                            <h2>Producto: {producto.title}</h2>
                            <h3>Precio: ${producto.price}</h3>
                            <h6>El stock del producto es: {producto.id+6}</h6>
                            <p style={{widht:'30%',height:'25%', marginTop:'2%'}}>{producto.description}</p>
                            <ItemCount items={items} onAdd={setItems} stock ={producto.id+6}  initial='0' producto={producto}/>
                        </div>
                    </div>
                </div>
            
            
    
        </>)
    }