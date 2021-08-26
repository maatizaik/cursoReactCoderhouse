import{useParams, Link} from 'react-router-dom';
import {useEffect,useState} from 'react'

export default function CategoriaProductos(){
    const {id } = useParams();

    const [ categoriaProductos, setCategoriaProductos] = useState([])
    const[loading, setLoading]= useState(false)
    
    const getCategoriaProductos= async ()=>{
        try{
            setLoading(true)
            const response = await fetch(
                `https://fakestoreapi.com/products/category/${id}`
              );

            const data= await response.json()
            setCategoriaProductos(data)
            setLoading(false)
            console.log(data)

        }catch(error){
            alert(error)

        }
    }
    useEffect(()=>{
        getCategoriaProductos()
    },[])
    if (loading){
        return(
            <h1>Cargando...</h1>)
        }


    return (
        <>
            <Link to="/categorias">Volver a Categorias</Link>
            { categoriaProductos.map((elemento)=> (
            <div style={{border: '1px solid black', margin:'10px', padding:"20%"}}>
                <h3>Categoria Producto: {elemento.category}</h3>
                <h3>Nombre Producto: {elemento.title}</h3>
                <Link to={`/producto-detalle/${elemento.id}`}>Ver detalle del producto</Link>
                
            </div>
            ))}
        </>)
    }