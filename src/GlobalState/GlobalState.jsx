import {useState} from "react";
import GlobalStateContext from "./GlobalStateContext";

interface Cart {
  id : string,
  products : []
}

export default function GlobalState(props){
  const [cart : Cart, setCart] = useState({});

  const addCart = (idRestaurant, product)=>{
    const newCart = {...cart}
    if(!newCart.id)
      newCart.id = idRestaurant
    else if(newCart.id!==idRestaurant)
      throw new Error('Você não pode adicionar produtos de restaurantes diferentes.')

    newCart.products.push(product)
    setCart(newCart)
  }

  const removeCart = (product)=>{
    const newCart = {...cart}
    newCart.products = newCart.products.filter(p=>p.id!==product.id)
    if(newCart.products.length===0)newCart.id=undefined

    setCart(newCart)
  }

  return(
    <GlobalStateContext.Provider value={{cart, addCart, removeCart}}>
      {props.children}
    </GlobalStateContext.Provider>
  )

}