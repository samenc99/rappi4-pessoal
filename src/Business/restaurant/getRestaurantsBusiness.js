import getRestaurantsEndpoint from "../../controller/restaurant/getRestaurantsEndpoint";

export default async function getRestaurantsBusiness() {
  try{
    const res = await getRestaurantsEndpoint()
    if('restaurants' in res?.data){
      if(res.data.restaurants.length>0){
        return res.data.restaurants
      }
    }
    throw new Error('Não há restaurantes.')
  }catch (err){
    throw new Error(err.message)
  }
}