import {Container, Img, Rose, Grey, Info} from "./styled";

export default function CardRestaurant({
  restaurant:{
    logoUrl, name, deliveryTime, shipping, address, category
  }
}){
  return(
    <Container>
      <Img src={logoUrl}/>
      <Info>
        <Rose>{name}</Rose>
        <Grey>{category}</Grey>
        <Grey>{deliveryTime} min Frete R${shipping.toFixed(2)}</Grey>
        <Grey>{address}</Grey>
      </Info>
    </Container>
  )
}