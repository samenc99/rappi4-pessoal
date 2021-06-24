import {Container, Img, Info, Div, Name, Description} from "./styled";

export default function CardFood({
  product: {
   photoUrl, name, description, price
  }
}){
  return(
    <Container>
      <Img src={photoUrl}/>
      <Info>
        <Div>
          <Name>{name}</Name>
        </Div>
        <Description>{description}</Description>
        <Div>
          <p>R${price.toFixed(2)}</p>
        </Div>
      </Info>
    </Container>
  )
}