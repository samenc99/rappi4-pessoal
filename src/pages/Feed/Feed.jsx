import Header from '../components/Header/Header'
import All, {AllContent, Smartphone} from "../../styleAll/styledAll";
import Search from "./Search/Search";
import {useEffect, useState} from "react";
import getRestaurantBusiness from "../../Business/restaurant/getRestaurantBusiness";
import CardFeed from "../components/CardFeed/CardFeed";
import Category from "./Category/Category";

export default function Feed(props) {
  const [restaurants, setRestaurants] = useState([])
  const [restaurantsRendered, setRestaurantsRendered] = useState([]);
  const [back, setBack] = useState(false);

  const getRestaurants = async()=>{
    try{
      const res = await getRestaurantBusiness()
      setRestaurants(res)
      setRestaurantsRendered(res)
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

  const renderRestaurants = ()=> restaurantsRendered.map(
    r=><CardFeed restaurant={r}/>
  )


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
          <Category restaurants={restaurants} setRestaurantsRendered={setRestaurantsRendered}/>
          {renderRestaurants()}
        </AllContent>
      </Smartphone>
    </All>
  )
}