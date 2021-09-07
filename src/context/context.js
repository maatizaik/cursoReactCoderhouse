import React, { createContext, useState } from 'react';


export const CartContext = createContext([]);//1 - JSON VACIO

export const CartProvider = ({ children }) => {
     //2 - creacion de un estado
    const [cart, setCart]=useState([]);
    

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
  }
  export default CartContext
