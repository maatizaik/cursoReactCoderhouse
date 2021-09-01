import React, { createContext, useState } from 'react';


export const CartContext = createContext({});//1 - JSON VACIO

export const CartProvider = ({ children }) => {
     //2 - creacion de un estado

    const [carrito, setCarrito]=useState([]);
    
  return (
    <CartContext.Provider value={carrito, setCarrito}>
      {children}
    </CartContext.Provider>
  );

}
export default CartContext