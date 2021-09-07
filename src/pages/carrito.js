import{useContext, useParams} from 'react';
import CartContext from '../context/context';
import {Link} from 'react-router-dom'


export default function Carrito(){
    const {cart}= useContext(CartContext)
        return(
            <>
                { cart.map((elemento)=> (
             <div style={{border: '1px solid black', display:'flex'}}>
                <img src={elemento.image} style={{margin:'1%', width:'10%', height:'10%'}} />
                <div style={{padding:'1%'}}>
                    <h3>Nombre Producto: {elemento.title}</h3>
                    <h3>Precio: {elemento.price}</h3>
                    <h3>Cantidad: {elemento.count}</h3>
                    <button><Link to={`/producto-detalle/${elemento.id}`}>Volver al producto para actualizar</Link></button>
                </div>
            </div>
            ))}
            <div>
            <button><Link to="/productos">Continuar Comprando otros productos</Link></button>
            </div>
            </>
        )
}