import Header from '../components/Header/Header'
import All, {AllContent, Smartphone} from "../../styleAll/styledAll";
import Search from "./Search/Search";
import {useEffect, useState} from "react";
import restaurantEndpoint from "../../controller/restaurant/restaurantEndpoint";

export default function Feed(props) {
  const [restaurants, setRestaurants] = useState([])
  const [restaurantsRendered, setRestaurantsRendered] = useState([]);

  const getRestaurants = async()=>{
    const res = await restaurantEndpoint()
    if(typeof res ==='string'){
      console.log('erro')
    }
    else{
      setRestaurants(res)
      setRestaurantsRendered(res)
    }
  }

  useEffect(()=>{
    getRestaurants()
  },[])

  return(
    <All>
      <Smartphone>
        <Header title={'Rappi4'}/>
        <AllContent>
          <Search
            restaurants={restaurants}
            setRestaurantsRendered={setRestaurantsRendered}
          />
        </AllContent>
      </Smartphone>
    </All>
  )
}