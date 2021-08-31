import React, {useState, useContext} from 'react';
import {Link, } from 'react-router-dom';
import CartWidget from './cartWidget';



export default function ItemCount({stock, initial}){

    const [count, setCount] = useState(1)
    const validarSuma = function (){
        
        if(count<stock){
            setCount( count +1)
        }
    }
    const validarResta = function (){
        if(count>initial){
            setCount( count -1)
        }
    }

    return(
        <>
        <div>
            <CartWidget/> 
            <h1>En Carrito {count}</h1>
        </div>
        <div>
            <button onClick={() => validarSuma()}>Agregar a carrito</button>
            <button onClick={() => validarResta()}> Quitar de Carrito </button>
        </div>
        </>
    )
}


