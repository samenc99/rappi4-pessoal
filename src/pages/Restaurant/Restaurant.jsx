import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import getRestaurantBusiness from "../../Business/restaurant/getRestaurantBusiness";

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
    <div>oi</div>
  )
}