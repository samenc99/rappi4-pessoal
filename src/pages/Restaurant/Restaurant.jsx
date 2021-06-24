import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import getRestaurantBusiness from "../../Business/restaurant/getRestaurantBusiness";
import CardRestaurant from "./CardRestaurant/CardRestaurant";
import All, {AllContent, Smartphone} from "../../styleAll/styledAll";
import Header from "../components/Header/Header";

export default function Restaurant() {
  const [restaurant, setRestaurant] = useState([])
  const {id} = useParams()

  useEffect(async()=>{
    try{
      const res = await getRestaurantBusiness(id)
      setRestaurant(res)
      console.log(res)
    }catch (e){
      console.log(e.message)
    }
  },[])
  return(
    <All>
      <Smartphone>
        <Header title={'Restaurant'} back />
        <AllContent>
          <CardRestaurant restaurant={restaurant}/>
        </AllContent>
      </Smartphone>
    </All>
  )
}