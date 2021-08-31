import{useContext, useParams} from 'react';
import CartContext from '../context/context';
import {carrito} from '../pages/productos-detalle'


export default function Carrito(carrito){
    const {producto, setProducto}= useContext(CartContext)
    console.log(carrito)
        return(
            <>
                <h1>El carrito está vacío</h1>
            </>
        )
}