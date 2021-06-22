import {useEffect, useState} from 'react'
import {Container, Item} from "./styled";

export default function Category({restaurants, setRestaurantsRendered}){
  const [categories, setCategories] = useState([]);
  const [categoryAtual, setCategoryAtual] = useState('')

  const categoriesSet=()=>{
    const categories = []
    for(const restaurant of restaurants){
      let i =0
      for(i=0; i<categories.length; i++)
        if(restaurant.category === categories[i])break

      if(categories.length===i)
        categories.push(restaurant.category)
    }
    setCategories(categories)
  }

  const filterCategory = (category)=>{
    if(category!==categoryAtual){
      const newRestaurants = restaurants.filter(
        restaurant=>restaurant.category === category
      )
      setRestaurantsRendered(newRestaurants)
      setCategoryAtual(category)
    }
    else {
      setRestaurantsRendered([...restaurants])
      setCategoryAtual('')
    }
  }

  const renderCategories = ()=>categories.map(category=>{
    return <Item
      key={category}
      onClick={()=>filterCategory(category)}
      active={categoryAtual === category}
    >{category}
    </Item>
  })

  useEffect(()=>{
    categoriesSet()
  },[restaurants])

  return(
    <Container>{renderCategories()}</Container>
  )
}