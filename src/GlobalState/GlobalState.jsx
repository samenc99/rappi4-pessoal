import {useState} from "react";
import GlobalStateContext from "./GlobalStateContext";

interface Cart {
  id : string,
  products : []
}

export default function GlobalState(props){
  const [cart : Cart, setCart] = useState({id:undefined, products:[]});

  const addCart = (idRestaurant, product)=>{
    const newCart = {...cart}
    if(!newCart.id)
      newCart.id = idRestaurant
    else if(newCart.id!==idRestaurant)
      throw new Error('Você não pode adicionar produtos de restaurantes diferentes.')

    if(!product.amount)product.amount=0

    product.amount++
    newCart.products.push(product)
    setCart(newCart)
  }

  const removeCart = (product)=>{
    const newCart = {}
    newCart.id = cart.id
    newCart.products = cart.products.filter(p=>{
      if(p.id===product.id){
        product.amount=0
        return false
      }
      return true
    })
    if(newCart.products.length===0)newCart.id=undefined

    console.log({newCart})
    setCart(newCart)
  }

  return(
    <GlobalStateContext.Provider value={{cart, addCart, removeCart}}>
      {props.children}
    </GlobalStateContext.Provider>
  )

}