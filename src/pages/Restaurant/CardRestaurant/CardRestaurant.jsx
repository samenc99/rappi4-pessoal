import {Container, Img, Rose, Grey, Info} from "./styled";

export default function CardRestaurant({restaurant}){
  return(
    <Container>
      <Img src={restaurant.logoUrl}/>
      <Info>
        <Rose>{restaurant.name}</Rose>
        <Grey>{restaurant.deliveryTime} min Frete R${restaurant.shipping.toFixed(2)}</Grey>
        <Grey>{restaurant.address}</Grey>
      </Info>
    </Container>
  )
}