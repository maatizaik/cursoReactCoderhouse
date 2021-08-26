import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function Categorias(){
    const [ categorias, setCategorias] = useState([])
    const[loading, setLoading]= useState(false)
    const getCategorias= async ()=>{
        try{
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data= await response.json()
            setCategorias(data)
            console.log(data)
            setLoading(false)
            

        }catch(error){
            alert(error)

        }
    }
    useEffect(()=>{
        getCategorias()
    },[])
    if (loading){
        return(
            <h1>Cargando...</h1>)
        }
    return (
        <>
            { categorias.map((elemento)=> (
            <div>
                <ul>
                    <li>
                    <Link to={`/categoria-producto/${elemento}`}>Ver productos en la categoria {elemento}</Link>
                    </li>
                </ul>
                
            </div>
            ))}
        </>
    );  
}