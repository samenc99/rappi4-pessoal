import getRestaurantEndpoint from "../../controller/restaurant/getRestaurantEndpoint";

export default async function () {
  try{
    const res = await getRestaurantEndpoint()
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