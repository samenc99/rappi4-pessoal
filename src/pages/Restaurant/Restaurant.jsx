import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import getRestaurantBusiness from "../../Business/restaurant/getRestaurantBusiness";
import CardRestaurant from "./CardRestaurant/CardRestaurant";
import All, {AllContent, Smartphone} from "../../styleAll/styledAll";
import Header from "../components/Header/Header";
import {MyCircularProgress} from "../components/MyCircularProgress";
import Category from "./Category/Category";

export default function Restaurant() {
  const {id} = useParams()
  const [restaurant, setRestaurant] = useState([])
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const categoriesSet = (products)=>{
    const newCategories = [...categories]
    products.forEach(product=>{
      let i
      for(i=0; i<newCategories.length; i++){
        if(product.category===newCategories[i])break
      }
      if(i===newCategories.length)
        newCategories.push(product.category)
    })
    setCategories(newCategories)
  }

  useEffect(async()=>{
    try{
      const res = await getRestaurantBusiness(id)
      setRestaurant(res)
      setLoading(false)
      setProducts(res.products)
      categoriesSet(res.products)
    }catch (e){
      console.log(e.message)
    }
  },[])

  return(
    <All>
      <Smartphone>
        <Header title={'Restaurant'} back />
        <AllContent>
          {loading? <MyCircularProgress/> :
            <>
              <CardRestaurant restaurant={restaurant}/>
              {
                categories.map(category=>{
                  return <Category category={category} products={products}/>
                })
              }
            </>
          }
        </AllContent>
      </Smartphone>
    </All>
  )
}