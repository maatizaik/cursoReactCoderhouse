import React, {useState, useContext} from 'react';
import {Link, } from 'react-router-dom';
import CartWidget from './cartWidget';
import CartContext from '../context/context'



export default function ItemCount({onAdd, stock, items, initial, producto}){
    const {cart, setCart}= useContext(CartContext)
    console.log(cart)
    
    const checkearProducto = (cart,producto, items ) => {
        const productoEncontrado = cart.find(elemento => elemento.id === producto.id);
        if (productoEncontrado) {
            productoEncontrado.count=items;

        }else {

          cart.push({
            ...producto,
            count: items,
          });}
        return cart;
      };
    const addItem = (item) => {
        const cartBorrador = [...cart];
        const cleanCart = checkearProducto(cartBorrador, producto,items)
        setCart(cleanCart);
        };

    const removeItem = () => {
        const cartBorrador = [...cart];
        const cleanCart = cartBorrador.filter(elemento => elemento.id !== producto.id);
        setCart(cleanCart);
    }

    const sumar= ()=>{
        if( items < stock){
            onAdd(items +1);
         
        }
    };
    const restar= () =>{
        if (items>initial){
            onAdd(items -1)
        }
    }

    
    

    return(
        <>

        <div style={{display:'flex'}}>
            <CartWidget/> 
            <h1>Enviar a Carrito {items}</h1>
        </div>
        <div>
            <div>
                <button onClick={sumar}>Agregar a carrito</button>
                <button onClick={restar}> Quitar de Carrito </button>
            </div>
            {items>0&&<button onClick={addItem}>Terminar Compra</button>}
            {<button onClick={addItem}><Link to="/carrito">Ir al carrito</Link></button>}
            <button onClick={() => removeItem(producto.id)}>Quitar Producto del Carrito</button>
            
        </div>
        
        </>
    )
}


