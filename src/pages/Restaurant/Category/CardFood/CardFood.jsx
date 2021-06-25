import {Container, Img, Info, Div, Name, Description, Button, Amount} from "./styled";
import {useContext, useEffect, useState} from "react";
import GlobalStateContext from "../../../../GlobalState/GlobalStateContext";
import AddCart from "./AddCart/AddCart";

export default function CardFood({product}){
  const {cart, addCart, removeCart} = useContext(GlobalStateContext)
  const [added, setAdded] = useState(false);
  const [renderAddCart, setRendedrAddCart] = useState(false)

  useEffect(()=>{
    for(let p of cart.products){
      if(p.id===product.id){
        setAdded(true)
        break
      }
    }
  },[])

  const onClickAdd = ()=>{
    try{
      addCart(1, product)
      setAdded(true)
    }catch (err){
      alert(err.message)
    }
  }

  const onClickRemove = ()=>{
    setAdded(false)
    removeCart(product)
  }

  return(
    <Container>
      <Img src={product.photoUrl}/>
      <Info>
        <Div>
          <Name>{product.name}</Name>
        </Div>
        <Description>{product.description}</Description>
        <Div>
          <p>R${product.price.toFixed(2)}</p>
        </Div>
      </Info>
      {
        added?
          <>
            <Amount>{product.amount}</Amount>
            <Button added={added} onClick={onClickRemove}>remover</Button>
          </>
          :
          <Button added={added} onClick={()=>setRendedrAddCart(true)}>adicionar</Button>
      }
      {
        renderAddCart?
          <AddCart />
          :
          <></>
      }
    </Container>
  )
}