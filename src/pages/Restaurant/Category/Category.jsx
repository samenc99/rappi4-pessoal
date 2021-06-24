import {Container, Title} from "./styled";
import CardFood from "./CardFood/CardFood";

export default function Category({products, category}){

  const productsFilter = products.filter(product=>product.category===category)

  return(
    <Container>
      <Title>{category}</Title>
      {
        productsFilter.map(product=>{
          return <CardFood product={product} />
        })
      }
    </Container>
  )
}