import {Container, Img, Info, Name, Shipping} from "./styled";


export default function CardFeed({restaurant, onClick}){
  return(
    <Container onClick={onClick}>
      <Img src={restaurant.logoUrl} alt={'logo-restaurante'}/>
      <Info>
        <Name>{restaurant.name}</Name>
        <Shipping>
          <p>{restaurant.deliveryTime} min</p>
          <p>Frete R${restaurant.shipping}</p>
        </Shipping>
      </Info>
    </Container>
  )
}