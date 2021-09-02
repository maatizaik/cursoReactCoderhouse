import React, {useState, useContext} from 'react';
import {Link, } from 'react-router-dom';
import CartWidget from './cartWidget';



export default function ItemCount({onAdd, stock, items, initial}){
    
    const sumar= ()=>{
        if( items < stock){
            onAdd(items +1)
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
            <button onClick={sumar}>Agregar a carrito</button>
            <button onClick={restar}> Quitar de Carrito </button>
        </div>
        </>
    )
}


