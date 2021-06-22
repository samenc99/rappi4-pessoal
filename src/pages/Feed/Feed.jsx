import Header from '../components/Header/Header'
import All, {AllContent, Smartphone} from "../../styleAll/styledAll";
import Search from "./Search/Search";
import {useEffect, useState} from "react";
import getRestaurantBusiness from "../../Business/restaurant/getRestaurantBusiness";
import CardFeed from "../components/CardFeed/CardFeed";

export default function Feed(props) {
  const [restaurants, setRestaurants] = useState([])
  const [restaurantsRendered, setRestaurantsRendered] = useState([]);
  const [back, setBack] = useState(false);

  const getRestaurants = async()=>{
    try{
      const res = await getRestaurantBusiness()
      setRestaurants(res)
    }catch (err){
      console.log(err.message)
    }
  }

  const onClickBack=(value)=>{
    setBack(value)
  }

  useEffect(()=>{
    getRestaurants()
  },[])

  const render = ()=> restaurantsRendered.map(r=>{
    return(
      <CardFeed restaurant={r} />
    )
  })


  return(
    <All>
      <Smartphone>
        <Header title={'Rappi4'} back={back} callbackClick={()=>onClickBack(false)}/>
        <AllContent>
          <Search id={'search'}
            restaurants={restaurants}
            setRestaurantsRendered={setRestaurantsRendered}
            onClick={()=>onClickBack(true)}
            back={back}
          />
          {render()}
        </AllContent>
      </Smartphone>
    </All>
  )
}